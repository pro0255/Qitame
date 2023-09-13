import { Position } from '../types/Position';
import { makeAutoObservable } from 'mobx';
import { NOT_IMPLEMENTED } from '../constants/NOT_IMPLEMENTED';

export class Rectangle {
  public readonly key: number;

  private _position: Position | null = {} as Position;

  constructor(public content: number) {
    makeAutoObservable(this);

    this.key = Math.random() * content;
  }

  public updatePosition = (position: Position) => {
    this._position = position;
  };

  get position(): Position {
    if (this._position === null) {
      throw NOT_IMPLEMENTED;
    }

    return this._position;
  }

  get color(): string {
    return 'red';
  }
}
