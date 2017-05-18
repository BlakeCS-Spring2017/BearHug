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
          var currentAnnouncement = this.props.annTotal[keys[i]]
          var time = new Date();
          var expireDate = new Date(currentAnnouncement[3]);
          if (expireDate >= time) {
            annArray.push(this.props.annTotal[keys[i]]);
          }
        }
        var annList = [];
        for (var j = 0; j < annArray.length; ++j) {
          var annText = annArray[j][2]
          // annText = annText.replace(/ _^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}-\x{ffff}0-9]+-?)*[a-z\x{00a1}-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}-\x{ffff}0-9]+-?)*[a-z\x{00a1}-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}-\x{ffff}]{2,})))(?::\d{2,5})?(?:/[^\s]*)?$_iuS/g, )
          annList.unshift(
                <div className="announcement" id={"announcement" + j} >
                  <button id="buttonsizing" role="button" id={annArray[j][0]} data-toggle="collapse" href={".collapse" + j} aria-expanded="false" aria-controls="collapseExample" onClick={this.buttonClick}>
                  <div id="sizing" className="announcement-title">
                  <div className={"unread" + (JSON.parse(localStorage.an).includes(annArray[j][0]) ? " readClass" : "")}></div>
                      {annArray[j][1]}
                  </div>
                  <div id="sizing2" className={"glyphicon glyphicon-chevron-down" + (this.state.tri.includes(annArray[j][0]) ? " flipClass" : " flipdownClass")}></div>
                  </button>
                  <div className={"collapse collapse" + j}>
                    <div className="description">
                      {annText}
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


