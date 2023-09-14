import { Examples } from './types';
import { ExampleView } from './ExampleView';

type Props = {
  examples: Examples;
};

export const ExamplesView = ({ examples }: Props) => {
  return (
    <ul>
      {examples.map((example) => {
        // As key can be used a name because I am going to keep it unique
        return (
          <li key={example.name}>
            <ExampleView {...example} />
          </li>
        );
      })}
    </ul>
  );
};
