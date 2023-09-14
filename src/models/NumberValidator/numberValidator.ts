import { HIGH_BORDER, LOW_BORDER } from '../../constants/NUMBER';
import { InvalidNumber } from './InvalidNumber';

export const numberValidator = (numbers: number[]) => {
  numbers.forEach((number) => {
    if (number < LOW_BORDER) {
      throw new InvalidNumber(numbers);
    }

    if (number > HIGH_BORDER) {
      throw new InvalidNumber(numbers);
    }
  });
};
