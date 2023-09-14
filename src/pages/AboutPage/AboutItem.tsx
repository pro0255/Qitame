import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const AboutItem = ({ children }: Props) => {
  return <li className={'text-gray-500 p-3'}>{children}</li>;
};
