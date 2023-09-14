import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { createUseEnsuredContext } from '../utils/createUseEnsuredContext';

type ThemeContextValue = {
  light: () => void;
  dark: () => void;
  theme: 'dark' | 'light';
};

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(localStorage.theme === 'dark');

  const modifyDOM = useCallback((newTheme: 'dark' | 'light') => {
    const root = window.document.documentElement;
    root.classList.remove(newTheme === 'dark' ? 'light' : 'dark');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  }, []);

  const setLight = useCallback(() => {
    setIsDark(false);
    modifyDOM('light');
  }, [modifyDOM]);

  const setDark = useCallback(() => {
    setIsDark(true);
    modifyDOM('dark');
  }, [modifyDOM]);

  const value: ThemeContextValue = useMemo(() => {
    return {
      light: setLight,
      dark: setDark,
      theme: isDark ? 'dark' : 'light',
    };
  }, [isDark, setDark, setLight]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = createUseEnsuredContext(ThemeContext, 'Theme');
