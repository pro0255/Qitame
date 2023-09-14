import { ExampleProperties } from '../types';

type Props = Pick<ExampleProperties, 'value'>;

export const NumbersView = ({ value }: Props) => {
  return <span>{value}</span>;
};
