import { useEffect, useState } from 'react';

export const ThemeButton = () => {
  const [isDark, setIsDark] = useState<boolean>(localStorage.theme === 'dark');
  const colorTheme = !isDark ? 'light' : 'dark';

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    const root = window.document.documentElement;
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [isDark, colorTheme]);

  return (
    <button
      className={`w-5 h-5 rounded-full animate-pulse ${isDark ? 'bg-white' : 'bg-black'}`}
      onClick={() => setIsDark((dark) => !dark)}
    >
      {isDark}
    </button>
  );
};
