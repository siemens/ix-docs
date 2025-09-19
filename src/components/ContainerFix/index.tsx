/*
 * COPYRIGHT (c) Siemens AG 2018-2025 ALL RIGHTS RESERVED.
 */

import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

export type ThemeContextType = {
  currentTheme: string;
  isDarkColor: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'brand',
  isDarkColor: true,
});

export const ColorContainerFix = forwardRef<
  HTMLDivElement,
  {
    children?: React.ReactNode;
  }
>(({ children }, ref) => {
  const { currentTheme: theme, isDarkColor } = useContext(ThemeContext);
  const themeContainerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => themeContainerRef.current);

  useEffect(() => {
    const themeContainer = themeContainerRef.current;
    if (!themeContainer) {
      return;
    }

    themeContainer.setAttribute('data-ix-theme', theme);
    themeContainer.setAttribute(
      'data-ix-color-schema',
      isDarkColor ? 'dark' : 'light'
    );
  }, [theme, isDarkColor]);

  return <div ref={themeContainerRef}>{children}</div>;
});
