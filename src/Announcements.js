import React, { Component } from 'react';
import './Announcements.css';

class Announcements extends Component {
  render() {
    return (
      <div>

      //top 3 announcements
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
          <button class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Anouncement #2
          </button>
          </span>
          <span className="triangle"></span>
          <div class="collapse" id="collapseExample">
              <div class="description">
                  ...
              </div>
          </div>
        </div>

        <div className="announcement">
          <span className="announcement-title">
          Anouncement #3
          </span>
          <span className="triangle"></span>
        </div>
        </div>

    );
  }
}

export default Announcements;
