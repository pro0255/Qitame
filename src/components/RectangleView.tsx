import { observer } from 'mobx-react';
import { Rectangle } from '../models/Rectangle';

type Props = {
  rectangleModel: Rectangle;
};

const _RectangleView = ({ rectangleModel }: Props) => {
  return (
    <div
      style={{
        width: `${rectangleModel.position.width}px`,
        height: `${rectangleModel.position.height}px`,
        left: `${rectangleModel.position.x}px`,
        top: `${rectangleModel.position.y}px`,
        backgroundColor: rectangleModel.color,
      }}
      className={'absolute'}
    >
      {rectangleModel.position.x};{rectangleModel.position.y};{rectangleModel.position.height};
      {rectangleModel.position.width}
    </div>
  );
};

export const RectangleView = observer(_RectangleView);
