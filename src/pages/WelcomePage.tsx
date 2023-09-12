import reactLogo from '../assets/react.svg';
import { HiToEmatiq } from '../components/HiToEmatiq';
import { CenterLayout } from '../layouts/CenterLayout';

export const WelcomePage = () => {
  return (
    <CenterLayout>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <HiToEmatiq />
      </div>
    </CenterLayout>
  );
};
