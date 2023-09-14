import { Examples } from './types';
import { ExampleView } from './ExampleView';
import { createLinkFactory, RouteType } from '../../router/routes';
import { ApplicationLink } from '../ApplicationLink';

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
            <ApplicationLink
              to={createLinkFactory(RouteType.SolutionView)({
                numbers: example.value,
              })}
            >
              <ExampleView {...example} />
            </ApplicationLink>
          </li>
        );
      })}
    </ul>
  );
};
