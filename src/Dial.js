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
            end: "1:00pm",
            currentEndMilli: 100,
            numberOfClasses: 7,
            currentBlock: 1,
            nextBlock: 1,
        };

        this.monday = [
        	{"duration":45, "end":"8:55am", "number":1, "start":"8:10am"},
        	{"duration":45, "end":"9:45am", "number":2, "start":"9:00am"},
        	{"duration":30, "end":"10:15am", "number":"Tut", "start":"9:45am"},
        	{"duration":45, "end":"11:05am", "number":3, "start":"10:20am"},
        	{"duration":45, "end":"12:30pm", "number":4, "start":"11:10am"},
        	{"duration":45, "end":"12:35", "number":5, "start":"1:20pm"},
        	{"duration":45, "end":"2:10pm", "number":6, "start":"1:25pm"},
        	{"duration":45, "end":"3:00pm", "number":7, "start":"2:15pm"}
        ];
        this.tuesday = [
        	{"duration":65, "end":"9:05am", "number":1, "start":"8:00am"},
        	{"duration":40, "end":"9:50am", "number":"Asmb", "start":"9:10am"},
        	{"duration":65, "end":"11:00am", "number":4, "start":"9:55am"},
        	{"duration":95, "end":"12:40pm", "number":5, "start":"11:05am"},
        	{"duration":65, "end":"1:50pm", "number":7, "start":"12:45pm"},
        	{"duration":65, "end":"3:00pm", "number":6, "start":"1:55pm"},
        ];
        this.wednesday = [
        	{"duration":65, "end":"9:35am", "number":3, "start":"8:30am"},
        	{"duration":35, "end":"10:15am", "number":"Adv.", "start":"9:40am"},
        	{"duration":65, "end":"11:25am", "number":2, "start":"10:20am"},
        	{"duration":100, "end":"1:10pm", "number":4, "start":"11:30am"},
        	{"duration":65, "end":"1:50pm", "number":"TASC", "start":"1:15pm"},
        	{"duration":65, "end":"3:00pm", "number":5, "start":"1:55pm"},

        ];
        this.thursday = [
        	{"duration":65, "end":"9:05am", "number":2, "start":"8:00am"},
        	{"duration":40, "end":"9:50am", "number":"Asmb", "start":"9:10am"},
        	{"duration":65, "end":"11:00am", "number":1, "start":"9:55am"},
        	{"duration":95, "end":"12:40pm", "number":3, "start":"11:05am"},
        	{"duration":65, "end":"1:50pm", "number":6, "start":"12:45pm"},
        	{"duration":65, "end":"3:00pm", "number":7, "start":"1:55pm"},
        ];
        this.friday = [
        	{"duration":45, "end":"9:25am", "number":2, "start":"8:30am"}, 
        	{"duration":45, "end":"10:15am", "number":1, "start":"9:30am"},
        	{"duration":45, "end":"11:05am", "number":3, "start":"10:20am"},
        	{"duration":80, "end":"12:30pm", "number":4, "start":"11:10am"},
        	{"duration":45, "end":"1:20pm", "number":5, "start":"12:35pm"},
        	{"duration":45, "end":"2:10pm", "number":7, "start":"1:25pm"},
        	{"duration":45, "end":"3:00pm", "number":6, "start":"2:15pm"}
    	]; 
    	this.week = [this.monday, this.tuesday, this.wednesday, this.thursday, this.friday];
    	this.noSchool;
    };


    componentWillMount() {
        this.runDial = this.runDial.bind(this);
        this.calculateRadiansOutside = this.calculateRadiansOutside.bind(this);
        this.intervalID = setInterval(this.runDial, 33);
        this.state.numberOfClasses = 7;
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

    returnSecondsOf(timeString) {
    	var ending = timeString;
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

        return endSeconds
    }

    runDial() {
    	var time = new Date(); 
        var Nhours = time.getHours();
        var Nminutes = time.getMinutes();
        var Nseconds = time.getSeconds();

        Nminutes = Nminutes + (Nhours * 60);
        Nseconds = Nseconds + (Nminutes * 60);

    	var currentDay;
    	var dayOfWeek = time.getDay();
    	dayOfWeek -= 1;
    	if (dayOfWeek > 4) {
    		currentDay = this.noSchool;
    	}
    	else {
    		currentDay = this.week[dayOfWeek];	
    	}

    	for (var i = 0; i < currentDay.length; i++) {
    		var currentBlock = currentDay[i];
			var timeString = currentBlock["end"];
			var blockNow = "Block "+currentBlock["number"];
			var blockNext;
			var durationTime = currentBlock["duration"]*60;
			if (i+1 < currentDay.length) {
				blockNext = "Block "+currentDay[i+1]["number"];
			}
			else {
				blockNext = "nothing"
			}
			var timeEnd = this.returnSecondsOf(timeString);
			if (timeEnd > Nseconds) {
				this.state.end = timeString
				break
			}
    	};






    	//



        var endSeconds = this.returnSecondsOf(this.state.end);
        var endMilliseconds = endSeconds * 1000
        var CT = this.state.classTime;
        var TL = endSeconds - Nseconds;
        var updateTimeLeft;
        if (TL > CT) {
        	CT = 5*60
        	TL = TL-CT
        }
        this.setState({timeLeft : CT - TL, 
        	numberOfClasses: 
        	currentDay.length, 
        	currentBlock: blockNow, 
        	nextBlock: blockNext, 
        	classTime: durationTime,
        	currentEndMilli : endMilliseconds
        })





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

        var wedgeRadians = this.percentToRadians(1 / this.state.numberOfClasses);
        var currentStartRadians = 0;
        var wedgeArray = [];

        for (var i = 0; i < this.state.numberOfClasses; i++) {
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
                <path id={"littlePath" + i} d={littlePath}>

                </path>
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
    <div id="wholeDial">

        <div id="currentBlockName">
            <p id="now"> Now: 
            <span id="block2"> {this.state.currentBlock} </span> 
            </p>
        </div>


        <svg id="dial" viewBox="-1 -1 2 2">
        // viewbox makes the graph with sin and cos possible
            
            <path id="arc" d={arcPath} />

            {wedgeArray}

            <text className="goodFont" x=".22" y="-.37" fontSize=".3px" textAnchor="middle" fill="white"> 
                2
            </text>

            <text className="goodFont" x=".5 " y="-.08" fontSize=".1px" textAnchor="middle" fill="white"> 
                Assem
            </text>

            <text className="goodFont" x=".4" y=".45" fontSize=".3px" textAnchor="middle" fill="white"> 
                1
            </text>

            <text className="goodFont" x="0" y=".63" fontSize=".3px" textAnchor="middle" fill="white"> 
                3
            </text>

            <text className="goodFont" x="-.42" y=".35" fontSize=".1px" textAnchor="middle" fill="white"> 
                Lunch
            </text>

            <text className="goodFont" x="-.52" y="0" fontSize=".3px" textAnchor="middle" fill="white"> 
                6
            </text>

            <text className="goodFont" x="-.22" y="-.35" fontSize=".3px" textAnchor="middle" fill="white"> 
                7
            </text>
            
            <text className="time" x="-.23" y=".07" fontSize="0.2px" fill="white">
                {this.state.currentDisplay}
            </text>
        
        </svg>

       

        <div id="nowNext">
            <p id="now"> </p>
            <p id="classNow"> </p>
            <p id="next">  </p>
            <p id="classNext"> </p>

        </div>

        <div>
            <p id="next"> Next: 
            <span id="nextBlockName"> {this.state.nextBlock} </span>
            </p>
        </div>

    </div>

</div>

    );
  }; 

};




var special = {"2017-02-15":[

{"duration":65,"end":"9:35am","number":3,"start":"8:30am"},
{"duration":35,"end":"10:15am","name":"Lip Sync Battle","start":"9:40am"},
{"duration":65,"end":"11:25am","number":2,"start":"10:20am"},
{"duration":65,"end":"12:35pm","lunch":2,"number":4,"start":"11:30am"},
{"duration":30,"end":"12:00pm","lunch":1,"name":"First Lunch","start":"11:30am"},
{"duration":65,"end":"1:10pm","lunch":1,"number":4,"start":"12:05pm"},
{"duration":30,"end":"1:10pm","lunch":2,"name":"Second Lunch","start":"12:40pm"},
{"duration":35,"end":"1:50pm","name":"TASC","start":"1:15pm"},
{"duration":65,"end":"3:00pm","number":5,"start":"1:55pm"}

]}


export default Dial;
 
        
           