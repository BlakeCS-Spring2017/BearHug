import React, { Component } from 'react';
import './Dial.css';
import moment from 'moment';

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
            currentEndMilli: 100,
            numberOfClasses: 6,
            currentBlock: 1,
            currentWedgeText: "",
            nextBlock: 1,
            nextBlockDisplay: "",
            daySchedule: undefined, 
            passing: false,
            passingTime: 300, // These are slightly redundant but are used so not to confuse classTime and timeLeft
            passingTimeLeft: 0, // ^

        };

        this.test = [
        	{"duration":45, "end":"11:05am", "number":1, "start":"9:20am"},
        	{"duration":45, "end":"11:55am", "number":2, "start":"11:10am"}
        ];
        this.monday = [
        	{"duration":45, "end":"8:55am", "number":1, "start":"8:10am"},
        	{"duration":45, "end":"9:45am", "number":2, "start":"9:00am"},
        	{"duration":30, "end":"10:15am", "name":"Tut", "start":"9:45am"},
        	{"duration":45, "end":"11:05am", "number":3, "start":"10:20am"},
        	{"duration":45, "end":"11:55pm", "number":4, "start":"11:10am"},
            {"duration":35, "end":"12:30pm", "name":"Lunch", "start":"11:55am"},
        	{"duration":45, "end":"12:35", "number":5, "start":"1:20pm"},
        	{"duration":45, "end":"2:10pm", "number":6, "start":"1:25pm"},
        	{"duration":45, "end":"3:00pm", "number":7, "start":"2:15pm"}
        ];
        this.tuesday = [
        	{"duration":65, "end":"9:05am", "number":1, "start":"8:00am"},
        	{"duration":40, "end":"9:50am", "name":"Asmb", "start":"9:10am"},
        	{"duration":65, "end":"11:00am", "number":4, "start":"9:55am"},
        	{"duration":95, "end":"12:10pm", "number":5, "start":"11:05am"},
            {"duration":30, "end":"12:40pm", "name":"Lunch", "start":"12:10am"},
        	{"duration":65, "end":"1:50pm", "number":7, "start":"12:45pm"},
        	{"duration":65, "end":"3:00pm", "number":6, "start":"1:55pm"},
        ];
        this.wednesday = [
            {"duration":65, "end":"9:35am", "number":3, "start":"8:30am"},
            {"duration":35, "end":"10:15am", "name":"Adv", "start":"9:40am"},
            {"duration":65, "end":"11:25am", "number":2, "start":"10:20am"},
            {"duration":65, "end":"12:35pm", "number":4, "start":"11:30am"},
            {"duration":35, "end":"1:10pm", "name":"Second Lunch", "start":"12:40pm"},
            {"duration":35, "end":"1:50pm", "name":"TASC", "start":"1:15pm"},
            {"duration":65, "end":"3:00pm", "number":5, "start":"1:55pm"},

        ];
        this.thursday = [
        	{"duration":65, "end":"9:05am", "number":2, "start":"8:00am"},
        	{"duration":40, "end":"9:50am", "name":"Asmb", "start":"9:10am"},
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
    	this.noSchool = [];
    };


    componentWillMount() {
        this.runDial = this.runDial.bind(this);
        this.calculateRadiansOutside = this.calculateRadiansOutside.bind(this);
        this.intervalID = setInterval(this.runDial, 33);

    };

    componentWillUnmount() {
        clearInterval(this.intervalID);
    };


    calculateRadiansOutside() {
    	var percent;
    	if (this.state.passing === false) {
       		percent = this.state.timeLeft / this.state.classTime;
       	}
       	else {

       		percent = this.state.passingTimeLeft / this.state.passingTime;

       	}
        this.rad = percent * 2 * Math.PI;
    };

    percentToRadians(percent) {
        this.radians = percent * 2 * Math.PI;
        return this.radians;
    };

    returnSecondsOf(timeString) {
    	var ending = timeString;
        if (ending) {
            var dayHalf = ending.slice(ending.length - 2, ending.length);
            ending = ending.slice(0, ending.length - 2);
            var pos = ending.indexOf(":");
            var endHours = ending.slice(0, pos);
            var endMinutes = ending.slice(pos + 1, ending.length);
        }
        else {
            this.state.currentDisplay = "00:00";
        }

        endHours = parseInt(endHours, 10);
        endMinutes = parseInt(endMinutes, 10);

            if (dayHalf === "pm" && endHours !== 12 ) {
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

        Nminutes += (Nhours * 60);
        Nseconds += (Nminutes * 60);

    	var currentDay;
    	var dayOfWeek = time.getDay();
    	dayOfWeek -= 1;
    	// if (dayOfWeek > 4) {
    	// 	currentDay = this.noSchool;
    	// }
    	// else {
    	// 	currentDay = this.week[dayOfWeek];
    	// }

        currentDay = this.wednesday;
        this.state.daySchedule = this.wednesday;

        // this.state.daySchedule = this.week[dayOfWeek]

    for (var i = 0; i < currentDay.length; i++) {
                var currentBlock = currentDay[i];
                var timeString = currentBlock["end"];
                var blockNow;
                var prefix;

                if (currentBlock["number"]) {
                    prefix = "Block ";
                    blockNow = currentBlock["number"];

                }
                else {
                    prefix = currentBlock["name"];
                    blockNow = 0;
                }

                if (blockNow === 0) {
                    this.setState({
                        currentBlock: blockNow, 
                        currentWedgeText: (prefix),

                    })
                }
                else {
                    this.setState({
                        currentBlock: blockNow, 
                        currentWedgeText: (prefix+blockNow),

                    })
                }
                var durationTime = currentBlock["duration"] * 60;


                var blockNext;      
                
                if (currentDay[i+1]) {
                    var nextSlot = currentDay[i+1];

                    if (nextSlot["number"]) {
                        blockNext = nextSlot["number"];
                        prefix = "Block "
                    }
                    else {
                        blockNext = 0
                        prefix = nextSlot["name"];
                    }
                }   
                else{
                    blockNext = 0
                    prefix = "No School"
                }

                if (blockNext === 0) {
                    this.setState({
                        nextBlock: blockNext,
                        nextWedgeText: (prefix)
                    })          
                }
                else{
                    this.setState({
                        nextBlock: blockNext,
                        nextWedgeText: (prefix+blockNext)
                    })
                }
                var timeEnd = this.returnSecondsOf(timeString);
                if (timeEnd > Nseconds) {
                    this.state.end = timeString
                    break
                }

            };




        var endSeconds = this.returnSecondsOf(this.state.end);
        var endMilliseconds = endSeconds * 1000
        var CT = this.state.classTime;
        var TL = endSeconds - Nseconds;


        if (this.state.daySchedule) {
            this.setState(
            	{timeLeft : CT - TL, 
            	numberOfClasses: this.state.daySchedule.length, 
            	currentBlock: blockNow, 
            	nextBlock: blockNext, 
            	classTime: durationTime,
            	currentEndMilli : endMilliseconds,}
            );
        }
        else {
            this.setState(
                {timeLeft : CT - TL,
                numberOfClasses: 7, 
                currentBlock: blockNow, 
                nextBlock: blockNext, 
                classTime: durationTime,
                currentEndMilli : endMilliseconds,}
            );
        }


        if (TL > CT) {
        	var PTL = TL-CT
        	this.setState({passing: true, passingTimeLeft: PTL});
        }
        else {
        	this.setState({passing: false});
        }


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
        rnSeconds %= 60;
        var rnHours = Math.floor(rnMinutes / 60);
        rnMinutes %= 60;

        if (rnMinutes < 10) {
            rnMinutes = "0" + rnMinutes
        }
         if (rnSeconds < 10) {
            rnSeconds = "0" + rnSeconds
        }

        if (rnHours === 0) {
            var rn = rnMinutes + ":"+ rnSeconds;
        }
        else {
            rn = rnHours + ":" + rnMinutes + ":"+ rnSeconds;
        }

        this.setState({currentDisplay : rn}); 
    }

    render() {

        var wedgeRadians = this.percentToRadians(1 / this.state.numberOfClasses);
        var currentStartRadians = 0;
        var wedgeArray = [];
        var textArray = [];

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

            var textRadians = (0.5 * wedgeRadians) + currentStartRadians;
            var textDistance = (this.thickness + this.sthickness) * 0.48;
            var textX = Math.sin(textRadians) * textDistance;
            var textY = -Math.cos(textRadians) * textDistance +.1;
            var wedgeLabel = "";

            if (this.state.daySchedule) {
                if (this.state.daySchedule[i]) {
                    if (this.state.daySchedule[i].number){
                        wedgeLabel = this.state.daySchedule[i].number.toString();
                        
                        textArray.push(
                            <text id={"text" + i} className="goodFont" x={textX} y={textY} fontSize=".02em" textAnchor="middle"> 
                                {wedgeLabel}
                            </text>
                        );  

                        wedgeArray.push(
                            <path className={"block" + this.state.daySchedule[i].number} d={littlePath}>
                            </path>
                         );

                    }
                    if (this.state.daySchedule[i].name) {
                           if (this.state.daySchedule[i].name === "Second Lunch") {
                            wedgeLabel = "2nd"
                                wedgeArray.push(
                                    <path className="lunchColor" d={littlePath}>
                                    </path>
                                );

                            }

                        else{
                            wedgeLabel = this.state.daySchedule[i].name;

                            wedgeArray.push(
                                <path className="nameColor" d={littlePath}>
                                </path>
                            );
                        }
                          textArray.push(
                            <text id={"text" + i} className="goodFont" x={textX} y={textY} fontSize=".01em" textAnchor="middle"> 
                                {wedgeLabel}
                            </text>
                        );  


                    }

                }
              
            } 

            currentStartRadians += wedgeRadians;

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



       
        return (

            <div> 
                <div id="wholeDial">

                    <div id="currentBlockName">
                        <p id="now"> Now: 
                        <span id="nowClass" className={"text" + this.state.currentBlock}> {this.state.currentWedgeText} </span> 
                        </p>
                    </div>


                    <svg id="dial" viewBox="-1 -1 2 2">
                    // viewbox makes the graph with sin and cos possible
                        
                        <path id="arc" className= {"block" + this.state.currentBlock} d={arcPath} />

                        {wedgeArray}

                        {textArray}

                        <text className="time" x="0" y=".07" fontSize="0.2px" textAnchor="middle" fill="white">
                            {this.state.currentDisplay}
                        </text>
                    
                    </svg>

                    <div>
                        <p id="next" > Next: 
                        <span id="nextClass" className={"text" + this.state.nextBlock} > {this.state.nextWedgeText} </span>
                        </p>
                    </div>

                </div>

            </div>

        );

    }; 

};




// var special = {"2017-02-15":[

// {"duration":65,"end":"9:35am","number":3,"start":"8:30am"},
// {"duration":35,"end":"10:15am","name":"Lip Sync Battle","start":"9:40am"},
// {"duration":65,"end":"11:25am","number":2,"start":"10:20am"},
// {"duration":65,"end":"12:35pm","lunch":2,"number":4,"start":"11:30am"},
// {"duration":30,"end":"12:00pm","lunch":1,"name":"First Lunch","start":"11:30am"},
// {"duration":65,"end":"1:10pm","lunch":1,"number":4,"start":"12:05pm"},
// {"duration":30,"end":"1:10pm","lunch":2,"name":"Second Lunch","start":"12:40pm"},
// {"duration":35,"end":"1:50pm","name":"TASC","start":"1:15pm"},
// {"duration":65,"end":"3:00pm","number":5,"start":"1:55pm"}

// ]}


export default Dial;
 
        
           