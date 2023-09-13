import { ArrayOfRectangles } from '../models/ArrayOfRectangles/ArrayOfRectangles';
import { observer } from 'mobx-react';
import { RectangleView } from './RectangleView';
import { useMemo } from 'react';
import { Square } from '../models/Square/Square';
import { toPx } from '../config/config';

type Props = {
  arrayOfRectangles: ArrayOfRectangles;
};

const _SquareView = ({ arrayOfRectangles }: Props) => {
  const squareModel = useMemo(() => new Square(arrayOfRectangles), [arrayOfRectangles]);

  return (
    <div
      style={{
        width: `${toPx(squareModel.width)}px`,
        height: `${toPx(squareModel.height)}px`,
      }}
      className={`border border-gray-600 shadow-xl relative`}
    >
      {arrayOfRectangles.rectangles.map((rectangle) => (
        <RectangleView key={rectangle.key} rectangleModel={rectangle} />
      ))}
    </div>
  );
};

export const SquareView = observer(_SquareView);
