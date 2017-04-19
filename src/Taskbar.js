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
        <li><Link to="/">
          <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
        </Link></li>
        <li><Link to="/beartime">
          <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
        </Link></li>
        <li><Link to="/announcements">
          <span className="glyphicon glyphicon-bullhorn" aria-hidden="true"></span>
        </Link></li>
        <li><Link to="/lunch">
          <span className="glyphicon glyphicon-apple" aria-hidden="true"></span>
        </Link></li>
      </ul>
     

    </div>

    );
  }
}

export default Taskbar;
