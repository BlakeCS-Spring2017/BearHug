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
        <li><a href="/">Dial</a></li>
        <li><a href="/beartime">Beartime</a></li>
        <li><a href="/announcements">Announcements</a></li>
        <li><a href="/lunch">Lunch</a></li>
      </ul>
      <ul>
        <li><Link to="/" className={(window.location.hash === "#/") ? "active" : ""}>
          <span className="glyphicon glyphicon-home" aria-hidden="true"> 
            <div className="Name">
              Home 
            </div> 
          </span>
        </Link></li>
        <li><Link to="/beartime" className={(window.location.hash === "#/beartime") ? "active" : ""}>
          <span className="glyphicon glyphicon-time" aria-hidden="true"> 
            <div className="Name">
              BearTime 
            </div> 
          </span>
        </Link></li>
        <li><Link to="/announcements" className={(window.location.hash === "#/announcements") ? "active" : ""}>
          <span className= "glyphicon glyphicon-bullhorn" aria-hidden="true">
            <div className="Name">
              Bulletin
            </div> 
          </span>
        </Link></li>
        <li><Link to="/lunch" className={(window.location.hash === "#/lunch") ? "active" : ""}>
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
