import { ExampleProperties } from '../types';
import { contentsValidator } from '../../../models/NumberValidator/contentsValidator';

type Props = Pick<ExampleProperties, 'value'>;

export const NumbersView = ({ value }: Props) => {
  return (
    <ul className={'w-full flex flex-col sm:justify-center lg:flex-row lg:justify-evenly'}>
      {value.map((v, index) => {
        return (
          // Key as index is not good. But here is good enough
          <li
            className={`p-5 mt-2 mx-2 text-center ${
              contentsValidator([v]) ? 'bg-green-100 dark:bg-lime-400' : 'bg-red-100 dark:bg-rose-400'
            } rounded`}
            key={index}
          >
            {v}
          </li>
        );
      })}
    </ul>
  );
};
