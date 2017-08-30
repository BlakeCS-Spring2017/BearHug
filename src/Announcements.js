import React, { Component } from 'react';
import './Announcements.css';

class Announcements extends Component {
  render() {

    var renderStr = "Not Working";
    if (this.props) {
      renderStr = this.props.something;
    }

    var items = [];
    for (var i = 0; i < 3; ++i) {
      items.push(

                <div className="announcement" class="accordion-body collapse">

                    <span className="announcement-title">

                      <button className="btn btn-primary" role="button" href=".triangle" data-toggle="collapse" href={".collapse" + i} aria-expanded="false" aria-controls="collapseExample">

                          <span className="badge"> ! </span>

                          Announcement #{i+1}

                          <span className={"triangle collapse" + i}></span>

                          <div className={"collapse" + i}> 

                              <div className="description">

                                  ...

                              </div>

                          </div>

                      </button>

                    </span>

                 </div>


                )
    }

    return (
    <div>
        <div className="page-title">
          Announcements
        </div>

        <button className="announcement" type = "button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Announcement #1
        </button>

        <div className="collapse" id="collapseExample">
          <div className="well">
            ...
           </div>
        </div>

    </div>
    );
  }
}

export default Announcements;
