import { ExampleProperties } from './types';
import { NumbersView } from './components/Numbers/NumbersView';
import { NameView } from './components/NameView';
import { ValidIndicatorView } from './components/ValidIndicatorView';

type Props = ExampleProperties & {
  isValid: boolean;
};

export const ExampleView = ({ value, name, isValid }: Props) => {
  return (
    <div className={'relative shadow-md p-10 flex flex-col'}>
      <ValidIndicatorView isValid={isValid} />

      <div className={'p-10 flex flex-row items-center'}>
        <NumbersView value={value} />
      </div>

      <hr />

      <div className={'p-2 w-full h-full flex flex-row justify-center items-center'}>
        <NameView name={name} />
      </div>
    </div>
  );
};
