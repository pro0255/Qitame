import { ReactNode } from 'react';
import { Navigation } from '../components/Navigation';

type Props = {
  children: ReactNode;
};

export const CenterLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <footer className={'sticky top-0 w-full z-10 bg-white'}>
        <Navigation />
      </footer>
      <main className={'w-full h-full flex flex-col items-center'}>{children}</main>
    </div>
  );
};
