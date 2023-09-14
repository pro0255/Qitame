import { ExampleProperties } from '../types';

type Props = Pick<ExampleProperties, 'isValid'>;

export const ValidIndicatorView = ({ isValid }: Props) => {
  return (
    <span className={`w-5 h-5 rounded-full animate-pulse  ${isValid ? 'bg-green-600' : 'bg-red-600'}`}>{isValid}</span>
  );
};
