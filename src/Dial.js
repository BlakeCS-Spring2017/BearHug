import React, { Component } from 'react';
import './Dial.css';
import Timer from './Timer';

class Dial extends Component {
    constructor() {
        super()
        this.rad = 1 * Math.PI;
        this.srad = 1 * Math.PI;
        this.thickness = .75;
        this.sthickness = .35;
        this.gap = .95;
        // thickness and sthickness determine width of arc
        // gap adds distance between the outside and inside circle
         this.state = {
            timeLeft : 0,
            classTime : 3600,
            currentTime : "100",
        };
    };

    componentWillMount() {
        this.moveDial = this.moveDial.bind(this);
        this.calculateRadiansOutside = this.calculateRadiansOutside.bind(this);
        this.intervalID = setInterval(this.moveDial, 1);
        this.numberOfClasses = 7;
    };

    componentWillUnmount() {
        clearInterval(this.intervalID);
    };

    moveDial() {
        var newState = this.state.timeLeft
        if (this.state.timeLeft > 3599 && this.state.timeLeft < 3601) {
            this.setState({timeLeft : 0});
            newState = 0;
        };

        newState += 0.05
        this.setState({timeLeft: newState, classTime: 3600});
        this.setCurrentTime();

    };

    calculateRadiansOutside() {
        var percent = this.state.timeLeft / this.state.classTime;
        this.rad = percent * 2 * Math.PI;
    };

    percentToRadians(percent) {
        this.radians = percent * 2 * Math.PI;
        return this.radians;
    };

    setCurrentTime() {
        var time = new Date();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        if (hour < 10) {
            hour = "0" + hour
        }
        if (hour > 12) {
            hour -= 12
        }
        if (minute < 10) {
            minute = "0" + minute
        }
         if (second < 10) {
            second = "0" + second
        }

        var now = hour + ":"+ minute + ":"+ second;
        this.setState({currentTime : now})
        console.log(now);

    }

    render() {

        var wedgeRadians = this.percentToRadians(1 / this.numberOfClasses);
        var currentStartRadians = 0;
        var wedgeArray = [];

        for (var i = 0; i < this.numberOfClasses; i++) {
            var ipoint1x = Math.sin(currentStartRadians) * this.thickness * this.gap;
            var ipoint1y = -Math.cos(currentStartRadians) * this.thickness * this.gap;
            var ipoint2x = Math.sin(currentStartRadians + wedgeRadians) * this.thickness * this.gap;
            var ipoint2y = -Math.cos(currentStartRadians + wedgeRadians) * this.thickness * this.gap;
            var ipoint3x = Math.sin(currentStartRadians + wedgeRadians) * this.sthickness;
            var ipoint3y = -Math.cos(currentStartRadians + wedgeRadians) * this.sthickness; 
            var ipoint4x = Math.sin(currentStartRadians) * this.sthickness;
            var ipoint4y = -Math.cos(currentStartRadians) * this.sthickness; 
            var iorientOut = "1 1";
            var iorientIn = "1 0";

            if (wedgeRadians <= Math.PI) {
                iorientOut = "0 1";
                iorientIn = "0 0";
            }

            var littlePath = "M "+ipoint1x+" "+ipoint1y+" A" +this.thickness * this.gap+ +this.thickness * this.gap+ ", 0, "+iorientOut+" "+ipoint2x+" "+ipoint2y+" L "+ipoint3x+" "+ipoint3y+" A" +this.sthickness+ +this.sthickness+ ", 0, "+iorientIn+" "+ipoint4x+" "+ipoint4y+ " Z";
            
            currentStartRadians += wedgeRadians

            wedgeArray.push(
                <path id={"littlePath" + i} d={littlePath}/>
            );
        }

        this.calculateRadiansOutside()
       

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

        var arcPath = "M "+point1x+" "+point1y+" A 1 1, 0, "+orientOut+" "+point2x+" "+point2y+" L "+point3x+" "+point3y+" A" +this.thickness+ +this.thickness+ ", 0, "+orientIn+" "+point4x+" "+point4y+ " Z";
        // above is the path for the outside dial circle

       
    return (

    <div>
      
        <svg id="outsideDial" viewBox="-1 -1 2 2">
        // viewbox makes the graph with sin and cos possible
            <path id="arc" d={arcPath}/>
            {wedgeArray}
        </svg>

        <div id="time">
            {this.state.currentTime}
        </div>

    </div>

    );
  } 

   

}


export default Dial;
 
        
           