import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Info from './pages/Info';
import Welcome from './pages/Welcome';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/info" component={Info} />
      </Switch>
    </Router>
  );
}

export default App;