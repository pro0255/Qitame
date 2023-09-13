import { NOT_IMPLEMENTED } from '../../constants/NOT_IMPLEMENTED';
import { makeAutoObservable } from 'mobx';
import { Rectangle } from '../Rectangle/Rectangle';
import { createLinkFactory, RouteType } from '../../router/routes';

export class ArrayOfRectangles {
  public readonly rectangles: Rectangle[] = [];

  constructor(numbers: string | undefined) {
    makeAutoObservable(this);

    if (!numbers) {
      throw NOT_IMPLEMENTED;
    }

    const parsedNumbers = this.parseStringIntoNumbers(numbers);
    this.rectangles = parsedNumbers.map((number) => new Rectangle(number));
  }

  private parseStringIntoNumbers = (numbers: string): number[] => {
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
    this.updateRectangles(rectangle);
    this.updateURL();
  };

  private updateRectangles = (rectangle: Rectangle) => {
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

    url.pathname = createLinkFactory(RouteType.SolutionView)({
      numbers: this.contents,
    });

    history.pushState({}, '', url);
  };
}
