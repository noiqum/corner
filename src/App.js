import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Container from './components/container';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
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
