import { RectangleEdges } from '../types/Position';

// Represents a space where rectangles are drawn
export type FreeSpace = {
  // It's axis x
  x: number;
  // It's axis y
  y: number;
};

export enum RectangleType {
  Vertical = 'VERTICAL',
  Horizontal = 'HORIZONTAL',
}

export class FitAlgorithm {
  private static calculateMissingEdge = (S: number, a: number) => {
    return S / a;
  };

  private static getA = (rectangleType: RectangleType, freeSpace: FreeSpace) => {
    if (rectangleType === RectangleType.Vertical) {
      return freeSpace.y;
    } else {
      return freeSpace.x;
    }
  };

  public static indexToRectangleType = (index: number) => {
    return index % 2 === 0 ? RectangleType.Vertical : RectangleType.Horizontal;
  };

  public static fit = (squareEdge: number, contents: number[]): RectangleEdges[] => {
    const rectangleEdges: RectangleEdges[] = [];

    const freeSpace: FreeSpace = {
      x: squareEdge,
      y: squareEdge,
    };

    contents.forEach((S, index) => {
      const rectangleType = FitAlgorithm.indexToRectangleType(index);
      const a = FitAlgorithm.getA(rectangleType, freeSpace);
      const b = FitAlgorithm.calculateMissingEdge(S, a);

      if (rectangleType === RectangleType.Vertical) {
        freeSpace.x = freeSpace.x - b;
      } else {
        freeSpace.y = freeSpace.y - b;
      }

      rectangleEdges.push({
        a,
        b,
      });
    });

    return rectangleEdges;
  };
}
