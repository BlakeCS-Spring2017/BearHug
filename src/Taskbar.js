import React, { Component } from 'react';
import './Taskbar.css';

class Taskbar extends Component {
  render() {
    return (
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="beartime.asp">Beartime</a></li>
        <li><a href="announcements.asp">Announcements</a></li>
        <li><a href="lunch.asp">Lunch</a></li>
      </ul>
    );
  }
}

export default Taskbar;
