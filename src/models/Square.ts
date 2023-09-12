import { Rectangle } from './Rectangle';
import { sum } from '../utils/sum';
import { makeAutoObservable } from 'mobx';
import { ArrayOfRectangles } from './ArrayOfRectangles';

export class Square {
  public readonly width: number;
  public readonly height: number;

  constructor(readonly arrayOfRectangles: ArrayOfRectangles) {
    makeAutoObservable(this);

    const edge = this.calculateWidth(arrayOfRectangles.rectangles);
    this.width = edge;
    this.height = edge;
  }

  private calculateWidth = (rectangles: Rectangle[]) => {
    return sum(rectangles.map((rectangle) => rectangle.content));
  };
}
