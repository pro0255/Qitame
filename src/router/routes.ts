import { SolutionViewParams } from '../pages/SolutionViewPage';
import { NOT_IMPLEMENTED } from '../constants/NOT_IMPLEMENTED';

export enum RouteType {
  Home = '/',
  About = '/about',
  SolutionExamples = '/solutionExamples',
  SolutionView = '/solutionView/:numbers',
}

export const createLinkFactory = (type: RouteType.SolutionView) => {
  if (type === RouteType.SolutionView) {
    return ({
      numbers,
    }: Omit<SolutionViewParams, 'numbers'> & {
      numbers: number[];
    }) => {
      return `/solutionView/${JSON.stringify(numbers)}`;
    };
  } else {
    throw NOT_IMPLEMENTED;
  }
};
