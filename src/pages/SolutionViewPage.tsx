import { CenterLayout } from '../layouts/CenterLayout';
import { useParams } from 'react-router-dom';
import { ArrayOfRectangles } from '../models/ArrayOfRectangles';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { SquareView } from '../components/SquareView';

export type SolutionViewParams = {
  numbers: string;
};

const _SolutionViewPage = () => {
  const { numbers } = useParams<SolutionViewParams>();
  const [model] = useState(new ArrayOfRectangles(numbers));

  return (
    <CenterLayout>
      <SquareView arrayOfRectangles={model} />

      <button onClick={model.update}>lol</button>
      <button onClick={() => console.log(model)}>log</button>
    </CenterLayout>
  );
};

export const SolutionViewPage = observer(_SolutionViewPage);
