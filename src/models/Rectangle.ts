import { Position, RectangleEdges } from '../types/Position';
import { makeAutoObservable } from 'mobx';
import { NOT_IMPLEMENTED } from '../constants/NOT_IMPLEMENTED';

export class Rectangle {
  public readonly key: number;
  private a: number = 0;
  private b: number = 0;

  private _position: Position | null = {} as Position;

  constructor(public content: number) {
    makeAutoObservable(this);

    this.key = Math.random() * content;
  }

  public updateEdges = ({ a, b }: RectangleEdges) => {
    this.a = a;
    this.b = b;
  };

  public updatePosition = (position: Position) => {
    this._position = position;
  };

  get position(): Position {
    if (this._position === null) {
      throw NOT_IMPLEMENTED;
    }

    return this._position;
  }
}
