import React, { Component } from 'react';
import './Dial.css';
import Timer from './Timer';

class Dial extends Component {
    constructor() {
        super()
        this.rad = 1 * Math.PI;
        this.srad = 1 * Math.PI;
        this.thickness = .75;
        this.sthickness = .5;
        this.gap = .95;
        // thickness and sthickness determine width of arc
        // gap adds distance between the outside and inside circle
    }

    componentWillMount() {
        this.timeLeft = 80;
        this.classTime = 100;
        this.numberOfClasses = 7;
    }

    calculateRadiansOutside() {
        var percent = this.timeLeft / this.classTime;
        this.rad = percent * 2 * Math.PI;
    };

    calculateRadiansInside() {
        var percent = 1 / this.numberOfClasses;
        this.srad = percent * 2 * Math.PI;
    };

    render() {

        this.calculateRadiansOutside()
        this.calculateRadiansInside()

        var point1x = 0;
        var point1y = -1;
        var point2x = Math.sin(this.rad);
        var point2y = -Math.cos(this.rad);
        var point3x = Math.sin(this.rad) * this.thickness;
        var point3y = -Math.cos(this.rad) * this.thickness;
        var point4x = 0;
        var point4y = -this.thickness;
        var orientOut = "1 1";
        var orientIn = "1 0";

        if (this.rad <= Math.PI) {
            orientOut = "0 1";
            orientIn = "0 0";
        }
        // above is for the right side

        // anything with an s in front of it means small aka small circle
        // below is the same as above but for the little circle

        var spoint1x = 0;
        var spoint1y = -this.thickness * this.gap;
        // the starting point of the small arc begins with the final point of the outside circle
        var spoint2x = Math.sin(this.srad) * this.thickness * this.gap;
        var spoint2y = -Math.cos(this.srad) * this.thickness * this.gap;
        var spoint3x = Math.sin(this.srad) * this.sthickness;
        var spoint3y = -Math.cos(this.srad) * this.sthickness; 
        var spoint4x = 0;
        var spoint4y = -this.sthickness;
        var sorientOut = "1 1";
        var sorientIn = "1 0";

        if (this.srad <= Math.PI) {
            sorientOut = "0 1";
            sorientIn = "0 0";
        }
        // above is for the right side

        var arcPath = "M "+point1x+" "+point1y+" A 1 1, 0, "+orientOut+" "+point2x+" "+point2y+" L "+point3x+" "+point3y+" A" +this.thickness+ +this.thickness+ ", 0, "+orientIn+" "+point4x+" "+point4y+ " Z";
        // above is the path for the outside dial circle

        var littlePath = "M "+spoint1x+" "+spoint1y+" A" +this.thickness * this.gap+ +this.thickness * this.gap+ ", 0, "+sorientOut+" "+spoint2x+" "+spoint2y+" L "+spoint3x+" "+spoint3y+" A" +this.sthickness+ +this.sthickness+ ", 0, "+sorientIn+" "+spoint4x+" "+spoint4y+ " Z";
        // above is the path for the inside circle
    return (

    <div>
      
        <svg id="outsideDial" viewBox="-1 -1 2 2">
        // viewbox makes the graph with sin and cos possible
            <path id="arc" d={arcPath}/>
        </svg>

        <svg id="insideDial" viewBox="-1 -1 2 2">
        // viewbox makes the graph with sin and cos possible
            <path id="arc" d={littlePath}/>
        </svg>


        <div id="timerBox">
            <Timer id="timer" initialTime={3600}/>
        </div>

    </div>

    );
  } 

   

}


export default Dial;
 
        
           