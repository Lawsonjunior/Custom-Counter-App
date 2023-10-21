import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import CustomCounter from './CustomCounter';
import NotFound from './NotFound';

function ErrorFallback({ error }) {
  return (
    <div>
      <h1>An error occurred:</h1>
      <p>{error.message}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CustomCounter} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;


