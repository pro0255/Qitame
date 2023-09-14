import { CenterLayout } from '../layouts/CenterLayout';
import { ExamplesView } from '../components/Examples/ExamplesView';
import { instances } from '../instances/instances';

export const ExamplesPage = () => {
  return (
    <CenterLayout>
      <div className={'min-w-[60%] p-10'}>
        <ExamplesView examples={instances} />
      </div>
    </CenterLayout>
  );
};
