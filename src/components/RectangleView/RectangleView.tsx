import { observer } from 'mobx-react';
import { Rectangle } from '../../models/Rectangle/Rectangle';
import { MouseEvent, useCallback } from 'react';
import { RectangleHTMLElement } from './types';
import { isLeftClick, isRightClick } from '../../utils/click';

type Props = {
  rectangleModel: Rectangle;
  //
  onLeftClick: (targetRectangle: Rectangle) => void;
  onRightClick: (targetRectangle: Rectangle) => void;
  onMouseOver: (targetRectangle: Rectangle) => void;
  onMouseLeave: () => void;
  //
  isHovered: boolean;
  isControlUp: boolean;
};

const _RectangleView = ({
  rectangleModel,
  onLeftClick,
  onRightClick,
  isHovered,
  isControlUp,
  onMouseLeave,
  onMouseOver,
}: Props) => {
  const split = useCallback(
    (event: MouseEvent<RectangleHTMLElement>) => {
      if (isLeftClick(event)) {
        onLeftClick(rectangleModel);
      }

      if (isRightClick(event)) {
        event.preventDefault();
        onRightClick(rectangleModel);
      }
    },
    [onLeftClick, rectangleModel],
  );

  const setIsHovered = useCallback(() => {
    onMouseOver(rectangleModel);
  }, [onMouseOver, rectangleModel]);

  return (
    <button
      onMouseOver={setIsHovered}
      onMouseLeave={onMouseLeave}
      onClick={split}
      onContextMenu={split}
      style={{
        width: `${rectangleModel.position.width}px`,
        height: `${rectangleModel.position.height}px`,
        left: `${rectangleModel.position.x}px`,
        top: `${rectangleModel.position.y}px`,
        backgroundColor: rectangleModel.color,
        opacity: isHovered || (isControlUp && rectangleModel.parent !== null) ? 1 : 0.2,
      }}
      className={`absolute hover:animate-pulse focus:animate-pulse  border-gray-500 focus:ring-0`}
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
        <span className={'text-xl font-normal text-black-500 opacity-1'}>{rectangleModel.content}</span>
      </div>
    </button>
  );
};

export const RectangleView = observer(_RectangleView);
