import { GrayText } from '../ds/GrayText';
import { ExternalLink } from '../ds/ExternalLink';

export const HiToEmatiq = () => {
  return (
    <GrayText className={'mt-5 dark:text-gray-500'}>
      Hello to <ExternalLink href="https://www.ematiq.com/">Ematiq</ExternalLink> from Vojta
    </GrayText>
  );
};
