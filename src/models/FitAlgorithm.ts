import { Position } from '../types/Position';

export class FitAlgorithm {
  public static fit = (squareEdge: number, contents: number[]): Position[] => {
    const positions: Position[] = [];

    contents.forEach((_) => {
      positions.push({
        x: 1,
        y: squareEdge,
        height: 100,
        width: 100,
      });
    });

    return positions;
  };
}
