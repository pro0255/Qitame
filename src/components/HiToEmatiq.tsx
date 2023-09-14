import { GrayText } from '../ds/GrayText';
import { ExternalLink } from '../ds/ExternalLink';

export const HiToEmatiq = () => {
  return (
    <GrayText className={'mt-5'}>
      Hello to <ExternalLink href="https://www.ematiq.com/">Ematiq</ExternalLink> from Vojta
    </GrayText>
  );
};
