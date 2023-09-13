import { Rectangle } from './Rectangle';

describe('Rectangle', () => {
  describe('split', () => {
    it("when rectangle with S = '46' is split, result is rectangles with S = '15' and S = '31'", () => {
      const rectangle = new Rectangle(46);

      const { roundedOneThird, rest } = rectangle.split();

      expect(roundedOneThird.content).toBe(15);
      expect(rest.content).toBe(31);
    });
    it("when rectangle with S = '15' is split, result is rectangles with S = '5' and S = '10'", () => {
      const rectangle = new Rectangle(46);

      const { roundedOneThird, rest } = rectangle.split();

      expect(roundedOneThird.content).toBe(15);
      expect(rest.content).toBe(31);
    });
    it("when rectangle with S = '10' is split, result is rectangles with S = '3' and S = '7'", () => {
      const rectangle = new Rectangle(46);

      const { roundedOneThird, rest } = rectangle.split();

      expect(roundedOneThird.content).toBe(15);
      expect(rest.content).toBe(31);
    });
  });
});
