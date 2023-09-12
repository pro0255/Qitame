import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WelcomePage } from '../pages/WelcomePage';
import { SolutionFormPage } from '../pages/SolutionFormPage';
import { AboutPage } from '../pages/AboutPage';
import { RouteType } from './routes';
import { SolutionViewPage } from '../pages/SolutionViewPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteType.Home} element={<WelcomePage />} />
        <Route path={RouteType.SolutionExamples} element={<SolutionFormPage />} />
        <Route path={RouteType.SolutionView} element={<SolutionViewPage />} />
        <Route path={RouteType.About} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
