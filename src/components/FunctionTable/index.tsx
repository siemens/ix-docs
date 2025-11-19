/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import { AnchorHeader } from '../ApiTable';
import clsx from 'clsx';
import styles from './FunctionTable.module.css';

export type ApiFunctionProps = {
  readonly name: string;
  readonly returnType: string;
  readonly parameters?: Array<{
    name: string;
    type: string;
    optional?: boolean;
    defaultValue?: string;
    comment?: string;
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
              <code className="font-mono">{signature}</code>
            </AnchorHeader>

            {children && (
              <div className="p-4 border-solid border-0 border-b border-[var(--theme-color-soft-bdr)]">
                {children}
              </div>
            )}

            <div className={clsx(styles.ApiTableText, 'api-row')}>
              <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
                Returns
              </div>
              <div className="w-auto p-4">
                <code className="p-1">{returnType}</code>
              </div>
            </div>

            {parameters.length > 0 && (
              <>
                {parameters.map((param, idx) => (
                  <div key={idx} className={clsx(styles.ApiTableText, 'api-row')}>
                    <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
                      {param.name}
                      {param.optional && <span className="font-normal text-sm ml-1">(optional)</span>}
                    </div>
                    <div className="w-auto p-4">
                      <div className="mb-2">
                        <code className="p-1">{param.type}</code>
                      </div>
                      {param.defaultValue && (
                        <div className="text-sm mb-2">
                          Default: <code>{param.defaultValue}</code>
                        </div>
                      )}
                      {param.comment && (
                        <div className="text-sm">{param.comment}</div>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </BrowserOnly>
  );
}

export default ApiFunction;