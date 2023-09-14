import { ExampleProperties } from './types';
import { NumbersView } from './components/NumbersView';
import { NameView } from './components/NameView';
import { ValidIndicatorView } from './components/ValidIndicatorView';

type Props = ExampleProperties;

export const ExampleView = ({ value, name, isValid }: Props) => {
  return (
    <div>
      <ValidIndicatorView isValid={isValid} />
      <NameView name={name} />
      <NumbersView value={value} />
    </div>
  );
};
