import { ReactNode } from 'react';
import { DefaultLayout } from './DefaultLayout';

type Props = {
  children: ReactNode;
};

export const ErrorLayout = ({ children }: Props) => {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <main className={'w-full h-full flex flex-col justify-center items-center'}>{children}</main>
      </div>
    </DefaultLayout>
  );
};
