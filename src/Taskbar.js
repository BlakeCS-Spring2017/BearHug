import React, { Component } from 'react';
import './Taskbar.css';

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

     

    </div>

    );
  }
}

export default Taskbar;
