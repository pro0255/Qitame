import { CenterLayout } from '../../layouts/CenterLayout';
import { aboutItems } from './components';
import { AboutItem } from './AboutItem';

export const AboutPage = () => {
  return (
    <CenterLayout>
      <div className={'flex w-full h-full mt-20 justify-center'}>
        <ul className={'max-w-[60%] flex flex-col list-disc'}>
          {aboutItems.map((Component, index) => {
            return (
              <AboutItem key={index}>
                <Component />
              </AboutItem>
            );
          })}
        </ul>
      </div>
    </CenterLayout>
  );
};
