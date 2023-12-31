import { NOT_IMPLEMENTED } from '../../constants/NOT_IMPLEMENTED';
import { makeAutoObservable } from 'mobx';
import { Child, Rectangle } from '../Rectangle/Rectangle';
import { createLinkFactory, RouteType } from '../../router/routes';
import { contentsValidator } from '../NumberValidator/contentsValidator';
import { InvalidNumber } from '../NumberValidator/InvalidNumber';

enum ArrayPosition {
  Start = -1,
  End = -2,
}

export class ArrayOfRectangles {
  public rectangles: Rectangle[] = [];
  public readonly initialContents: number[];

  private validate = (contents: number[]) => {
    if (!contentsValidator(contents)) {
      throw new InvalidNumber(contents);
    }
  };

  constructor(numbers: string | undefined) {
    makeAutoObservable(this);

    if (!numbers) {
      throw NOT_IMPLEMENTED;
    }

    const parsedContents = this.parseStringIntoContents(numbers);
    this.validate(parsedContents);
    this.initialContents = parsedContents;
    this.rectangles = parsedContents.map((number) => new Rectangle(number));
  }

  private parseStringIntoContents = (numbers: string): number[] => {
    try {
      return JSON.parse(numbers);
    } catch (e) {
      throw NOT_IMPLEMENTED;
    }
  };

  get contents() {
    return this.rectangles.map((rectangle) => rectangle.content);
  }

  public split = (rectangle: Rectangle) => {
    this.splitRectangles(rectangle);
    this.updateURL();
  };

  private splitRectangles = (rectangle: Rectangle) => {
    // Counting on reference comparison (also kind of safes resources because i work always with same instance)
    const index = this.rectangles.indexOf(rectangle);

    if (index === -1) {
      throw NOT_IMPLEMENTED;
    }

    const { roundedOneThird, rest } = rectangle.split();

    this.rectangles.splice(index, 1, roundedOneThird, rest);
  };

  public updateURL = () => {
    const url = new URL(location.href);

    url.pathname = createLinkFactory(RouteType.Solution)({
      numbers: this.contents,
    });

    history.pushState({}, '', url);
  };

  public merge = (rectangle: Rectangle) => {
    this.mergeRectangles(rectangle);
    this.updateURL();
  };

  private mergeRectangles = (rectangle: Rectangle) => {
    if (rectangle.parent === null) {
      throw NOT_IMPLEMENTED;
    }

    // The whole subtree should be merged into node
    const subTreeRectangles = rectangle.parent.getSubTree();

    const savepoint = this.getSavepoint(rectangle);

    // For this cSquan be created util later
    this.rectangles = this.rectangles.filter((rectangle) => {
      return !subTreeRectangles.includes(rectangle);
    });

    if (savepoint === ArrayPosition.End) {
      this.rectangles.push(rectangle.parent);
    }

    if (savepoint === ArrayPosition.Start) {
      this.rectangles.unshift(rectangle.parent);
    }

    if (savepoint instanceof Rectangle) {
      const childType = rectangle.parent.isChild(rectangle);
      const index = this.rectangles.indexOf(savepoint);

      if (childType === Child.left) {
        this.rectangles.splice(index + 1, 0, rectangle.parent);
      }

      if (childType === Child.right) {
        this.rectangles.splice(index, 0, rectangle.parent);
      }
    }
  };

  private getSavepoint = (rectangle: Rectangle): Rectangle | ArrayPosition => {
    if (rectangle.parent === null) {
      throw NOT_IMPLEMENTED;
    }

    const childType = rectangle.parent.isChild(rectangle);
    const index = this.rectangles.indexOf(rectangle);

    if (childType === Child.left) {
      const value = this.rectangles?.[index - 1];
      return value ?? ArrayPosition.Start;
    }

    if (childType === Child.right) {
      const value = this.rectangles?.[index + 1];
      return value ?? ArrayPosition.End;
    }

    throw NOT_IMPLEMENTED;
  };
}
