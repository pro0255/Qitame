import { ArrayOfRectangles } from '../models/ArrayOfRectangles';
import { observer } from 'mobx-react';
import { RectangleView } from './RectangleView';
import { useMemo } from 'react';
import { Square } from '../models/Square';

type Props = {
  arrayOfRectangles: ArrayOfRectangles;
};

const _SquareView = ({ arrayOfRectangles }: Props) => {
  const squareModel = useMemo(() => new Square(arrayOfRectangles), [arrayOfRectangles]);

  return (
    <div
      style={{
        width: `${squareModel.width}px`,
        height: `${squareModel.height}px`,
      }}
      className={`border border-gray-600 shadow-xl`}
    >
      {arrayOfRectangles.rectangles.map((rectangle) => (
        <RectangleView key={rectangle.key} rectangleModel={rectangle} />
      ))}
    </div>
  );
};

export const SquareView = observer(_SquareView);
