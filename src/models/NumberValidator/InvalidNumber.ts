import { HIGH_BORDER, LOW_BORDER } from '../../constants/NUMBER';

export class InvalidNumber extends Error {
  public message = `The minimum value for the number is ${LOW_BORDER}, and the maximum is ${HIGH_BORDER}.`;
  public invalidInput: number[];

  constructor(invalidInput: number[]) {
    super();
    this.invalidInput = invalidInput;
  }
}
