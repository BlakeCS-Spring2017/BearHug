import React, { Component } from 'react';
import './Dial.css';
import Timer from './Timer';

class Dial extends Component {
    constructor() {
        super()
        this.rad=1*Math.PI
    }
    componentWillMount() {
        this.timeLeft=50
        this.classTime=120
    }

     calculateRadians() {
        var percent=this.timeLeft/this.classTime
        this.rad=percent*2*Math.PI
    };

  render() {

        this.calculateRadians()

        var point1x=0
        var point1y=-1
        var point2x=Math.sin(this.rad)
        var point2y=-Math.cos(this.rad)
        var point3x=Math.sin(this.rad)*.8
        var point3y=-Math.cos(this.rad)*.8    
        var point4x=0
        var point4y=-.8
        var orientOut= "1 1"
        var orientIn= "1 0"

            if (this.rad > Math.PI) {
                point2x=Math.sin(this.rad)
                point2y=-Math.cos(this.rad)
                point3x=Math.sin(this.rad)*.8
                point3y=-Math.cos(this.rad)*.8
                orientOut= "1 1"
                orientIn= "1 0"
            }
            // this is the left side
            if (this.rad <= Math.PI) {
                point2x=Math.sin(this.rad)
                point2y=-Math.cos(this.rad)
                point3x=Math.sin(this.rad)*.8
                point3y=-Math.cos(this.rad)*.8
                orientOut= "0 1"
                orientIn= "0 0"
            }
            // this is the right side

         var arcPath ="M "+point1x+" "+point1y+" A 1 1, 0, "+orientOut+" "+point2x+" "+point2y+" L "+point3x+" "+point3y+" A .8 .8, 0, "+orientIn+" "+point4x+" "+point4y+ " Z";
         
    return (

    <div>
      
        <svg id="dialBox" viewBox="-1 -1 2 2">
         <path id="arc" d={arcPath} fill="green"/>
         </svg>


         <div id="timerBox">
         <Timer id="timer" initialTime={3600}/>
         </div>

    </div>
    );
  } 

   

}


export default Dial;
 
        
           