import { Link } from 'react-router-dom';
import { createLinkFactory, RouteType } from '../router/routes';
import { MARTIN_EXAMPLE_AND_SPLIT } from '../instances/MartinExampleAndSplit';

export const Navigation = () => {
  return (
    <nav>
      <ul className={'w-full flex p-5 flew-row justify-evenly items-center'}>
        <li>
          <Link to={RouteType.Home}>Home</Link>
        </li>
        <li>
          <Link to={RouteType.Examples}>Examples</Link>
        </li>
        <li>
          <Link
            to={createLinkFactory(RouteType.SolutionView)({
              numbers: MARTIN_EXAMPLE_AND_SPLIT,
            })}
          >
            Solution
          </Link>
        </li>
        <li>
          <Link to={RouteType.About}>About</Link>
        </li>
      </ul>
    </nav>
  );
};
