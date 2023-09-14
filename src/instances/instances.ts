import { Examples } from '../components/Examples/types';
import { MARTIN_EXAMPLE } from './MartinExample';
import { MARTIN_EXAMPLE_AND_SPLIT } from './MartinExampleAndSplit';
import { SPLIT_EXAMPLE } from './SplitExample';

export const instances: Examples = [
  {
    value: MARTIN_EXAMPLE,
    isValid: true,
    name: "Martin's example",
  },
  {
    value: SPLIT_EXAMPLE,
    isValid: true,
    name: 'Split examples',
  },
  {
    value: MARTIN_EXAMPLE_AND_SPLIT,
    isValid: true,
    name: "Martin's $ split example",
  },
];
