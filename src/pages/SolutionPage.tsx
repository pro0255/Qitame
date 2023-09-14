import { CenterLayout } from '../layouts/CenterLayout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrayOfRectangles } from '../models/ArrayOfRectangles/ArrayOfRectangles';
import { observer } from 'mobx-react';
import { useCallback, useEffect, useState } from 'react';
import { SquareView } from '../components/SquareView';
import { GrayText } from '../ds/GrayText';
import { createLinkFactory, RouteType } from '../router/routes';

export type SolutionViewParams = {
  numbers: string;
};

const _SolutionViewPage = () => {
  const { numbers } = useParams<SolutionViewParams>();
  const navigate = useNavigate();
  // Keeps same model which can be easily split and merged together (after refresh it's lost)
  const [model] = useState(new ArrayOfRectangles(numbers));

  const restartLink = useCallback(() => {
    return createLinkFactory(RouteType.SolutionView)({
      numbers: model.initialNumbers,
    });
  }, [model.initialNumbers]);

  useEffect(() => {
    const restart = (event: KeyboardEvent) => {
      if (event.key === 'x') {
        navigate(restartLink());
        location.reload();
      }
    };
    window.addEventListener('keypress', restart);
    return () => {
      window.removeEventListener('keypress', restart);
    };
  }, []);

  return (
    <CenterLayout>
      <SquareView arrayOfRectangles={model} />
      <GrayText className={'mt-5'}>
        Press{' '}
        <Link
          reloadDocument
          to={restartLink()}
          className={`w-full h-full text-lg font-normal text-blue-600 hover:underline`}
        >
          {`"x"`}
        </Link>{' '}
        to reset!
      </GrayText>
    </CenterLayout>
  );
};

export const SolutionPage = observer(_SolutionViewPage);
