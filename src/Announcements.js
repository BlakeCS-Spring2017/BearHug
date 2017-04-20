import React, { Component } from 'react';
import './Announcements.css';

class Announcements extends Component {
  render() {
      if (this.props.annTotal != null) {
        console.log(this.props.annTotal)
        function ObjectLength(object) {
          var length = 0;
          for( var key in object ) {
            if( object.hasOwnProperty(key) ) {
              ++length;
            }
          }
          return length;
        };
        var num = ObjectLength(this.props.annTotal);
        console.log(num);
        var things = [];
        var keys = Object.keys(this.props.annTotal);
        for (var i = 0; i < num; i++) {
          things.push(this.props.annTotal[keys[i]]);
        }   
        console.log(things);
        var array = [];
        for (var i=0; i < num; ++i) {
          array.push(
            
                <div className="announcement" class="accordion-body collapse" id={"collapse" + i}>
                  <span className="announcement-title">
                  <button class="btn btn-primary" role="button" href=".triangle" data-toggle="collapse" href={".collapse" + i} aria-expanded="fasle" aria-controls="collapseExample">
                  {things[i][0]}
                  <span className={"triangle collapse" + i}></span>
                  </button>
                  </span>
                  <div className={"collapse collapse" + i}>
                  <div className="description">
                  {things[i][1]}
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
