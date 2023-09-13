import { Position } from '../../types/Position';
import { makeAutoObservable } from 'mobx';
import { NOT_IMPLEMENTED } from '../../constants/NOT_IMPLEMENTED';
import { getRandomColor } from '../../utils/sum';

export class Rectangle {
  public readonly key: number;

  private _position: Position | null = {} as Position;

  constructor(public content: number) {
    makeAutoObservable(this);

    this.key = Math.random() * content;
  }

  get position(): Position {
    if (this._position === null) {
      throw NOT_IMPLEMENTED;
    }

    return this._position;
  }

  get color(): string {
    return getRandomColor();
  }

  public updatePosition = (position: Position) => {
    this._position = position;
  };

  public split = () => {
    const roundedOneThird = Math.floor(this.content * (1 / 3));
    const rest = this.content - roundedOneThird;

    return {
      roundedOneThird: new Rectangle(roundedOneThird),
      rest: new Rectangle(rest),
    };
  };
}
