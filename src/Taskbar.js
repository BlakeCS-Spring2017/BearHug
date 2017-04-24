import React, { Component } from 'react';
import './Taskbar.css';
import {
  Link
} from 'react-router-dom'

class Taskbar extends Component {
  render() {
    return (
    <div>
      <ul>
        <li><Link to="/">
          <span className="glyphicon glyphicon-home" aria-hidden="true"> 
            <div className="Name">
              Home 
            </div> 
          </span>
        </Link></li>
        <li><Link to="/beartime">
          <span className="glyphicon glyphicon-time" aria-hidden="true"> 
            <div className="Name">
              BearTime 
            </div> 
          </span>
        </Link></li>
        <li><Link to="/announcements">
          <span className="glyphicon glyphicon-bullhorn" aria-hidden="true">
            <div className="Name">
              Bulletin
            </div> 
          </span>
        </Link></li>
        <li><Link to="/lunch">
          <span className="glyphicon glyphicon-apple" aria-hidden="true">
            <div className="Name">
              Lunch
            </div> 
          </span>
        </Link></li>
      </ul>
     

    </div>

    );
  }
}

export default Taskbar;
