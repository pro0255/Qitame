import { CenterLayout } from '../layouts/CenterLayout';
import { ExamplesView } from '../components/Examples/ExamplesView';
import { instances } from '../instances/instances';

export const ExamplesPage = () => {
  return (
    <CenterLayout>
      <ExamplesView examples={instances} />
    </CenterLayout>
  );
};
