import React, { Component } from 'react';
import './Lunch.css';

class Lunch extends Component {
  render() {
    if (this.props.Luntotal != null){
    function ObjectLength(object) {
      var length = 0;
      for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
          ++length;
        }
      }
      return length;
    };
    var num = ObjectLength(this.props.Luntotal);
    var things = [];
    var keys = Object.keys(this.props.Luntotal);
    for (var i = 0; i < num; i++) {
      things.push(this.props.Luntotal[keys[i]]);
    }   
    var array = [];
    for (var i=0; i < num; ++i) {
      array.push(
      <div>
        {things[i]}
      </div>
      );
    }
  }
    return (
      <div>
        <div className="page-title">
          Lunch
        </div>
        <div className="lunch-menu">
          {array}
        </div>
      </div>
    );
  }
}

export default Lunch;
