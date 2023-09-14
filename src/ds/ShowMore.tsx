import { ReactNode, useState } from 'react';

type Props = {
  MainContent: ReactNode;
  ExpandedContent: ReactNode;
};

export const ShowMore = ({ ExpandedContent, MainContent }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div>
      <p>
        <span className={'block'}>{MainContent}</span>
        <span
          className={'block'}
          style={{
            display: isExpanded ? 'initial' : 'none',
          }}
        >
          {ExpandedContent}
        </span>
      </p>
      <button className={'text-md font-normal text-blue-600 hover:underline'} onClick={toggle}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};
