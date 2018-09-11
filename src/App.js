import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from 'react-router-dom';

import Home from './Home';
import Works from './Works';
import Personnel from './Personnel';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>
              <NavLink to='/'>Codeschool Israel</NavLink>
            </h1>
            <div className='link-container'>
              <NavLink to="/home">
                <div>Home</div>
              </NavLink>
              <NavLink to="/works">
                <div>Works</div>
              </NavLink>
              <NavLink to="/personnel">
                <div>Personnel</div>
              </NavLink>
              <NavLink to="/contact">
                <div>Contact</div>
              </NavLink>
            </div>
          </header>

          <Switch>
            <Route path='/home' exact component={Home}/>
            <Route path='/works' exact component={Works}/>
            <Route path='/personnel' exact component={Personnel}/>
            <Route path='/contact' exact component={Contact}/>
            <Redirect from='/' to='home'/>
          </Switch>
          
          <footer className='App-footer'>
            <div>Built by: Capslok TLV</div>
            <div/>
            <div>Copyright Codeschool IL 2018</div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
