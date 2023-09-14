import { TryOneOfGreenExample } from './components/TryOneOfGreenExample';
import { NormalText } from '../../ds/NormalText';

export const UnknownErrorView = () => {
  return (
    <>
      <NormalText>Regrettably, your input appears to be invalid. Please give it another attempt</NormalText>
      <TryOneOfGreenExample />
    </>
  );
};
