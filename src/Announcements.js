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
          <span className="announcement-title">
          Anouncement #1
          </span>
          <span className="triangle"></span>
        </div>

        <div className="announcement">
          <span className="announcement-title">
          Anouncement #2
          </span>
          <span className="triangle"></span>
        </div>

        <div className="announcement">
          <span className="announcement-title">
          Anouncement #3
          </span>
          <span className="triangle"></span>
        </div>

        <button className="announcement">Announcement #1</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>

        <button className="announcement">Announcement #2</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>

        <button className="announcement">Announcement #3</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>

      </div>

    );
  }
}

export default Announcements;
