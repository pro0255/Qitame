import { sum } from '../../utils/sum';
import { autorun, makeAutoObservable } from 'mobx';
import { ArrayOfRectangles } from '../ArrayOfRectangles/ArrayOfRectangles';
import { FitAlgorithm, FreeSpace, RectangleType } from '../FitAlgorithm/FitAlgorithm';
import { RectangleEdges } from '../../types/Position';
import { objectToPx } from '../../utils/px';
import { Rectangle } from '../Rectangle/Rectangle';

export class Square {
  public readonly width: number;
  public readonly height: number;
  public readonly arrayOfRectangles: ArrayOfRectangles;
  public subTree: Rectangle[] = [];

  constructor(arrayOfRectangles: ArrayOfRectangles) {
    makeAutoObservable(this);

    const edge = Math.sqrt(sum(arrayOfRectangles.contents));
    this.width = edge;
    this.height = edge;
    this.arrayOfRectangles = arrayOfRectangles;

    this.fitRectangles();

    autorun(() => {
      this.fitRectangles();
    });
  }

  public showSubTree = (rectangle: Rectangle) => {
    this.subTree = rectangle.parent?.getSubTree() ?? [];
  };

  public resetSubTree = () => {
    this.subTree = [];
  };

  public fitRectangles = () => {
    const rectangleEdges = FitAlgorithm.fit(this.width, this.arrayOfRectangles.contents);

    let X_Y: FreeSpace = {
      x: 0,
      y: 0,
    };

    rectangleEdges.forEach((edges, index) => {
      const rectangle = this.arrayOfRectangles.rectangles[index];
      const rectangleType = FitAlgorithm.indexToRectangleType(index);

      const rectanglePosition = this.createPxPosition(edges, rectangleType, X_Y);

      rectangle.updatePosition(rectanglePosition);

      if (rectangleType === RectangleType.Vertical) {
        X_Y = {
          ...X_Y,
          x: X_Y.x + edges.b,
        };
      } else {
        X_Y = {
          ...X_Y,
          y: X_Y.y + edges.b,
        };
      }
    });
  };

  private createPxPosition = (
    currentRectangleEdges: RectangleEdges,
    rectangleType: RectangleType,
    { x, y }: FreeSpace,
  ) => {
    // a and b are assigned differently

    if (rectangleType === RectangleType.Vertical) {
      return objectToPx({
        x,
        y,
        height: currentRectangleEdges.a,
        width: currentRectangleEdges.b,
      });
    } else {
      return objectToPx({
        x,
        y,
        height: currentRectangleEdges.b,
        width: currentRectangleEdges.a,
      });
    }
  };
}
