import { SolutionViewParams } from '../pages/SolutionPage';
import { NOT_IMPLEMENTED } from '../constants/NOT_IMPLEMENTED';

export enum RouteType {
  Home = '/',
  About = '/about',
  Examples = '/examples',
  Solution = '/solution/:numbers',
}

export const createLinkFactory = (type: RouteType.Solution) => {
  if (type === RouteType.Solution) {
    return ({
      numbers,
    }: Omit<SolutionViewParams, 'numbers'> & {
      numbers: number[];
    }) => {
      return `/solution/${JSON.stringify(numbers)}`;
    };
  } else {
    throw NOT_IMPLEMENTED;
  }
};
