/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createStorageSlot } from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { themeSwitcher } from '@siemens/ix';
import { createContext, useCallback, useEffect, useState } from 'react';

const variantStorage = createStorageSlot('docusaurus.playground.theme.variant');
const themeStorage = createStorageSlot('docusaurus.playground.theme');

const DEFAULT_VARIANT = 'dark';

const getStoredVariant = () => variantStorage.get() || DEFAULT_VARIANT;
const getStoredTheme = (defaultTheme: string) => themeStorage.get() || defaultTheme;
const buildFullTheme = (theme: string, variant: string) => `theme-${theme}-${variant}`;

export const PlaygroundContext = createContext<{
  variant: string;
  theme: string;
  onVariantChange?: (variant: string) => void;
  onThemeChange?: (theme: string) => void;
}>({
  variant: DEFAULT_VARIANT,
  theme: 'brand',
});

function useContextValue() {
  const docusaurusContext = useDocusaurusContext();
  const defaultTheme = docusaurusContext.siteConfig.customFields.withBrandTheme === false ? 'classic' : 'brand';

  const cbOnVariantChange = useCallback((variant: string) => {
    setContext((prev) => ({
      ...prev,
      variant: variant,
    }));
    variantStorage.set(variant);

    const theme = getStoredTheme(defaultTheme);
    const fullTheme = buildFullTheme(theme, variant);
    console.log('[PlaygroundContext] Variant changed:', { variant, theme, fullTheme });
    themeSwitcher.setTheme(fullTheme);
    console.log('[PlaygroundContext] After setTheme, getCurrentTheme():', themeSwitcher.getCurrentTheme());
  }, [defaultTheme]);

  const cbOnThemeChange = useCallback((theme: string) => {
    setContext((prev) => ({
      ...prev,
      theme: theme,
    }));
    themeStorage.set(theme);

    const variant = getStoredVariant();
    const fullTheme = buildFullTheme(theme, variant);
    console.log('[PlaygroundContext] Theme changed:', { theme, variant, fullTheme });
    themeSwitcher.setTheme(fullTheme);
    console.log('[PlaygroundContext] After setTheme, getCurrentTheme():', themeSwitcher.getCurrentTheme());
  }, []);

  const [context, setContext] = useState({
    variant: DEFAULT_VARIANT,
    theme: defaultTheme,
    onVariantChange: cbOnVariantChange,
    onThemeChange: cbOnThemeChange,
  });

  useEffect(() => {
    const storedVariant = getStoredVariant();
    const storedTheme = getStoredTheme(defaultTheme);

    console.log('[PlaygroundContext] Initializing:', { storedVariant, storedTheme, defaultTheme });

    setContext((prev) => ({
      ...prev,
      variant: storedVariant,
      theme: storedTheme,
    }));

    const fullTheme = buildFullTheme(storedTheme, storedVariant);
    console.log('[PlaygroundContext] Setting initial theme:', fullTheme);
    themeSwitcher.setTheme(fullTheme);
    console.log('[PlaygroundContext] After initial setTheme, getCurrentTheme():', themeSwitcher.getCurrentTheme());
    console.log('[PlaygroundContext] HTML class:', document.documentElement.className);

    const unsubscribeVariant = variantStorage.listen(() => {
      const newVariant = getStoredVariant();
      const currentTheme = getStoredTheme(defaultTheme);
      const newFullTheme = buildFullTheme(currentTheme, newVariant);
      console.log('[PlaygroundContext] Storage variant changed:', { newVariant, currentTheme, newFullTheme });
      setContext((prev) => ({
        ...prev,
        variant: newVariant,
      }));
      themeSwitcher.setTheme(newFullTheme);
    });

    const unsubscribeTheme = themeStorage.listen(() => {
      const newTheme = getStoredTheme(defaultTheme);
      const currentVariant = getStoredVariant();
      const newFullTheme = buildFullTheme(newTheme, currentVariant);
      console.log('[PlaygroundContext] Storage theme changed:', { newTheme, currentVariant, newFullTheme });
      setContext((prev) => ({
        ...prev,
        theme: newTheme,
      }));
      themeSwitcher.setTheme(newFullTheme);
    });

    return () => {
      console.log('[PlaygroundContext] Cleaning up listeners');
      unsubscribeVariant();
      unsubscribeTheme();
    };
  }, [defaultTheme]);

  return context;
}

export const PlaygroundProvider = ({ children }) => {
  const contextValue = useContextValue();
  return (
    <PlaygroundContext.Provider value={contextValue}>
      {children}
    </PlaygroundContext.Provider>
  );
};
