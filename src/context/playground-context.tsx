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
import { createContext, useCallback, useEffect, useState } from 'react';

// IMPORTANT: themeSwitcher will be loaded in useEffect (client-side only)
// Module-level loading doesn't work reliably with Docusaurus SSR
let themeSwitcherInstance: any = null;

const variantStorage = createStorageSlot('docusaurus.playground.theme.variant');
const themeStorage = createStorageSlot('docusaurus.playground.theme');

const DEFAULT_VARIANT = 'dark';

const getStoredVariant = () => variantStorage.get() || DEFAULT_VARIANT;
const getStoredTheme = (defaultTheme: string) => themeStorage.get() || defaultTheme;
const buildFullTheme = (theme: string, variant: string) => `theme-${theme}-${variant}`;

// Safe wrapper to call themeSwitcher only when available
const safeSetTheme = (theme: string) => {
  if (themeSwitcherInstance) {
    console.log('[PlaygroundContext] Calling setTheme:', theme);
    themeSwitcherInstance.setTheme(theme);
    console.log('[PlaygroundContext] getCurrentTheme():', themeSwitcherInstance.getCurrentTheme());
  } else {
    console.warn('[PlaygroundContext] themeSwitcher not available, cannot set theme:', theme);
  }
};

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
    safeSetTheme(fullTheme);
  }, [defaultTheme]);

  const cbOnThemeChange = useCallback((theme: string) => {
    setContext((prev) => ({
      ...prev,
      theme: theme,
    }));
    themeStorage.set(theme);

    const variant = getStoredVariant();
    const fullTheme = buildFullTheme(theme, variant);
    safeSetTheme(fullTheme);
  }, []);

  const [context, setContext] = useState({
    variant: DEFAULT_VARIANT,
    theme: defaultTheme,
    onVariantChange: cbOnVariantChange,
    onThemeChange: cbOnThemeChange,
  });

  useEffect(() => {
    // Load themeSwitcher asynchronously on client-side only
    const loadThemeSwitcher = async () => {
      if (!themeSwitcherInstance && typeof window !== 'undefined') {
        try {
          console.log('[PlaygroundContext] Loading @siemens/ix...');
          const ix = await import('@siemens/ix');
          console.log('[PlaygroundContext] Module loaded:', ix);
          themeSwitcherInstance = ix.themeSwitcher;
          console.log('[PlaygroundContext] themeSwitcher:', themeSwitcherInstance);
          
          // Expose to window for debugging
          (window as any).themeSwitcherInstance = themeSwitcherInstance;
          
          // Apply the theme now that themeSwitcher is loaded
          const currentVariant = getStoredVariant();
          const currentTheme = getStoredTheme(defaultTheme);
          const currentFullTheme = buildFullTheme(currentTheme, currentVariant);
          console.log('[PlaygroundContext] Setting initial theme:', currentFullTheme);
          safeSetTheme(currentFullTheme);
        } catch (err) {
          console.error('[PlaygroundContext] Failed to load @siemens/ix:', err);
        }
      }
    };

    const storedVariant = getStoredVariant();
    const storedTheme = getStoredTheme(defaultTheme);

    setContext((prev) => ({
      ...prev,
      variant: storedVariant,
      theme: storedTheme,
    }));

    // Start loading themeSwitcher (async)
    loadThemeSwitcher();

    const unsubscribeVariant = variantStorage.listen(() => {
      const newVariant = getStoredVariant();
      const currentTheme = getStoredTheme(defaultTheme);
      const newFullTheme = buildFullTheme(currentTheme, newVariant);
      setContext((prev) => ({
        ...prev,
        variant: newVariant,
      }));
      safeSetTheme(newFullTheme);
    });

    const unsubscribeTheme = themeStorage.listen(() => {
      const newTheme = getStoredTheme(defaultTheme);
      const currentVariant = getStoredVariant();
      const newFullTheme = buildFullTheme(newTheme, currentVariant);
      setContext((prev) => ({
        ...prev,
        theme: newTheme,
      }));
      safeSetTheme(newFullTheme);
    });

    return () => {
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
