import React, { Component } from 'react';
import './Dial.css';
import Timer from './Timer';

class Dial extends Component {
  render() {
        
         var radians=(Math.PI)/.5
         var point1x=0
         var point1y=-1
         var point2x=Math.cos(radians);
         var point2y=-Math.sin(radians)
         var point3x=Math.cos(radians)*.8
         var point3y=-Math.sin(radians)*.8
         var point4x=0
         var point4y=-.8

         var arcPath ="M "+point1x+" "+point1y+" A 1 1, 0, 0 1, " +point2x+" "+point2y+" L "+point3x+" "+point3y+" A .8 .8, 0, 0 0, "+point4x+" "+point4y+ " Z";
         
    return (

    <div>
      
        <svg width="400" height="400" viewBox="-1 -1 2 2">
         <path id="arc" d={arcPath} fill="green"/>
         </svg>


         <div id="timerBox">
         <Timer id="timer" initialTime={3600}/>
         </div>

    </div>
    );
  }
}

var timeLeft= 100
var classTime= 120
calculateRadians() {
return(
timeLeft/classTime*2*Math.PI
)
}

export default Dial;
 

        
           