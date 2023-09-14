import { Examples } from './types';
import { ExampleView } from './ExampleView';
import { createLinkFactory, RouteType } from '../../router/routes';
import { Link } from 'react-router-dom';

type Props = {
  examples: Examples;
};

export const ExamplesView = ({ examples }: Props) => {
  return (
    <ul>
      {examples.map((example) => {
        // As key can be used a name because I am going to keep it unique
        return (
          <li className={'hover:bg-gray-200 focus:bg-gray-50'} key={example.name}>
            <Link
              to={createLinkFactory(RouteType.SolutionView)({
                numbers: example.value,
              })}
            >
              <ExampleView {...example} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
