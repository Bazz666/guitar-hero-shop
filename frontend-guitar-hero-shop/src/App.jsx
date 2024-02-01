// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Productos from './pages/ProductosPage';

const App = () => {
  return (
    <Router>
      <Menu /> {/* Este es nuestro menú */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" component={Productos} />
      </Switch>
    </Router>
  );
};

export default App;
