import { GrayText } from '../../../ds/GrayText';
import { ExternalLink } from '../../../ds/ExternalLink';

export const CreatedBy = () => {
  return (
    <GrayText>
      This page was created by{' '}
      <ExternalLink href="https://www.linkedin.com/in/vojta-prokop-91b71b1a0/">Vojtech Prokop</ExternalLink>
    </GrayText>
  );
};
