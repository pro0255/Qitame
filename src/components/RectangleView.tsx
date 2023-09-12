import { observer } from 'mobx-react';
import { Rectangle } from '../models/Rectangle';

type Props = {
  rectangleModel: Rectangle;
};

const _RectangleView = ({ rectangleModel }: Props) => {
  console.log(rectangleModel);
  return <div>This is rectangle with content = {rectangleModel.content}</div>;
};

export const RectangleView = observer(_RectangleView);
