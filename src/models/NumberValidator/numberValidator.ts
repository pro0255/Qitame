import { HIGH_BORDER, LOW_BORDER } from '../../constants/NUMBER';

export const numberValidator = (numbers: number[]) => {
  let result = true;

  numbers.forEach((number) => {
    if (number < LOW_BORDER) {
      result = false;
    }

    if (number > HIGH_BORDER) {
      result = false;
    }
  });

  return result;
};
