import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

export const ApplicationLink = (props: ComponentProps<typeof Link>) => {
  return <Link {...props} className={'p-5 hover:bg-gray-200 focus:bg-gray-200 focus:ring-0 outline-none'} />;
};
