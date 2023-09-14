import { ExampleProperties } from '../types';
import { GrayText } from '../../../ds/GrayText';

type Props = Pick<ExampleProperties, 'name'>;

export const NameView = ({ name }: Props) => {
  return <GrayText className={'dark:text-white'}>{name}</GrayText>;
};
