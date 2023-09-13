import { ArrayOfRectangles } from './ArrayOfRectangles';

describe('ArrayOfRectangles', () => {
  it('when the input consists of the numbers "[100,45,21,60,24]," the contents are parsed into an array containing the specified numbers', () => {
    const arrayOfRectangles = new ArrayOfRectangles('[100,45,21,60,24]');

    expect(arrayOfRectangles.contents).toEqual([100, 45, 21, 60, 24]);
  });
  describe('split', () => {
    it('whenever the input is "[100,45,21,60,24]" and it is split, the resulting array becomes [33, 67, 45, 21, 60, 24]', () => {
      const arrayOfRectangles = new ArrayOfRectangles('[100,45,21,60,24]');
      const rectangle100 = arrayOfRectangles.rectangles[0];

      arrayOfRectangles.split(rectangle100);

      expect(arrayOfRectangles.contents).toEqual([33, 67, 45, 21, 60, 24]);
    });
    it('whenever the input is "[100,45,21,60,24]" and it is split, the URL is updated to [33, 67, 45, 21, 60, 24]', () => {
      const arrayOfRectangles = new ArrayOfRectangles('[100,45,21,60,24]');
      const rectangle100 = arrayOfRectangles.rectangles[0];

      arrayOfRectangles.split(rectangle100);

      expect(global.window.location.href).toEqual('http://localhost/solutionView/[33,67,45,21,60,24]');
    });
  });
});
