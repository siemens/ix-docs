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

function ApiFunction({
  name,
  returnType,
  parameters = [],
  children,
}: ApiFunctionProps) {
  const signature = parameters.length > 0
    ? `${name}(${parameters.map(p => 
        `${p.name}${p.optional ? '?' : ''}: ${p.type}`
      ).join(', ')})`
    : `${name}()`;

  return (
    <BrowserOnly>
      {() => (
        <div className="api-table container ml-0 mb-8" id={`function-${name}`}>
          <div className="bg-[transparent] rounded-lg overflow-hidden border-solid border-[1px] border-[var(--theme-color-soft-bdr)]">
            
            <AnchorHeader
              anchorName={`function-${name}`}
              anchorLabel={`Direct link to ${name}`}
              className="flex bg-[var(--theme-color-2)] text-[var(--theme-color-std-text)] p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)]"
            >
              <div className="font-mono text-sm">{signature}</div>
            </AnchorHeader>

            {children && (
              <div className={clsx(styles.ApiTableText, 'api-row border-solid border-0 border-b border-[var(--theme-color-soft-bdr)]')}>
                <div className="px-8 py-4 font-bold w-auto min-w-[150px] border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
                  Description
                </div>
                <div className="w-auto p-4 flex items-center">
                  {children}
                </div>
              </div>
            )}

            {parameters.length > 0 && (
              <>
                {parameters.map((param, idx) => (
                  <div key={idx} className={clsx(styles.ApiTableText, 'api-row border-solid border-0 border-b border-[var(--theme-color-soft-bdr)]')}>
                    <div className="px-8 py-4 font-bold w-auto min-w-[150px] border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
                      {param.name}
                      {param.optional && <span className="font-normal text-xs ml-1 opacity-70">(optional)</span>}
                    </div>
                    <div className="w-auto p-4 flex flex-col justify-center">
                      <div>
                        <span className="opacity-70 text-xs uppercase tracking-wider mr-2">Type:</span>
                        <code className="p-1 text-sm">{param.type}</code>
                      </div>
                      {param.defaultValue && (
                        <div className="mt-1">
                           <span className="opacity-70 text-xs uppercase tracking-wider mr-2">Default:</span>
                           <code className="p-1 text-sm">{param.defaultValue}</code>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className={clsx(styles.ApiTableText, 'api-row')}>
              <div className="px-8 py-4 font-bold w-auto min-w-[150px] border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
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