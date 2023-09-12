import { Link } from 'react-router-dom';
import { RouteType } from '../router/routes';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={RouteType.Home}>Home</Link>
        </li>
        <li>
          <Link to={RouteType.SolutionForm}>Solution Form</Link>
        </li>
        <li>
          <Link to={RouteType.SolutionView}>Solution View</Link>
        </li>
        <li>
          <Link to={RouteType.About}>About</Link>
        </li>
      </ul>
    </nav>
  );
};
