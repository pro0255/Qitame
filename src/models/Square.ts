import { sum } from '../utils/sum';
import { makeAutoObservable } from 'mobx';
import { ArrayOfRectangles } from './ArrayOfRectangles';
import { FitAlgorithm } from './FitAlgorithm';

export class Square {
  public readonly width: number;
  public readonly height: number;
  private readonly arrayOfRectangles: ArrayOfRectangles;

  constructor(arrayOfRectangles: ArrayOfRectangles) {
    makeAutoObservable(this);

    const edge = sum(arrayOfRectangles.contents);
    this.width = edge;
    this.height = edge;
    this.arrayOfRectangles = arrayOfRectangles;

    this.fitRectangles();
  }

  private fitRectangles = () => {
    const positions = FitAlgorithm.fit(this.width, this.arrayOfRectangles.contents);
    positions.forEach((position, index) => {
      const rectangle = this.arrayOfRectangles.rectangles[index];
      rectangle.updatePosition(position);
    });
  };
}
