import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const GrayText = ({ children, className }: Props) => {
  return <span className={`text-lg font-normal dark:text-white text-gray-500 ${className}`}>{children}</span>;
};
