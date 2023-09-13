import { RectangleHTMLElement } from '../components/RectangleView/types';
import { MouseEvent } from 'react';

export const isRightClick = (event: MouseEvent<RectangleHTMLElement>) => {
  return event.type === 'contextmenu';
};

export const isLeftClick = (event: MouseEvent<RectangleHTMLElement>) => {
  return event.type === 'click';
};
