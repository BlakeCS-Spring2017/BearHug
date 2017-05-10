import React, { Component } from 'react';
import './Announcements.css';

class Announcements extends Component {
  constructor(props) {
      super(props);
      this.buttonClick = this.buttonClick.bind(this);
      var storedAnnouncements = localStorage.an

      if(storedAnnouncements === undefined) {
        storedAnnouncements = [];
        localStorage.an = JSON.stringify([]);
      } else {
        storedAnnouncements = JSON.parse(localStorage.an)
      }
      this.state = {
        readAnnouncements: storedAnnouncements,
        tri: []
      }

  }
  buttonClick(e){
    if (!JSON.parse(localStorage.an).includes(e.currentTarget.id)){
      this.state.readAnnouncements.push(e.currentTarget.id)
      localStorage.an= JSON.stringify(this.state.readAnnouncements)
    } else {
    }
    this.forceUpdate();

    if (this.state.tri.includes(e.currentTarget.id)) {
      var index = this.state.tri.indexOf(e.currentTarget.id);
      if (index > -1) {
        this.state.tri.splice(index, 1)
      }
    }
    else {
      this.state.tri.push(e.currentTarget.id);
    }
  }
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
          annList.unshift(
                <div className="announcement" id={"announcement" + j} >
                  <span className="announcement-title">
                  <div className={"unread" + (JSON.parse(localStorage.an).includes(annArray[j][0]) ? " readClass" : "")}></div>
                    <button role="button" id={annArray[j][0]} data-toggle="collapse" href={".collapse" + j} aria-expanded="false" aria-controls="collapseExample" onClick={this.buttonClick}>
                      {annArray[j][1]}
                      <span className={"glyphicon glyphicon-chevron-down" + (this.state.tri.includes(annArray[j][0]) ? " flipClass" : " flipdownClass")}></span>
                    </button>
                  </span>
                  <div className={"collapse collapse" + j}>
                    <div className="description">
                      {annArray[j][2]}
                    </div>
                  </div>
                </div>
          );
        }
  }
  return (
    <div className="page">
      <div className="Page-Title">
        Bulletin
      </div>
      <div>
        {annList}
      </div>
    </div>
  );
  }
}


export default Announcements;


