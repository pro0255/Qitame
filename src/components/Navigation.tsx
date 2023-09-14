import { createLinkFactory, RouteType } from '../router/routes';
import { MARTIN_EXAMPLE_AND_SPLIT } from '../instances/MartinExampleAndSplit';
import { ApplicationLink } from './ApplicationLink';
import { ThemeButton } from './ThemeButton';

export const Navigation = () => {
  return (
    <nav className={'w-full flex p-8 shadow-md'}>
      <ul className={'w-full flex flew-row justify-evenly items-center'}>
        <li>
          <ApplicationLink to={RouteType.Home}>Home</ApplicationLink>
        </li>
        <li>
          <ApplicationLink to={RouteType.Examples}>Examples</ApplicationLink>
        </li>
        <li>
          <ApplicationLink
            to={createLinkFactory(RouteType.Solution)({
              numbers: MARTIN_EXAMPLE_AND_SPLIT,
            })}
          >
            Solution
          </ApplicationLink>
        </li>
        <li>
          <ApplicationLink to={RouteType.About}>About</ApplicationLink>
        </li>
        <ThemeButton />
      </ul>
    </nav>
  );
};
