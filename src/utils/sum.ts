export const sum = (numbers: number[]): number => {
  return numbers.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
};

export const getRandomColor = () => {
  const randomRed = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
};
