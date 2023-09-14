import { Examples } from '../components/Examples/types';
import { MARTIN_EXAMPLE } from './MartinExample';
import { MARTIN_EXAMPLE_AND_SPLIT } from './MartinExampleAndSplit';
import { SPLIT_EXAMPLE } from './SplitExample';
import { INVALID_EXAMPLE_ABOVE_100 } from './InvalidExampleAbove100';
import { INVALID_EXAMPLE_MINUS_ONE } from './InvalidExample-1';
import { VOJTA_EXAMPLE } from './VojtaExample';

export const instances: Examples = [
  {
    value: MARTIN_EXAMPLE,
    name: "Martin's example",
  },
  {
    value: SPLIT_EXAMPLE,
    name: 'Split examples',
  },
  {
    value: INVALID_EXAMPLE_MINUS_ONE,
    name: 'Keep it up!',
  },
  {
    value: MARTIN_EXAMPLE_AND_SPLIT,
    name: "Martin's & Split example",
  },
  {
    value: INVALID_EXAMPLE_ABOVE_100,
    name: 'Above 100!',
  },
  {
    value: VOJTA_EXAMPLE,
    name: "Vojtik's sample",
  },
];
