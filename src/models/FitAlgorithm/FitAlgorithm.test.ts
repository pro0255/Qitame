import { FitAlgorithm } from './FitAlgorithm';
import { MARTIN_EXAMPLE } from '../../instances/MartinExample';
import { sum } from '../../utils/sum';

describe('FitAlgorithm', () => {
  it('for the same input, the output remains consistent', () => {
    const rectangleEdges = FitAlgorithm.fit(Math.sqrt(sum(MARTIN_EXAMPLE)), MARTIN_EXAMPLE);

    expect(rectangleEdges).toMatchSnapshot();
  });
});
