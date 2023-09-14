import reactLogo from '../assets/react.svg';
import ematiqLogoLight from '../assets/ematiq-light.png';
import ematiqLogoDark from '../assets/ematiq-dark.png';

import { HiToEmatiq } from '../components/HiToEmatiq';
import { CenterLayout } from '../layouts/CenterLayout';
import { useTheme } from '../components/ThemeContext';

export const WelcomePage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <CenterLayout>
      <div className={'w-full h-full flex flex-col justify-center items-center'}>
        <img
          className={'animate-pulse'}
          width={'20%'}
          height={'20%'}
          src={isDark ? ematiqLogoLight : ematiqLogoDark}
          alt="Ematiq logo"
        />
        <a
          className={'mt-20 w-full h-[20%] flex flex-col justify-center items-center'}
          href="https://react.dev"
          target="_blank"
        >
          <img width={'5%'} height={'5%'} src={reactLogo} alt="React logo" />
        </a>
        <h1 className={'text-4xl font-extrabold leading-none tracking-tight text-black dark:text-white'}>
          Vite + React
        </h1>
        <HiToEmatiq />
      </div>
    </CenterLayout>
  );
};
