import { CenterLayout } from '../layouts/CenterLayout';

export const AboutPage = () => {
  return (
    <CenterLayout>
      <div className={'flex w-full h-full mt-20 justify-center'}>
        <ul className={'flex flex-col items-center'}>
          <li>This page was created by Vojtech Prokop.</li>
        </ul>
      </div>
    </CenterLayout>
  );
};
