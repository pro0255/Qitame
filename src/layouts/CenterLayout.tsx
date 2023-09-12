import { ReactNode } from 'react';
import { Navigation } from '../components/Navigation';

type Props = {
  children: ReactNode;
};

export const CenterLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navigation />
      {children}
    </div>
  );
};
