import { HIGH_BORDER, LOW_BORDER } from '../../constants/NUMBER';

export const contentsValidator = (contents: number[]) => {
  let result = true;

  contents.forEach((content) => {
    if (content < LOW_BORDER) {
      result = false;
    }

    if (content > HIGH_BORDER) {
      result = false;
    }
  });

  return result;
};
