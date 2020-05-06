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
import Signup from './components/signin/signup';
import User from './components/user/user';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route  exact path='/' component={Container}></Route>
        <Route exact path='/signin' component={Signin}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route path='/shop'></Route>
        <Route path='/shop/:collection'></Route>
        <Route path='/user' component={User}></Route>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
