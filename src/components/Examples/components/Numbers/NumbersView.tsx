import { ExampleProperties } from '../../types';
import { NumberView } from './NumberView';

type Props = Pick<ExampleProperties, 'value'>;

export const NumbersView = ({ value }: Props) => {
  return (
    <ul className={'mx-5 w-full flex flex-row'}>
      {value.map((v, index) => {
        return (
          // Key as index is not good. But here is good enough
          <li key={index}>
            <NumberView number={v} />
          </li>
        );
      })}
    </ul>
  );
};
