import React, { Component } from 'react';
import './Works.css';

import background from './emacs-work.png';
import reactLogo from './reactjs.png';
import nodeLogo from './nodejs.png';
import solidityLogo from './Solidity.png';

import githubLogo from './github.png';

class Works extends Component {
  render(){
    return (
      <div className='Works' style={{ backgroundImage: `url(${background})` }}>
        <div className='shade'>
          <div className='react course'>
            <div className='react-logo'>
              <img alt='' src={reactLogo}/>
            </div>
            <div className='lesson'>
              <h4>Bitcoin Charts</h4>
              <img alt=''/>
              <ul>
                <li>React basics (JSX)</li>
                <li>CSS basics in React</li>
                <li>API calls -> live data</li>
                <li>Chart plugins</li>
              </ul>
            </div>
            <div className='lesson'>
              <h4>Snoop's Job Application Form</h4>
              <img alt=''/>
              <ul>
                <li>Form Elements in JSX</li>
                <li>Conditional Rendering</li>
                <li>React Component & Props Basics</li>
                <li>UX and User Driven Development</li>
              </ul>
            </div>
            <div className='lesson'>
              <h4>My Portfolio Page</h4>
              <img alt=''/>
              <ul>
                <li>React Client Side Routing</li>
                <li>Responsive Design Principles</li>
                <li>Common Use Cases in Web Design</li>
                <li>Deployment to Personal Domain</li>
              </ul>
            </div>
            <div className='links-actions'>
              <div className='github-logo'>
                <a href="https://github.com/nikfrank">
                  <img src={githubLogo} alt='Check out our github'/>
                </a>
              </div>
              <div>
                <button className='signup-action'>Sign up for waiting list</button>
              </div>
            </div>
          </div>
          
          <div className='node course'>
            <img alt='' src={nodeLogo}/>
            <div>
              <h4>NodeJS Course <span style={{color:'green'}}>In Alpha</span></h4>
              <ul>
                <li>ExpressJS RESTful API Service</li>
                <li>Testing with POSTMAN, <code>supertest</code></li>
                <li>Connecting to Databases & Services on the Cloud</li>
                <li>Server-free Cloud Architecture with Lambda</li>
              </ul>
            </div>
          </div>

          <div className='fullstack course'>
            <img alt='' src={reactLogo}/>
            <img alt='' src={nodeLogo}/>
            <div>
              <h4>FullStack JS Course <span style={{color:'green'}}>In Alpha</span></h4>
              <ul>
                <li>Full Start-up Workflow</li>
                <li>Server and Front-end teams</li>
                <li>Integration and Deployment</li>
                <li>Creative Feature Designs</li>
              </ul>
            </div>
          </div>
          
          <div className='solidity course'>
            <img alt='' src={solidityLogo}/>
            <div>
              <h4>Solidity Course <span style={{color:'red'}}>Coming Soon</span></h4>
              <ul>
                <li>Local Testnet Workflows</li>
                <li>Contract and Attack Basics</li>
                <li>Integration with Browser Apps</li>
                <li>Deployment to Ethereum Network</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Works;
