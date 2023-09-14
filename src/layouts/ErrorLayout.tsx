import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ErrorLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <main className={'w-full h-full flex flex-col justify-center items-center'}>{children}</main>
    </div>
  );
};
