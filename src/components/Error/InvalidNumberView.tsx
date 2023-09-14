import { InvalidNumber } from '../../models/NumberValidator/InvalidNumber';
import { TryOneOfGreenExample } from './components/TryOneOfGreenExample';
import { ExampleView } from '../Examples/ExampleView';

type Props = {
  error: InvalidNumber;
};

export const InvalidNumberView = ({ error }: Props) => {
  return (
    <>
      <TryOneOfGreenExample />
      <ExampleView isValid={false} value={error.invalidInput} name={error.message} />
    </>
  );
};
