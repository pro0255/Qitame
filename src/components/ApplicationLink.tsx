import { ComponentProps } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ApplicationLink = (props: ComponentProps<typeof Link>) => {
  const location = useLocation();

  // Not stable but good enough for the purpose
  const isCurrent = props.to === '/' ? location.pathname === '/' : location.pathname.includes(props.to.toString());

  return (
    <Link
      {...props}
      className={`p-5 hover:bg-gray-200 focus:bg-gray-100 focus:ring-0 outline-none ${isCurrent ? 'bg-gray-100' : ''}`}
    />
  );
};
