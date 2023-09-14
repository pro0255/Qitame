import { ExampleProperties } from './types';
import { NumbersView } from './components/Numbers/NumbersView';
import { NameView } from './components/NameView';
import { ValidIndicatorView } from './components/ValidIndicatorView';

type Props = ExampleProperties;

export const ExampleView = ({ value, name, isValid }: Props) => {
  return (
    <div className={'shadow-md p-10 flex flex-col'}>
      <div className={'p-10 flex flex-row items-center'}>
        <ValidIndicatorView isValid={isValid} />
        <NumbersView value={value} />
      </div>

      <hr />

      <div className={'p-2 w-full h-full flex flex-row justify-center items-center'}>
        <NameView name={name} />
      </div>
    </div>
  );
};
