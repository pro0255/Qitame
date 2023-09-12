import { observer } from 'mobx-react';
import { Rectangle } from '../models/Rectangle';

type Props = {
  rectangleModel: Rectangle;
};

const _RectangleView = ({ rectangleModel }: Props) => {
  console.log(rectangleModel);
  return (
    <div>
      {rectangleModel.position.x};{rectangleModel.position.y};{rectangleModel.position.height};
      {rectangleModel.position.width}
    </div>
  );
};

export const RectangleView = observer(_RectangleView);
