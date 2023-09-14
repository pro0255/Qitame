import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const ExternalLink = ({ href, children, className }: Props) => {
  return (
    <a
      className={`w-full h-full text-lg font-normal text-blue-600 hover:underline ${className}`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
