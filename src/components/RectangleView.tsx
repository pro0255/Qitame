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
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        {rectangleModel.content}
      </div>
    </div>
  );
};

export const RectangleView = observer(_RectangleView);
