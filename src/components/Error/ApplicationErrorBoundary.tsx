import { InvalidNumber } from '../../models/NumberValidator/InvalidNumber';
import { UnknownErrorView } from './UnknownErrorView';
import { InvalidNumberView } from './InvalidNumberView';
import { ErrorLayout } from '../../layouts/ErrorLayout';

type Props = {
  error: unknown;
};

export const ApplicationErrorBoundary = ({ error }: Props) => {
  if (error instanceof InvalidNumber) {
    return (
      <ErrorLayout>
        <InvalidNumberView error={error} />
      </ErrorLayout>
    );
  }

  return (
    <ErrorLayout>
      <UnknownErrorView />
    </ErrorLayout>
  );
};
