import React, { Component } from 'react';
import './Works.css';

import background from './emacs-work.png';
import reactLogo from './reactjs.png';
import nodeLogo from './nodejs.png';
import solidityLogo from './Solidity.png';

class Works extends Component {
  render(){
    return (
      <div className='Works' style={{ backgroundImage: `url(${background})` }}>
        <div className='shade'>
          <div className='react js-course'>
            <div className='react-logo'>
              <img src={reactLogo}/>
            </div>
            <div className='xcoin-lesson'>
              Bitcoin Charts
              <img/>
              <ul>
                <li>JSX & CSS</li>
                <li>API calls -> live data</li>
                <li>Chart plugins</li>
              </ul>
            </div>
            <div className='snoop-lesson'>
              Snoop's Job Application Form
              <img/>
              <ul>
                <li>JSX & CSS</li>
                <li>API calls -> live data</li>
                <li>Chart plugins</li>
              </ul>
            </div>
            <div className='hmpg-lesson'>
              My Portfolio Page
              <img/>
              <ul>
                <li>JSX & CSS</li>
                <li>API calls -> live data</li>
                <li>Chart plugins</li>
              </ul>
            </div>
            <div>
              github link
              <br/>
              <button>Sign up for waiting list</button>
            </div>
          </div>
          
          <div className='node js-course'>
            <img src={nodeLogo}/>
          </div>

          <div className='fullstack js-course'>
            <img src={reactLogo}/>
            <img src={nodeLogo}/>
          </div>
          
          <div className='solidity js-course'>
            <img src={solidityLogo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
