# IX documentation style guide for Gemini Code Assist

## Project overview

- This repo documents Siemens Industrial Experience (IX), an open-source design system for industrial software UI/UX.
- Docs are built with [Docusaurus](https://docusaurus.io/) (see `docusaurus.config.ts`, `sidebars.ts`) and use Markdown for content in `docs/` and `blog/`.
- UI component documentation is organized under `docs/components/`, with each component in its own folder and an `overview.md`.
- Custom plugins, e.g. `plugins/figma-pictures/figma.ts` extend Docusaurus for design asset integration.

## Guidelines of code.md files

Typical structure:
1. Basic
2. Further examples
3. API for {component}

## Guidelines for guide.md files

- Avoid redundancy, less is always more.
- Use “you” and “we” to talk to the readers
- Always give suggestions for our open-source readers (instead of outright commands and strict rules), using these types of phrases:
    - As a general rule, we use tables for x, but don’t use them with x.
    - Typically at Siemens, we x.
    - In our applications, we x.
    - For our software, we x.
    - We recommend x.
    - We usually x.

### Formatting

- Apostrophe: Always use the symbol ’ (U+2019, "right single quotation mark"), not '
- Use sentence case always: Start with a big letter and then only proper nouns are capitalized.

### File structure

We always have the following ordering of sections in our markdown files:
1. Front matter (title and description)
2. Short description and its anatomy (without headline, with image and a list)
3. Variants
4. Options
5. Behavior in context
6. States
7. Dos and Don’ts
8. Related

Note that **not** all sections need to be filled out, e.g. if there are no variants or options.

### Grammar, voice and tone

- Use "don’t", "isn’t", "haven’t" and "aren’t" instead of "do not", "is not", "have not" and "are not".
- Use "e.g." instead of "for example", "such as" or "like".
- Use "changelog" instead of "change log" (as one word).
- Use "among other things" instead of "inter alia".
- Use active voice instead of passive voice.
- Talk about components in plurals, e.g. buttons, icons, breadcrumbs. An exception are components from the application frame since they only occur once in an application.
- Use present simple tense whenever possible as the guide is forever and not just for the future, e.g. buttons show x, users select x.
- Talk about "users" and not "the user" (plural).
- Capitalize and use proper nouns, e.g. write button not Button, application header not Application Header - the only component which is an official and recognized proper noun is "About and legal information".
- No whitespace at the end of lines.

### Special guidelines for specific sections

#### States section

- Write it in this form: {component} have six states: Default, hover, active, disabled, loading and focused. In a disabled state, {component} are visually displayed but don’t offer any user interaction.
- It is then followed by an image.

#### Options section

- Naming of options: Stick to spelling of code section but avoid technical jargon, e.g. if code is "i18nPlainText", in description write "Plain text"
- The option name and the colon is bold, e.g. "**Label:**"

#### Dos and Don’ts section

- The title is "Dos and Don’ts"
- No use of full stops or punctuation necessary so make each one ONLY ONE sentence
- For Dos, start with "Do x"
- For Don’ts, start with "Don’t x"
- Always have at least 1 do and 1 don’t, but max 5 each
- Start with Dos always
- Keep everything positively framed - no shaming or blaming
- Continue to add alternative components when possible when writing Dont's, e.g. Don’t use maps for x, use x instead
- Add link to "related" when suggesting an alternate component
