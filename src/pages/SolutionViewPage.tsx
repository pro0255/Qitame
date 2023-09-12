import { CenterLayout } from '../layouts/CenterLayout';
import { useParams } from 'react-router-dom';

export type SolutionViewParams = {
  numbers: string;
};

export const SolutionViewPage = () => {
  const { numbers } = useParams<SolutionViewParams>();

  console.log(numbers);

  return <CenterLayout>This is Area</CenterLayout>;
};
