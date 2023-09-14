import { ExampleProperties } from '../types';

type Props = Pick<ExampleProperties, 'isValid'>;

export const ValidIndicatorView = ({ isValid }: Props) => {
  return <span>{isValid}</span>;
};
