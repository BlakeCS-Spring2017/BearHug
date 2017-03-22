import React, { Component } from 'react';
import './Announcements.css';

class Announcements extends Component {
  render() {
    return (
      <div>
        <div className="page-title">
          Announcements
        </div>
        <div className="announcement">
          Anouncement #1
        </div>
        <div className="announcement">
          Announcement #2
        </div>
        <div className="announcement">
          Announcement #3
        </div>
      </div>

    );
  }
}

export default Announcements;
