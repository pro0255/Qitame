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
          className={`block w-full animate-show`}
          style={{
            display: isExpanded ? 'initial' : 'none',
          }}
        >
          {ExpandedContent}
        </span>
      </p>
      <button
        className={`mt-2 text-md font-normal text-blue-600 hover:underline ${isExpanded ? '' : 'animate-bounce'}`}
        onClick={toggle}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};
