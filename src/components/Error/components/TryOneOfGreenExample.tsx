import { GrayText } from '../../../ds/GrayText';
import { NormalText } from '../../../ds/NormalText';
import { Link } from 'react-router-dom';
import { RouteType } from '../../../router/routes';

export const TryOneOfGreenExample = () => {
  return (
    <>
      <p>
        <NormalText>
          You can explore the{' '}
          <Link to={RouteType.Examples} className={`w-full h-full text-lg font-normal text-blue-600 hover:underline`}>
            examples
          </Link>{' '}
          to see some existing ones.
        </NormalText>
      </p>
      <p className={'mt-5'}>
        <GrayText>
          The <span className={'text-green-500 animate-pulse'}>green</span> option will function correctly!
        </GrayText>
      </p>
    </>
  );
};
