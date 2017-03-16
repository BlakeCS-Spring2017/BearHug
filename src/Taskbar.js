import React, { Component } from 'react';
import './Taskbar.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Taskbar extends Component {
  render() {
    return (
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/beartime">Beartime</a></li>
        <li><a href="/announcements">Announcements</a></li>
        <li><a href="/lunch">Lunch</a></li>
      </ul>

      <ul>
        <li><Link to="/">Dial</Link></li>
        <li><Link to="/beartime">Beartime</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
        <li><Link to="/lunch">Lunch</Link></li>
      </ul>
     

    </div>

    );
  }
}

export default Taskbar;
