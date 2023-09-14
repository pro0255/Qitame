import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const NormalText = ({ children, className }: Props) => {
  return <span className={`text-lg font-normal text-black dark:text-white ${className}`}>{children}</span>;
};
