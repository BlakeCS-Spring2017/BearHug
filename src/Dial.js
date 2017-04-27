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
            classTime : 3900,
            currentDisplay : "100",
            currentTimeInSeconds: 100,
            end: "9:50am",
            currentEndMilli: 100,
        };
    };


    componentWillMount() {
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.calculateRadiansOutside = this.calculateRadiansOutside.bind(this);
        this.intervalID = setInterval(this.setCurrentTime, 33);
        this.numberOfClasses = 7;
    };

    componentWillUnmount() {
        clearInterval(this.intervalID);
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
        var Nhours = time.getHours();
        var Nminutes = time.getMinutes();
        var Nseconds = time.getSeconds();

        Nminutes = Nminutes + (Nhours * 60);
        Nseconds = Nseconds + (Nminutes * 60);
    

        var ending = this.state.end;
        var dayHalf = ending.slice(ending.length - 2, ending.length);
        var ending = ending.slice(0, ending.length - 2);
        var pos = ending.indexOf(":");
        var endHours = ending.slice(0, pos);

        var endMinutes = ending.slice(pos + 1,ending.length);

        endHours = parseInt(endHours);
        endMinutes = parseInt(endMinutes);

            if (dayHalf === "pm" && endHours != 12 ) {
            endHours += 12
        }

        if (dayHalf === "am" && endHours === 12) {
            endHours = 0
        }

        endMinutes += endHours * 60;
        var endSeconds = endMinutes * 60;
        var endMilliseconds = endSeconds * 1000;

        var CT = this.state.classTime;
        var TL = endSeconds - Nseconds;
        this.setState({timeLeft : CT - TL})

        this.setState({currentEndMilli : endMilliseconds});

        this.subtractTwoTimes();
        this.setCurrentTimeInMilli();

        
        
    };


    setCurrentTimeInMilli() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var milliseconds = currentTime.getMilliseconds();
        minutes += hours * 60;
        seconds += minutes * 60;
        milliseconds += seconds * 1000;


        this.setState({currentTimeInMilli : milliseconds});

    };

    subtractTwoTimes() {
        var r = this.state.currentEndMilli - this.state.currentTimeInMilli;
        var rnSeconds = Math.floor(r / 1000);
        var rnMinutes = Math.floor(rnSeconds / 60);
        rnSeconds = rnSeconds % 60;
        var rnHours = Math.floor(rnMinutes / 60);
        rnMinutes = rnMinutes % 60;

        //  if (rnHours < 10) {
        //     rnHours = "0" + rnHours
        // }
        // if (rnHours > 12) {
        //     rnHours -= 12
        // }
        if (rnMinutes < 10) {
            rnMinutes = "0" + rnMinutes
        }
         if (rnSeconds < 10) {
            rnSeconds = "0" + rnSeconds
        }

        var rn = rnMinutes + ":"+ rnSeconds;


        this.setState({currentDisplay : rn}); 
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
    <div>

        <div id="currentBlockName">
            <p id="now"> Now: 
            <span id="block2"> Block 2 </span> 
            </p>
        </div>


        <svg id="dial" viewBox="-1 -1 2 2">
        // viewbox makes the graph with sin and cos possible
            
            <path id="arc" d={arcPath} />
            {wedgeArray}
            <text class="goodFont" x=".22" y="-.37" fontSize=".3px" textAnchor="middle" fill="white" > 
                2
            </text>

            <text class="goodFont" x=".5 " y="-.08" fontSize=".1px" textAnchor="middle" fill="white"> 
                Assem
            </text>

            <text class="goodFont" x=".4" y=".45" fontSize=".3px" textAnchor="middle" fill="white"> 
                1
            </text>

            <text class="goodFont" x="0" y=".63" fontSize=".3px" textAnchor="middle" fill="white"> 
                3
            </text>

            <text class="goodFont" x="-.42" y=".35" fontSize=".1px" textAnchor="middle" fill="white"> 
                Lunch
            </text>

            <text class="goodFont" x="-.52" y="0" fontSize=".3px" textAnchor="middle" fill="white"> 
                6
            </text>

            <text class="goodFont" x="-.22" y="-.35" fontSize=".3px" textAnchor="middle" fill="white"> 
                7
            </text>

        </svg>

        <div id="time">
            {this.state.currentDisplay}
        </div>

        <div id="nowNext">
            <p id="now"> </p>
            <p id="classNow"> </p>
            <p id="next">  </p>
            <p id="classNext"> </p>

        </div>

        <div>
            <p id="nextBlockName"> Next: Assembly </p>
        </div>

    </div>

</div>

    );
  }; 

};


export default Dial;
 
        
           