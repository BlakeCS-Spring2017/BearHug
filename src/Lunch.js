import React, { Component } from 'react';
import './Lunch.css';

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
        <div className="lunch-menu">
          {lunList}
        </div>



      </div>
    );
  }
}

export default Lunch;
