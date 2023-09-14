import { CenterLayout } from '../layouts/CenterLayout';
import { ExamplesView } from '../components/Examples/ExamplesView';
import { instances } from '../instances/instances';

export const ExamplesPage = () => {
  return (
    <CenterLayout>
      <div className={'min-w-[60%] max-w-full p-10 flex flex-col items-center'}>
        <ExamplesView examples={instances} />
      </div>
    </CenterLayout>
  );
};
