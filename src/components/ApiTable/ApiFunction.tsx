/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import { AnchorHeader } from '.';
import clsx from 'clsx';
import styles from './ApiTable.module.css';

export type ApiFunctionProps = {
  readonly name: string;
  readonly returnType: string;
  readonly parameters?: Array<{
    name: string;
    type: string;
    optional?: boolean;
    defaultValue?: string;
  }>;
  readonly children?: React.ReactNode;
  readonly singleFramework?: string;
};

function decodeHTMLEntities(text: string): string {
  if (typeof document === 'undefined') {
    return text;
  }
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

function ApiFunction({
  name,
  returnType,
  parameters = [],
  children,
}: ApiFunctionProps) {
  const signature = `${name}(${parameters
    .map(
      (p) => `${p.name}${p.optional ? '?' : ''}: ${decodeHTMLEntities(p.type)}`
    )
    .join(', ')})`;

  return (
    <BrowserOnly>
      {() => (
        <div className="api-table container ml-0 mb-8" id={`function-${name}`}>
          <div className="bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--si-sys-color-border-3)]">
            <AnchorHeader
              anchorName={`function-${name}`}
              anchorLabel={`Direct link to ${name}`}
              className="flex bg-[var(--si-sys-color-background-1)] text-[var(--si-sys-color-text-primary)] p-4 border-solid border-0 border-b border-[var(--si-sys-color-border-3)]"
            >
              <code className="font-mono text-sm">{signature}</code>
            </AnchorHeader>

            {children && (
              <div
                className={clsx(
                  styles.ApiTableText,
                  'api-row border-solid border-0 border-b border-[var(--si-sys-color-border-3)]'
                )}
              >
                <div className="px-8 py-4 font-[var(--si-ref-typography-font-weight-sbold)] w-auto border-solid border-0 border-r border-[var(--si-sys-color-border-3)] break-words">
                  Description
                </div>
                <div className="w-auto p-4 break-words">{children}</div>
              </div>
            )}

            {parameters.length > 0 && (
              <>
                {parameters.map((param, idx) => (
                  <div
                    key={idx}
                    className={clsx(
                      styles.ApiTableText,
                      'api-row border-solid border-0 border-b border-[var(--si-sys-color-border-3)]'
                    )}
                  >
                    <div className="px-8 py-4 font-[var(--si-ref-typography-font-weight-sbold)] w-auto border-solid border-0 border-r border-[var(--si-sys-color-border-3)]">
                      <div>{param.name}</div>
                      {param.optional && (
                        <div className="font-normal text-xs opacity-70">
                          (optional)
                        </div>
                      )}
                    </div>
                    <div className="w-auto p-4 flex flex-col justify-center">
                      <div>
                        <span className="opacity-70 text-xs uppercase tracking-wider mr-2">
                          Type:
                        </span>
                        <code className="p-1 text-sm">
                          {decodeHTMLEntities(param.type)}
                        </code>
                      </div>
                      {param.defaultValue && (
                        <div className="mt-1">
                          <span className="opacity-70 text-xs uppercase tracking-wider mr-2">
                            Default:
                          </span>
                          <code className="p-1 text-sm">
                            {decodeHTMLEntities(param.defaultValue)}
                          </code>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className={clsx(styles.ApiTableText, 'api-row')}>
              <div className="px-8 py-4 font-[var(--si-ref-typography-font-weight-sbold)] w-auto border-solid border-0 border-r border-[var(--si-sys-color-border-3)]">
                Returns
              </div>
              <div className="w-auto p-4 flex items-center">
                <code className="p-1 text-sm">{returnType}</code>
              </div>
            </div>
          </div>
        </div>
      )}
    </BrowserOnly>
  );
}

export default ApiFunction;
