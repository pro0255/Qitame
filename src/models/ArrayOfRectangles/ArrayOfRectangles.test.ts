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
  describe('merge', () => {
    it('after splitting 46, 15, and 10, array contains "[5, 3, 7, 31, 45, 21, 60, 24]"', () => {
      const arrayOfRectangles = new ArrayOfRectangles('[46,45,21,60,24]');

      const rectangle46 = arrayOfRectangles.rectangles[0];
      arrayOfRectangles.split(rectangle46);
      const rectangle15 = arrayOfRectangles.rectangles[0];
      arrayOfRectangles.split(rectangle15);
      const rectangle10 = arrayOfRectangles.rectangles[1];
      arrayOfRectangles.split(rectangle10);

      expect(arrayOfRectangles.contents).toEqual([5, 3, 7, 31, 45, 21, 60, 24]);
    });
    it('after splitting 46, 15, and 10, subTree of 15 is "[5, 10, 3, 7]"', () => {
      const arrayOfRectangles = new ArrayOfRectangles('[46,45,21,60,24]');

      const rectangle46 = arrayOfRectangles.rectangles[0];
      arrayOfRectangles.split(rectangle46);
      const rectangle15 = arrayOfRectangles.rectangles[0];
      arrayOfRectangles.split(rectangle15);
      const rectangle10 = arrayOfRectangles.rectangles[1];
      arrayOfRectangles.split(rectangle10);

      const subTree = rectangle15.getSubTree();
      const subTreeContents = subTree.map((rectangle) => rectangle.content);

      expect(subTreeContents).toEqual([5, 10, 3, 7]);
    });
    it('starts with "[46]", split into "[15, 31]" | "[5, 10, 31]" | "[5, 3, 7, 31]", after click on 5 merges back into [15, 31]', () => {
      const arrayOfRectangles = new ArrayOfRectangles('[46]');

      /// Split
      const rectangle46 = arrayOfRectangles.rectangles[0];
      arrayOfRectangles.split(rectangle46);
      // 15, 31
      expect(arrayOfRectangles.contents).toEqual([15, 31]);

      const rectangle15 = arrayOfRectangles.rectangles[0];
      arrayOfRectangles.split(rectangle15);
      // 5, 10, 31
      expect(arrayOfRectangles.contents).toEqual([5, 10, 31]);

      const rectangle10 = arrayOfRectangles.rectangles[1];
      arrayOfRectangles.split(rectangle10);
      // 5, 3, 7, 31
      expect(arrayOfRectangles.contents).toEqual([5, 3, 7, 31]);

      /// Merge
      const rectangle5 = arrayOfRectangles.rectangles[0];
      arrayOfRectangles.merge(rectangle5);

      expect(arrayOfRectangles.contents).toEqual([15, 31]);
    });
    it('starts with "[46, 60, 24]", split into "[46, 20, 40, 24]", click 40 should merge into "[46, 60, 24]"', () => {
      const arrayOfRectangles = new ArrayOfRectangles('[46, 60, 24]');

      const rectangle60 = arrayOfRectangles.rectangles[1];
      arrayOfRectangles.split(rectangle60);
      expect(arrayOfRectangles.contents).toEqual([46, 20, 40, 24]);

      const rectangle40 = arrayOfRectangles.rectangles[2];
      arrayOfRectangles.merge(rectangle40);
      expect(arrayOfRectangles.contents).toEqual([46, 60, 24]);
    });
  });
});
