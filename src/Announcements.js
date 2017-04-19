import React, { Component } from 'react';
import './Announcements.css';

class Announcements extends Component {
  render() {
      if (this.props.anntotal != null) {
        console.log(this.props.anntotal)
        function objectlength(obj) {
          var length = 0;
          for( var key in obj ) {
            if( obj.hasOwnProperty(key) ) {
              ++length;
            }
          }
          return length;
        };
        var num = objectlength(this.props.anntotal);
        console.log(num);
        var things = [];
        var keys = Object.keys(this.props.anntotal);
        for (var i = 0; i < num; i++) {
          things.push(this.props.anntotal[keys[i]]);
        }   
        console.log(things);
        var array = [];
        for (var j = 0; j < num; ++j) {
          array.push(
              <div>
                <div className="announcement" id={"announcement" + j}>
                  <span className="announcement-title">
                  <button role="button" data-toggle="collapse" href={".collapse" + j} aria-expanded="false" aria-controls="collapseExample">
                  {things[j].title}
                  <span className={"triangle collapse" + j}></span>
                  </button>
                  </span>
                  <div className={"collapse collapse" + j}>
                  <div className="description">
                  {things[j].description}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
    return (
      <div>
         <div className="page-title">
          Announcements
        </div>
        
        <div>
          {array}
        </div>
      </div>
    );
  }
}

export default Announcements;
