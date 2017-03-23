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
        <div className="announcement" class="accordion-body collapse">
          <span className="announcement-title">
          <button class="btn btn-primary" role="button" href=".triangle" data-toggle="collapse" href=".collapseExample1" aria-expanded="fasle" aria-controls="collapseExample">
          Anouncement #1
          </button>
          </span>
          <span className="triangle collapseExample1"></span>
          <div class="collapse" className="collapseExample1">
              <div class="description">
                  ...
              </div>
          </div>
        </div>

        <div className="announcement" class="accordion-body collapse">
          <span className="announcement-title">
          <button class="btn btn-primary" role="button" href=".triangle" data-toggle="collapse" href=".collapseExample2" aria-expanded="fasle" aria-controls="collapseExample">
          Anouncement #2
          </button>
          </span>
          <span className="triangle collapseExample2"></span>
          <div class="collapse" className="collapseExample2">
              <div class="description">
                  ...
              </div>
          </div>
        </div>
        <div className="announcement" class="accordion-body collapse">
          <span className="announcement-title">
          <button class="btn btn-primary" role="button" href=".triangle" data-toggle="collapse" href=".collapseExample3" aria-expanded="fasle" aria-controls="collapseExample">
          Anouncement #3
          </button>
          </span>
          <span className="triangle collapseExample3"></span>
          <div class="collapse" className="collapseExample3">
              <div class="description">
                  ...
              </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Announcements;
