import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Container from './components/container';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route  exact path='/' component={Container}></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
