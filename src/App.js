import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/History';
import Routes from './component/route/index';
function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
export default App;