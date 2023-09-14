import { SolutionViewParams } from '../pages/SolutionPage';
import { NOT_IMPLEMENTED } from '../constants/NOT_IMPLEMENTED';

export enum RouteType {
  Home = '/',
  About = '/about',
  Examples = '/examples',
  SolutionView = '/solution/:numbers',
}

export const createLinkFactory = (type: RouteType.SolutionView) => {
  if (type === RouteType.SolutionView) {
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
