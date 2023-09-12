import { NOT_IMPLEMENTED } from '../constants/NOT_IMPLEMENTED';
import { makeAutoObservable } from 'mobx';
import { Rectangle } from './Rectangle';

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

  public update = () => {
    this.rectangles?.push(new Rectangle(10));
  };

  get contents() {
    return this.rectangles.map((rectangle) => rectangle.content);
  }
}
