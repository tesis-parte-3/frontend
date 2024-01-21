import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutWithNav from './pages/LayoutWithNav';
import Login from './pages/Login';
import Info from './pages/Info';
import Welcome from './pages/Welcome';
import Principal from './pages/Principal';
import Estadistica from './pages/Estadistica';
import Ajustes from './pages/Ajustes';
import Examen from './pages/Examen';
import Estudios from './pages/Estudios';


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/principal" exact>
          <LayoutWithNav>
            <Principal />
          </LayoutWithNav>
        </Route>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/info" component={Info} />
        <Route path="/Estadistica">
          <LayoutWithNav>
            <Estadistica />
          </LayoutWithNav>
        </Route>
        <Route path="/Examen">
          <LayoutWithNav>
            <Examen />
          </LayoutWithNav>
        </Route>
        <Route path="/Estudios">
          <LayoutWithNav>
            <Estudios />
          </LayoutWithNav>
        </Route>
        <Route path="/Ajustes">
          <LayoutWithNav>
            <Ajustes />
          </LayoutWithNav>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;