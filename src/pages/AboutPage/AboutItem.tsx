import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const AboutItem = ({ children }: Props) => {
  return <li className={'text-gray-500 p-3 hover:bg-gray-200 focus:bg-gray-200'}>{children}</li>;
};
