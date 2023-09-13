import { Position } from '../types/Position';
import { METRIC_TO_PX } from '../config/config';

export const toPx = (n: number) => {
  return n * METRIC_TO_PX;
};

export const objectToPx = (obj: Position) => {
  const pxObj: Position = {} as Position;

  (Object.entries(obj) as [keyof Position, number][]).forEach(([key, number]) => {
    pxObj[key] = toPx(number);
  });

  return pxObj;
};
