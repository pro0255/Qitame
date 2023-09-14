import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WelcomePage } from '../pages/WelcomePage';
import { ExamplesPage } from '../pages/ExamplesPage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { RouteType } from './routes';
import { SolutionPage } from '../pages/SolutionPage';
import { ErrorBoundary } from 'react-error-boundary';
import { ApplicationErrorBoundary } from '../components/Error/ApplicationErrorBoundary';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteType.Home} element={<WelcomePage />} />
        <Route path={RouteType.Examples} element={<ExamplesPage />} />
        <Route
          path={RouteType.SolutionView}
          element={
            <ErrorBoundary FallbackComponent={ApplicationErrorBoundary}>
              <SolutionPage />
            </ErrorBoundary>
          }
        />
        <Route path={RouteType.About} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
