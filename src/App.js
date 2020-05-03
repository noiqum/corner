import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Container from './components/container/container';
import Navbar from './components/navbar/navbar';
import Signin from './components/signin/signin';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route  exact path='/' component={Container}></Route>
        <Route exact path='/signin' component={Signin}></Route>
        <Route path='/shop'></Route>
        <Route path='/shop/:collection'></Route>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
