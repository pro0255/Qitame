import { ArrayOfRectangles } from '../models/ArrayOfRectangles/ArrayOfRectangles';
import { observer } from 'mobx-react';
import { RectangleView } from './RectangleView/RectangleView';
import { useMemo } from 'react';
import { Square } from '../models/Square/Square';
import { toPx } from '../utils/px';

type Props = {
  arrayOfRectangles: ArrayOfRectangles;
};

const _SquareView = ({ arrayOfRectangles }: Props) => {
  const squareModel = useMemo(() => new Square(arrayOfRectangles), [arrayOfRectangles]);

  return (
    <div>
      {JSON.stringify(squareModel.arrayOfRectangles.contents)}
      <div
        style={{
          width: `${toPx(squareModel.width)}px`,
          height: `${toPx(squareModel.height)}px`,
        }}
        className={`border border-gray-600 shadow-xl relative`}
      >
        {arrayOfRectangles.rectangles.map((rectangle) => (
          <RectangleView
            onRightClick={squareModel.arrayOfRectangles.merge}
            onLeftClick={squareModel.arrayOfRectangles.split}
            key={rectangle.key}
            rectangleModel={rectangle}
          />
        ))}
      </div>
    </div>
  );
};

export const SquareView = observer(_SquareView);
