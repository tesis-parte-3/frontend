import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Route path="/principal" exact component={Principal} />
        <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/info" component={Info} />
        <Route path="/Estadistica" component={Estadistica} />
        <Route path="/Examen" component={Examen} />
        <Route path="/Estudios" component={Estudios} />
        <Route path="/Ajustes" component={Ajustes} />
      </Switch>
    </Router>
  );
}

export default App;