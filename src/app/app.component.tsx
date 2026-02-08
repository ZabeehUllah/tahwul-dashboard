import React from "react";

import Routes from "../router/router.component";
import ErrorBoundary from "../components/ui/error-boundary/error-boundary.component";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
};

export default App;
