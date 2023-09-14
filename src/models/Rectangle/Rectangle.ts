import { Position } from '../../types/Position';
import { makeAutoObservable } from 'mobx';
import { NOT_IMPLEMENTED } from '../../constants/NOT_IMPLEMENTED';
import { getRandomColor } from '../../utils/sum';

export enum Child {
  left = 'LEFT',
  right = 'RIGHT',
  none = 'NONE',
}

export class Rectangle {
  public readonly key: number;
  public readonly parent: Rectangle | null;
  private leftChild: Rectangle | null = null;
  private rightChild: Rectangle | null = null;

  private _position: Position | null = {} as Position;

  constructor(
    public content: number,
    parent: Rectangle | null = null,
  ) {
    makeAutoObservable(this);

    this.key = Math.random() * content;
    this.parent = parent;
  }

  get children(): Rectangle[] {
    return [this.leftChild, this.rightChild].filter((child) => child !== null) as Rectangle[];
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

    this.leftChild = new Rectangle(roundedOneThird, this);
    this.rightChild = new Rectangle(rest, this);

    return {
      roundedOneThird: this.leftChild,
      rest: this.rightChild,
    };
  };

  public getSubTree = (): Rectangle[] => {
    const subTree: Rectangle[] = [];

    this.recursiveChildren(this, subTree);

    return subTree;
  };

  private recursiveChildren = (rectangle: Rectangle | null, result: Rectangle[]) => {
    if (rectangle === null) {
      return;
    }

    if (rectangle.children.length !== 0) {
      result.push(...rectangle.children);
      this.recursiveChildren(rectangle.rightChild, result);
      this.recursiveChildren(rectangle.leftChild, result);
    }
  };

  public isChild = (rectangle: Rectangle) => {
    if (rectangle === this.leftChild) {
      return Child.left;
    }

    if (rectangle === this.rightChild) {
      return Child.right;
    }

    return Child.none;
  };
}
