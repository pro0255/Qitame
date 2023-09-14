import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WelcomePage } from '../pages/WelcomePage';
import { ExamplesPage } from '../pages/ExamplesPage';
import { AboutPage } from '../pages/AboutPage';
import { RouteType } from './routes';
import { SolutionPage } from '../pages/SolutionPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteType.Home} element={<WelcomePage />} />
        <Route path={RouteType.Examples} element={<ExamplesPage />} />
        <Route path={RouteType.SolutionView} element={<SolutionPage />} />
        <Route path={RouteType.About} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
