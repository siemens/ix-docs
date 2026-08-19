const INDENT_SIZE = 2;
const TAG_NAME_PATTERN = /^[A-Za-z][\w.:-]*/;
const MARKDOWN_CONTAINER_PATTERN =
  /^(?:[ \t]*>[ \t]*)*(?:[ \t]*(?:[-+*]|\d+[.)])[ \t]+)?[ \t]*$/;
const MARKDOWN_MARKER_PATTERN = /(?:>|(?:^|[ \t])(?:[-+*]|\d+[.)])(?=[ \t]))/;
const RAW_TEXT_ELEMENTS = new Set(['script', 'style']);
const VOID_ELEMENTS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

function createIndentFix(sourceCode, line, actual, expected) {
  return (fixer) => {
    const start = sourceCode.getIndexFromLoc({ line, column: 0 });
    return fixer.replaceTextRange(
      [start, start + actual],
      ' '.repeat(expected)
    );
  };
}

function findTagEnd(content, start, state) {
  for (let index = start; index < content.length; index += 1) {
    const character = content[index];

    if (state.quote) {
      if (character === '\\') {
        index += 1;
      } else if (character === state.quote) {
        state.quote = undefined;
      }
      continue;
    }

    if (character === '"' || character === "'" || character === '`') {
      state.quote = character;
    } else if (character === '{') {
      state.braceDepth += 1;
    } else if (character === '}') {
      state.braceDepth = Math.max(0, state.braceDepth - 1);
    } else if (character === '>' && state.braceDepth === 0) {
      return index;
    }
  }

  return -1;
}

function findNextTagStart(content, start) {
  let index = content.indexOf('<', start);

  while (index !== -1) {
    const nameStart = content[index + 1] === '/' ? index + 2 : index + 1;
    const name = content.slice(nameStart).match(TAG_NAME_PATTERN)?.[0];
    const boundary = name && content[nameStart + name.length];

    if (name && (!boundary || /[\s/>]/.test(boundary))) {
      return index;
    }

    index = content.indexOf('<', index + 1);
  }

  return -1;
}

function getLinePosition(content, tagColumn) {
  const prefix = content.slice(0, tagColumn);
  const block = MARKDOWN_CONTAINER_PATTERN.test(prefix);

  return {
    block,
    fixable: block && !MARKDOWN_MARKER_PATTERN.test(prefix),
    hasMarkdownMarker: MARKDOWN_MARKER_PATTERN.test(prefix),
  };
}

function isSelfClosing(content, tagEnd) {
  return content.slice(0, tagEnd).trimEnd().endsWith('/');
}

export default {
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce indentation for block HTML and JSX markup',
    },
    fixable: 'whitespace',
    schema: [],
    messages: {
      indentation:
        'Expected indentation of {{expected}} spaces but found {{actual}}.',
      markupAfterComment: 'Move markup after a comment to a new line.',
      unclosedTag: 'Tag <{{tag}}> is not closed before its parent.',
      unexpectedClosingTag:
        'Closing tag </{{tag}}> has no matching opening tag.',
    },
  },
  create(context) {
    const sourceCode = context.sourceCode;

    function reportIndentation(line, actual, expected, fixable) {
      if (actual === expected) {
        return;
      }

      context.report({
        loc: {
          start: { line, column: actual },
          end: { line, column: actual + 1 },
        },
        messageId: 'indentation',
        data: { actual, expected },
        fix: fixable
          ? createIndentFix(sourceCode, line, actual, expected)
          : undefined,
      });
    }

    function reportUnclosedTag(element) {
      context.report({
        loc: {
          start: { line: element.line, column: element.column },
          end: {
            line: element.line,
            column: element.column + element.tag.length + 1,
          },
        },
        messageId: 'unclosedTag',
        data: { tag: element.tag },
      });
    }

    return {
      'Program:exit'() {
        const elements = [];
        let fence;
        let inHtmlComment = false;
        let inJsxComment = false;
        let pendingElement;

        function pushElement(element, content, tagEnd) {
          if (!element.void && !isSelfClosing(content, tagEnd)) {
            elements.push(element);
          }
        }

        function closeElement(tag, line, column, position) {
          const matchingIndex = elements.findLastIndex(
            (element) => element.tag === tag
          );

          if (matchingIndex === -1) {
            if (VOID_ELEMENTS.has(tag)) {
              return;
            }

            context.report({
              loc: {
                start: { line, column },
                end: { line, column: column + tag.length + 3 },
              },
              messageId: 'unexpectedClosingTag',
              data: { tag },
            });
            return;
          }

          if (matchingIndex !== elements.length - 1) {
            elements
              .slice(matchingIndex + 1)
              .forEach((element) => reportUnclosedTag(element));
            elements.length = matchingIndex;
            return;
          }

          const element = elements.pop();

          if (position.block) {
            reportIndentation(
              line,
              column,
              element.indentation,
              position.fixable
            );
          }
        }

        function getPreviousNonEmptyLine(line) {
          for (let index = line - 2; index >= 0; index -= 1) {
            const previousLine = sourceCode.lines[index];

            if (previousLine.trim() !== '') {
              return previousLine;
            }
          }

          return undefined;
        }

        function processContent(content, line, start = 0, allowBlock = true) {
          let cursor = start;
          let canBeBlock = allowBlock;
          let markupAfterComment = false;

          while (cursor < content.length) {
            const rawElement = elements.at(-1);

            if (rawElement && RAW_TEXT_ELEMENTS.has(rawElement.tag)) {
              const closingPattern = new RegExp(
                `</${rawElement.tag}\\s*>`,
                'i'
              );
              const closingMatch = closingPattern.exec(content.slice(cursor));

              if (!closingMatch) {
                return;
              }

              const column = cursor + closingMatch.index;
              const linePosition = getLinePosition(content, column);
              closeElement(rawElement.tag, line, column, {
                ...linePosition,
                block: canBeBlock && linePosition.block,
              });
              cursor = column + closingMatch[0].length;
              canBeBlock = false;
              continue;
            }

            if (inHtmlComment || inJsxComment) {
              const closingMarker = inHtmlComment ? '-->' : '*/}';
              const closingIndex = content.indexOf(closingMarker, cursor);

              if (closingIndex === -1) {
                return;
              }

              inHtmlComment = false;
              inJsxComment = false;
              cursor = closingIndex + closingMarker.length;
              markupAfterComment = true;
              continue;
            }

            const htmlCommentIndex = content.indexOf('<!--', cursor);
            const jsxCommentIndex = content.indexOf('{/*', cursor);
            const tagIndex = findNextTagStart(content, cursor);
            const nextIndex = [htmlCommentIndex, jsxCommentIndex, tagIndex]
              .filter((index) => index !== -1)
              .sort((left, right) => left - right)[0];

            if (nextIndex === undefined) {
              return;
            }

            if (nextIndex === htmlCommentIndex) {
              inHtmlComment = true;
              cursor = htmlCommentIndex + 4;
              canBeBlock = false;
              continue;
            }

            if (nextIndex === jsxCommentIndex) {
              inJsxComment = true;
              cursor = jsxCommentIndex + 3;
              canBeBlock = false;
              continue;
            }

            const linePosition = getLinePosition(content, tagIndex);
            const position = {
              ...linePosition,
              block: canBeBlock && linePosition.block,
            };
            const followsComment = markupAfterComment;

            if (followsComment) {
              context.report({
                loc: {
                  start: { line, column: tagIndex },
                  end: { line, column: tagIndex + 1 },
                },
                messageId: 'markupAfterComment',
              });
              markupAfterComment = false;
            }

            if (elements.length === 0 && !position.block && !followsComment) {
              cursor = tagIndex + 1;
              canBeBlock = false;
              continue;
            }

            const closing = content[tagIndex + 1] === '/';
            const nameStart = closing ? tagIndex + 2 : tagIndex + 1;
            const tag = content
              .slice(nameStart)
              .match(TAG_NAME_PATTERN)[0]
              .toLowerCase();

            if (closing) {
              const tagEnd = content.indexOf('>', nameStart + tag.length);

              if (tagEnd === -1) {
                return;
              }

              closeElement(tag, line, tagIndex, position);
              cursor = tagEnd + 1;
              canBeBlock = false;
              continue;
            }

            let expectedIndentation =
              elements.length > 0
                ? elements.at(-1).indentation + INDENT_SIZE
                : position.hasMarkdownMarker && !followsComment
                  ? tagIndex
                  : 0;
            const previousLine = getPreviousNonEmptyLine(line);
            const previousIndentation = previousLine
              ? previousLine.length - previousLine.trimStart().length
              : undefined;

            if (
              elements.length > 0 &&
              tagIndex > expectedIndentation &&
              previousLine?.trimStart().startsWith('{') &&
              tagIndex === previousIndentation + INDENT_SIZE
            ) {
              expectedIndentation = tagIndex;
            }

            if (position.block && !followsComment) {
              reportIndentation(
                line,
                tagIndex,
                expectedIndentation,
                position.fixable
              );
            }

            const element = {
              column: tagIndex,
              indentation: expectedIndentation,
              line,
              state: {
                braceDepth: 0,
                quote: undefined,
              },
              tag,
              void: VOID_ELEMENTS.has(tag),
            };
            const tagEnd = findTagEnd(
              content,
              nameStart + tag.length,
              element.state
            );

            if (tagEnd === -1) {
              pendingElement = element;
              return;
            }

            pushElement(element, content, tagEnd);
            cursor = tagEnd + 1;
            canBeBlock = false;
          }
        }

        sourceCode.lines.forEach((lineContent, index) => {
          const line = index + 1;
          const trimmed = lineContent.trimStart();
          const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);

          if (fenceMatch) {
            const sequence = fenceMatch[1];

            if (!fence) {
              fence = {
                length: sequence.length,
                marker: sequence[0],
              };
            } else if (
              sequence[0] === fence.marker &&
              sequence.length >= fence.length
            ) {
              fence = undefined;
            }
            return;
          }

          if (fence) {
            return;
          }

          if (pendingElement) {
            const tagEnd = findTagEnd(lineContent, 0, pendingElement.state);

            if (tagEnd === -1) {
              return;
            }

            pushElement(pendingElement, lineContent, tagEnd);
            pendingElement = undefined;
            processContent(lineContent, line, tagEnd + 1, false);
            return;
          }

          processContent(lineContent, line);
        });

        if (pendingElement) {
          reportUnclosedTag(pendingElement);
        }
        elements.forEach((element) => reportUnclosedTag(element));
      },
    };
  },
};
