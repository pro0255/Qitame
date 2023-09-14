import { useTheme } from './ThemeContext';

export const ThemeButton = () => {
  const { theme, dark, light } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className={`w-5 h-5 rounded-full animate-pulse ${isDark ? 'bg-white' : 'bg-black'}`}
      onClick={isDark ? light : dark}
    />
  );
};
