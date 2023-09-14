import { Examples } from './types';
import { ExampleView } from './ExampleView';
import { createLinkFactory, RouteType } from '../../router/routes';
import { Link } from 'react-router-dom';
import { contentsValidator } from '../../models/NumberValidator/contentsValidator';

type Props = {
  examples: Examples;
};

export const ExamplesView = ({ examples }: Props) => {
  return (
    <ul>
      {examples.map((example) => {
        // As key can be used a name because I am going to keep it unique
        return (
          <li
            className={
              'transition-colors duration-300 ease-in-out hover:bg-gray-200 hover:animate-moveToMe focus:bg-gray-50'
            }
            key={example.name}
          >
            <Link
              to={createLinkFactory(RouteType.Solution)({
                numbers: example.value,
              })}
            >
              <ExampleView {...example} isValid={contentsValidator(example.value)} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
