import { ArrayOfRectangles } from '../models/ArrayOfRectangles';
import { observer } from 'mobx-react';
import { RectangleView } from './RectangleView';
import { useState } from 'react';
import { Square } from '../models/Square';

type Props = {
  arrayOfRectangles: ArrayOfRectangles;
};

const _SquareView = ({ arrayOfRectangles }: Props) => {
  const [squareModel] = useState(new Square(arrayOfRectangles));

  return (
    <div>
      This is Area width = {squareModel.width} and height = {squareModel.height}
      {arrayOfRectangles.rectangles.map((rectangle) => (
        <RectangleView key={rectangle.key} rectangleModel={rectangle} />
      ))}
    </div>
  );
};

export const SquareView = observer(_SquareView);
