import { Position } from '../types/position';
import { makeAutoObservable } from 'mobx';
import { NOT_IMPLEMENTED } from '../constants/NOT_IMPLEMENTED';

export class Rectangle {
  public readonly key;

  private _position: Position | null = null;

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
}
