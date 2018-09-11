import React, { Component } from 'react';
import './Home.css';

import background from './computer-lab-old.png';
import solidity from './Solidity.png';
import nodejs from './nodejs.png';
import reactjs from './reactjs.png';

import { NavLink } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div className='Home' style={{ backgroundImage: `url(${background})` }}>
        <div className='banner'>
          Cutting Edge <code>{'{Web Code}'}</code> Curriculum
        </div>
        <div className='frameworks'>
          <img alt='ReactJS is the #1 client framework' src={reactjs}/>
          <img alt='nodejs is the most popular server runtime' src={nodejs}/>
          <div className='coming-soon'>
            <img alt='Solidity makes Ethereum contracts programmable' src={solidity}/>
          </div>
        </div>
        <div className='actions'>
          <NavLink to='/works'>
            <div>Read More about the courses</div>
          </NavLink>
          
          <NavLink to='/personnel'>
            <div>Who we are</div>
          </NavLink>
          
          <NavLink to='/contact'>
            <div>Get in touch, ask a question!</div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
