import { observer } from 'mobx-react';
import { Rectangle } from '../models/Rectangle/Rectangle';
import { useCallback } from 'react';

type Props = {
  rectangleModel: Rectangle;
  onLeftClick: (targetRectangle: Rectangle) => void;
};

const _RectangleView = ({ rectangleModel, onLeftClick }: Props) => {
  const split = useCallback(() => {
    onLeftClick(rectangleModel);
  }, [onLeftClick, rectangleModel]);

  return (
    <div
      onClick={split}
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
