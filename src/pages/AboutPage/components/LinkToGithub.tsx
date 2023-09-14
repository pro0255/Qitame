import { ExternalLink } from '../../../ds/ExternalLink';
import { GrayText } from '../../../ds/GrayText';

export const LinkToGithub = () => {
  return (
    <GrayText>
      The GitHub repository for this project can be found at the following link:{' '}
      <ExternalLink href={'https://github.com/pro0255/Qitame'}>Github repository</ExternalLink>
    </GrayText>
  );
};
