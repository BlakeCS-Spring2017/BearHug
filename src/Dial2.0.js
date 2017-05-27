import React, { Component } from 'react';
import './Dial.css';
import moment from 'moment';

class Dial extends Component {
	constructor() {
		super();
		// dial conditions : thickness and gap 

		this.state {
			daySchedule: undefined,

		}	
	}

	componentWillMount() {
		// load special schedules
		var specialSchedules;

		// get date
		var now = moment();
		now.format("YYYY-MM-DD");
		// if special schedule, load it:
		var JSONSchedule;
		var nowDay = now.format("dddd");
		// dddd gives the day in Monday, Tuesday, Wednesday format

		if (specialSchedules[now]) {
			JSONSchedule = specialSchedules[now];
		}

		// otherwise, get day of week, load that schedule:
		else if (nowDay != "Sunday" && nowDay != "Saturday") {
			JSONSchedule = this.{nowDay};
			// and then put in this.Monday etc
		}
		else {
			//dial = no school
		}

		for (var i = 0; i < JSONSchedule.length; i++) {
			var startMoment = moment();
			// somehow set that moment to the start time of the class
			// JSONSchedule[i].start
			var endMoment = moment();
			// JSONSchedule[i].end 

			if (JSONSchedule[i].number) {
				daySchedule.push(
					{displayText: {"Block" + JSONSchedule[i].number}, }
				)
			}
		// this.state.daySchedule.append
		// somehow append the classes that are needed onto daySchedule 
		}



	}

	componentWillUnmount() {
		
	}

	render() {

		// outer dial
			// get current time
			var currentTime = moment();
			// which block are we in
			moment().diff 
			// between start of first class and current time 

			if (timeDiff < 0 ) {
				//run dial until school
			}
			else if (timeDiff >= 0){
				//what block is it?
			}

				//before school
				//passing time
					//caculate % of time remaining
					// render 1-time
				// in a block
					// caculate % of time ... render
				// outside of school
					//render "no school"
		//inner dial
			// get number of blocks (taking lunch into account)
			// for each block 
				//render to screen


		// if no school --> dial = no school image (bear paw or something)

		return(

			//dial --> make something called dial that is returned no matter what the schedule is

		);

	}


}

export default Dial2.0;