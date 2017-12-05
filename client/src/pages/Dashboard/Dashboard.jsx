import React, { Component } from "react";
import DashboardGraph from "../../components/DashboardGraph/DashboardGraph.jsx";
import "./dashboard.css";
import axios from "axios";


class Dashboard extends Component {
state = {
		currentScore: 0
	}

 componentWillMount() {
  		this.loadScore();
  	}
 
 
  loadScore = () => {	
  	axios.get("/currentScore")
  			.then(res => {
  				this.setState({ currentScore: res.data.score })
  				console.log('on load:', this.state);
  			})
  			.catch(err => console.log(err));
  		}

	handleOnClick = (event) => {
		event.preventDefault();
		const scoreArray = [
			parseInt(document.getElementById('quest1').value),
			parseInt(document.getElementById('quest2').value),
			parseInt(document.getElementById('quest3').value),
			parseInt(document.getElementById('quest4').value),
			parseInt(document.getElementById('quest5').value),
			parseInt(document.getElementById('quest6').value),
			parseInt(document.getElementById('quest7').value),
			parseInt(document.getElementById('quest8').value),
			parseInt(document.getElementById('quest9').value),
			parseInt(document.getElementById('quest10').value) 
		]
		//sum and grab the values from the questions 
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		let newScore = (scoreArray.reduce(reducer));
		console.log(newScore); 

		axios
			.post('/addpoints', {score: newScore})
			.then(res => {
  				this.setState({ currentScore: res.data.score })
  				console.log('on click:', this.state);
  			})
  			.catch(err => console.log(err));
	}

	render() {
		return(
			<div className="Container" style={{marginBottom:250}}>
				<div className="col-8">
					<div className="Head">
						<h1>Dashboard</h1>
						<h4>Let's see how you've been being green!</h4>
					</div>
				</div>
				<div>
					
				</div>
					<div className="row">
						<div className="col-4 offset-1 question-col">
														

							<div className="form-group">
							<h1 className="questions">Transportation</h1>						  
							    <select className="form-control" id="quest1">
									<option value="1">100% Walk/Bike/Public Transit</option>
							    <option value="5">50% Walk/Bike/Public Transit</option>
							    <option value="10">Carpool/Public Transit Only</option>
							    <option value="15">Walk/Bike Only</option>
							  	</select>								
							</div>

							<div className="form-group">
							<h1 className="questions">Eating</h1>							  
							    <select className="form-control" id='quest2'>
										<option value="1">I ate only Vegan/Vegetarian from local organic farms</option>
										<option value="5">I ate some meat, but everything was local and organic</option>
										<option value="10">I had some organic or local option but mixed with some processed foods</option>
										<option value="15">I indulged in fast food and it was great!</option>
							  	</select>
															 
							<div className="form-group">
							<h1 className="questions">Thermostat</h1>
							    <select className="form-control" id='quest3'>
									<option value="1">Above 72 in Summer/Below 68 in Winter</option>
							    <option value="5">Above 70 in Summer/Below 70 in Winter</option>
							    <option value="10">Above 68 in Summer/Below 72 in Winter</option>
							    <option value="15">Below 68 in Summer/Above 72 in Winter</option>
							  	</select>
								
							</div>
							<h1 className="questions">Grocery Shopping</h1>
							<div className="form-group">
							    <select className="form-control" id='quest4'>
									<option value="1">Brought My Own Bags</option>
							    <option value="5">Used Paper Bags</option>
							    <option value="10">Used Plastic Bags</option>
							    <option value="15">Had my Groceries Delivered </option>
							  	</select>							
							</div>

							<div className="form-group">
							<h1 className="questions">Groceries</h1>
							    <select className="form-control" id='quest5'>
										<option value="1">All Fresh meat and Produce</option>
										<option value="5">50% PrePackaged</option>
										<option value="10">100% PrePackaged</option>
										<option value="15">No Groceries - I only eat out</option>
							  	</select>
							</div>

							
							<div className="form-group">	
							<h1 className="questions">Bathing</h1>						  
							    <select className="form-control" id='quest6'>
									<option value="1">5 Mins or Less/Cold to Warm</option>
							    <option value="5">5 - 10 Mins/Hot</option>
							    <option value="10">10+ Mins/Hot</option>
									</select>							 
							</div>
						
							<div className="form-group">
							<h1 className="questions">Device Charging</h1>							  
							    <select className="form-control" id='quest7'>
									<option value="1">Chargers unplugged when not in use</option>
							    <option value="5">Chargers left plugged into wall always</option>
							    <option value="10">Charge items even if they are not dead</option>
							    <option value="15">If I'm not using it, I'm charging it</option>
							  	</select>						
							</div>

						
							<div className="form-group">
							<h1 className="questions">Energy Conservation</h1>
							    <select className="form-control" id='quest8'>
									<option value="1">Only lights and appliances in use are turned on</option>
							    <option value="5">Lights and appliances on timers</option>
							    <option value="10">Some lights and appliances left on for 	safety
										</option>
							    <option value="15">Lights and appliances are always on all over</option>
									</select>
							
							</div>
							
							<div className="form-group">
							<h1 className="questions">Recycling</h1>				  
							    <select className="form-control" id='quest9'>
									<option value="1">Recycle/reuse everything that can be</option>
							    <option value="5">Recycle everything, but don't reuse</option>
							    <option value="10">Recycle paper and plastic only</option>
							    <option value="15">I do not recycle...ever</option>
							  	</select>							
							</div>
					
							<div className="form-group">
							<h1 className="questions">Last one</h1>							  
							    <select className="form-control" id='quest10'>
									<option value="1">100% Walk/Bike/Public Transit</option>
							    <option value="5">50% Walk/Bike/Public Transit</option>
							    <option value="10">Carpool/Public Transit Only</option>
							    <option value="15">Something else here</option>
							  	</select>						
							</div>
								<button 
									type="button" 
									className="btn btn-success btn3"
									onClick={this.handleOnClick}>SUBMIT...</button>
								<h3 className="btn-caption">to see what percentage of your daily carbon you have used today!</h3>

							</div>
  						</div>
  					<div>
  						
						<DashboardGraph value={this.state.currentScore}/>

					</div>
				</div>
			</div>		
		);
	}
}

export default Dashboard;