import { observer } from 'mobx-react';
import { Rectangle } from '../../models/Rectangle/Rectangle';
import { MouseEvent, useCallback } from 'react';
import { RectangleHTMLElement } from './types';
import { isLeftClick, isRightClick } from '../../utils/click';
import { NOT_IMPLEMENTED } from '../../constants/NOT_IMPLEMENTED';

type Props = {
  rectangleModel: Rectangle;
  onLeftClick: (targetRectangle: Rectangle) => void;
};

const _RectangleView = ({ rectangleModel, onLeftClick }: Props) => {
  const split = useCallback(
    (event: MouseEvent<RectangleHTMLElement>) => {
      if (isLeftClick(event)) {
        onLeftClick(rectangleModel);
      }

      if (isRightClick(event)) {
        event.preventDefault();
        console.log(NOT_IMPLEMENTED);
      }
    },
    [onLeftClick, rectangleModel],
  );

  return (
    <div
      onClick={split}
      onContextMenu={split}
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
