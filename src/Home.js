import React, { Component } from 'react';
import './Home.css';

import background from './computer-lab-old.png';

class Home extends Component {
  render(){
    return (
      <div style={{
        backgroundImage: `url(${background})`,
        flexGrow: 1,
        position: 'relative',
        backgroundSize: 'cover',
      }}>

        <div style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          padding: 30,
          borderRadius: 8,
          fontSize: '2em',
          backgroundColor: 'rgba(255, 150, 102, 0.875)',
        }}>
          Cutting Edge Web Code Curriculum
        </div>
      </div>
    );
  }
}

export default Home;
