import { ArrayOfRectangles } from '../models/ArrayOfRectangles/ArrayOfRectangles';
import { observer } from 'mobx-react';
import { RectangleView } from './RectangleView/RectangleView';
import { useEffect, useMemo, useState } from 'react';
import { Square } from '../models/Square/Square';
import { toPx } from '../utils/px';

type Props = {
  arrayOfRectangles: ArrayOfRectangles;
};

const _SquareView = ({ arrayOfRectangles }: Props) => {
  const squareModel = useMemo(() => new Square(arrayOfRectangles), [arrayOfRectangles]);
  const [isControlUp, setIsControlUp] = useState<boolean>(false);

  useEffect(() => {
    const down = () => setIsControlUp(true);
    const up = () => setIsControlUp(false);

    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);

    return () => {
      window.removeEventListener('keypress', down);
      window.addEventListener('keyup', up);
    };
  });

  return (
    <div
      style={{
        width: `${toPx(squareModel.width)}px`,
        height: `${toPx(squareModel.height)}px`,
      }}
      className={`mt-5 border border-gray-600 shadow-2xl relative`}
    >
      {arrayOfRectangles.rectangles.map((rectangle) => (
        <RectangleView
          isControlUp={isControlUp}
          onMouseOver={squareModel.showSubTree}
          onMouseLeave={squareModel.resetSubTree}
          isHovered={squareModel.subTree.includes(rectangle)}
          onRightClick={squareModel.arrayOfRectangles.merge}
          onLeftClick={squareModel.arrayOfRectangles.split}
          key={rectangle.key}
          rectangleModel={rectangle}
        />
      ))}
    </div>
  );
};

export const SquareView = observer(_SquareView);
