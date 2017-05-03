import React, { Component } from 'react';
import './Lunch.css';

var colors = ["#3f51b5", "#1565c0", "#00acc1", "#009688", "#43A046", "#7CB341"]
var lunColor = colors[Math.floor(Math.random() * colors.length)];

class Lunch extends Component {
  render() {
    if (this.props.lunTotal != null){
    function objectLength(obj) {
      var lunLen = 0;
      for( var key in obj) {
        if( obj.hasOwnProperty(key) ) {
          ++lunLen;
        }
      }
      return lunLen;
    };
    var lenLun = objectLength(this.props.lunTotal);
    var lunArray = [];
    var keys = Object.keys(this.props.lunTotal);
    for (var i = 0; i < lenLun; i++) {
      lunArray.push(this.props.lunTotal[keys[i]]);
    }   
    var lunList = [];
    for (var j = 0; j < lenLun; ++j) {
      lunList.push(
      <div>
        {lunArray[j]}
      </div>
      );
    }
  }
    return (
      <div>

        <div className="Page-Title">
          Lunch
        </div>
        <div className="lunch-menu" style={{backgroundColor: lunColor}}>
          {lunList}
        </div>
		

      </div>
    );
  }
}


export default Lunch;
