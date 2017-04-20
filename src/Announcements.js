import React, { Component } from 'react';
import './Announcements.css';

class Announcements extends Component {
  render() {
      if (this.props.annTotal != null) {
        function objectLength(obj) {
          var annLength = 0;
          for( var key in obj ) {
            if( obj.hasOwnProperty(key) ) {
              ++annLength;
            }
          }
          return annLength;
        };
        var lenAnn = objectLength(this.props.annTotal);
        var annArray = [];
        var keys = Object.keys(this.props.annTotal);
        for (var i = 0; i < lenAnn; i++) {
          annArray.push(this.props.annTotal[keys[i]]);
        }   
        var annList = [];
        for (var j = 0; j < lenAnn; ++j) {
          annList.push(
              <div>
                <div className="announcement" id={"announcement" + j}>
                  <span className="announcement-title">
                    <button role="button" data-toggle="collapse" href={".collapse" + j} aria-expanded="false" aria-controls="collapseExample">
                      {annArray[j][0]}
                      <span className={"triangle collapse" + j}></span>
                    </button>
                  </span>
                  <div className={"collapse collapse" + j}>
                    <div className="description">
                      {annArray[j][1]}
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
        {annList}
      </div>
    </div>
  );
  }
}

export default Announcements;
