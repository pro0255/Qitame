import { ExampleProperties } from '../types';

type Props = Pick<ExampleProperties, 'name'>;

export const NameView = ({ name }: Props) => {
  return <h3 className={'text-lg font-normal text-gray-500'}>{name}</h3>;
};
