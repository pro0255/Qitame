import { ComponentProps } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ApplicationLink = (props: ComponentProps<typeof Link>) => {
  const location = useLocation();

  // Not stable but good enough for the purpose
  const isCurrent = props.to === '/' ? location.pathname === '/' : location.pathname.includes(props.to.toString());

  return (
    <Link
      {...props}
      className={`rounded text-lg font-normal text-black dark:text-white dark:bg-sky-600 dark:hover:bg-sky-800 p-4 hover:bg-gray-200 focus:bg-gray-100  focus:ring-0 ${
        isCurrent ? 'bg-gray-100 dark:bg-sky-800' : ''
      }`}
    />
  );
};
