import { CenterLayout } from '../layouts/CenterLayout';
import { useParams } from 'react-router-dom';
import { ArrayOfRectangles } from '../models/ArrayOfRectangles/ArrayOfRectangles';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { SquareView } from '../components/SquareView';

export type SolutionViewParams = {
  numbers: string;
};

const _SolutionViewPage = () => {
  const { numbers } = useParams<SolutionViewParams>();
  // Keeps same model which can be easily split and merged together (after refresh it's lost)
  const [model] = useState(new ArrayOfRectangles(numbers));

  return (
    <CenterLayout>
      <SquareView arrayOfRectangles={model} />
    </CenterLayout>
  );
};

export const SolutionViewPage = observer(_SolutionViewPage);
