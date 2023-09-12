export const sum = (numbers: number[]): number => {
  return numbers.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
};
