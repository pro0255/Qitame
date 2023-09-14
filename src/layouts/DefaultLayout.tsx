import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  return <div className="max-w-full overflow-auto w-full h-full dark:bg-black bg-white">{children}</div>;
};
