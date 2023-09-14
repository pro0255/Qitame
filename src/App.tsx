import { Router } from './router/Router';
import { ErrorBoundary } from 'react-error-boundary';
import { ApplicationErrorBoundary } from './components/Error/ApplicationErrorBoundary';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ApplicationErrorBoundary}>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
