import { ExampleProperties } from '../types';

type Props = Pick<ExampleProperties, 'name'>;

export const NameView = ({ name }: Props) => {
  return <span>{name}</span>;
};
