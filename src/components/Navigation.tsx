import { Link } from 'react-router-dom';
import { createLinkFactory, RouteType } from '../router/routes';
import { MARTIN_EXAMPLE } from '../instances/MartinExample';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={RouteType.Home}>Home</Link>
        </li>
        <li>
          <Link to={RouteType.SolutionExamples}>Solution Form</Link>
        </li>
        <li>
          <Link
            to={createLinkFactory(RouteType.SolutionView)({
              numbers: MARTIN_EXAMPLE,
            })}
          >
            Solution View
          </Link>
        </li>
        <li>
          <Link to={RouteType.About}>About</Link>
        </li>
      </ul>
    </nav>
  );
};
