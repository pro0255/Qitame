import { ShowMore } from '../../../ds/ShowMore';
import { GrayText } from '../../../ds/GrayText';

export const WhatWasUsed = () => {
  return (
    <ShowMore
      MainContent={<GrayText>What was used to create this application?</GrayText>}
      ExpandedContent={<ListOfTechnologies />}
    />
  );
};

const ListOfTechnologies = () => {
  return (
    <ul className={'p-6 list-disc'}>
      <li>
        <GrayText className={'text-sm'}>MobX</GrayText>
      </li>
      <li>
        <GrayText className={'text-sm'}>Tailwind</GrayText>
      </li>
      <li>
        <GrayText className={'text-sm'}>React</GrayText>
      </li>
      <li>
        <GrayText className={'text-sm'}>Vite</GrayText>
      </li>
      <li>
        <GrayText className={'text-sm'}>React Router</GrayText>
      </li>
    </ul>
  );
};
