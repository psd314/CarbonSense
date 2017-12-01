import React, { Component } from "react";
import DashboardGraph from "../../components/DashboardGraph/DashboardGraph.jsx";
import "./dashboard.css";


class Dashboard extends Component {
state = {
		currentScore: 0
	}

componentDidMount() {
		this.loadScore();
	}

loadScore = () => {	
	axios.get("")
			.then(res => {
				this.setState({ currentScore: res.data })
				console.log(currentScore)
			})
			.catch(err => console.log(err));
		}

	render() {
		return(
			<div className="Container" >
				<div className="col-8">
					<div className="Head">
						<h1>Dashboard</h1>
						<h4>Let's see how you've been being green!</h4>
					</div>
				</div>
				<div>
					
				</div>
					<div className="row">
						<div className="col-6 question-col">

							<div className="form-group">
							<h1 className="questions">Transportation</h1>						  
							    <select className="form-control">
									<option value="1">100% Walk/Bike/Public Transit</option>
							    <option value="5">50% Walk/Bike/Public Transit</option>
							    <option value="10">Carpool/Public Transit Only</option>
							    <option value="15">Walk/Bike Only</option>
							  	</select>								
							</div>

							<div className="form-group">
							<h1 className="questions">Eating</h1>							  
							    <select className="form-control">
										<option value="1">I ate only Vegan/Vegetarian from local organic farms</option>
										<option value="5">I ate some meat, but everything was local and organic</option>
										<option value="10">I had some organic or local option but mixed with some processed foods</option>
										<option value="15">I indulged in fast food and it was great!</option>
							  	</select>
															 
							<div className="form-group">
							<h1 className="questions">Thermostat</h1>
							    <select className="form-control">
									<option value="1">Above 72 in Summer/Below 68 in Winter</option>
							    <option value="5">Above 70 in Summer/Below 70 in Winter</option>
							    <option value="10">Above 68 in Summer/Below 72 in Winter</option>
							    <option value="15">Below 68 in Summer/Above 72 in Winter</option>
							  	</select>
								
							</div>
							<h1 className="questions">Grocery Shopping</h1>
							<div className="form-group">
							    <select className="form-control">
									<option value="1">Brought My Own Bags</option>
							    <option value="5">Used Paper Bags</option>
							    <option value="10">Used Plastic Bags</option>
							    <option value="15">Had my Groceries Delivered </option>
							  	</select>							
							</div>

							<div className="form-group">
							<h1 className="questions">Groceries</h1>
							    <select className="form-control">
										<option value="1">All Fresh meat and Produce</option>
										<option value="5">50% PrePackaged</option>
										<option value="10">100% PrePackaged</option>
										<option value="15">No Groceries - I only eat out</option>
							  	</select>
							</div>

							
							<div className="form-group">	
							<h1 className="questions">Bathing</h1>						  
							    <select className="form-control">
									<option value="1">5 Mins or Less/Cold to Warm</option>
							    <option value="5">5 - 10 Mins/Hot</option>
							    <option value="10">10+ Mins/Hot</option>
									</select>							 
							</div>
						
							<div className="form-group">
							<h1 className="questions">Device Charging</h1>							  
							    <select className="form-control">
									<option value="1">Chargers unplugged when not in use</option>
							    <option value="5">Chargers left plugged into wall always</option>
							    <option value="10">Charge items even if they are not dead</option>
							    <option value="15">If I'm not using it, I'm charging it</option>
							  	</select>						
							</div>

						
							<div className="form-group">
							<h1 className="questions">Energy Conservation</h1>
							    <select className="form-control">
									<option value="Only lights and appliances in use are turned on">Only lights and appliances in use are turned on</option>
							    <option value="Lights and appliances on timers">Lights and appliances on timers</option>
							    <option value="Some lights and appliances left on for safety">Some lights and appliances left on for 	safety
										</option>
							    <option value="Lights and appliances are always on all over">Lights and appliances are always on all over</option>
									</select>
							
							</div>
							
							<div className="form-group">
							<h1 className="questions">Recycling</h1>				  
							    <select className="form-control">
									<option value="1">Recycle/reuse everything that can be</option>
							    <option value="5">Recycle everything, but don't reuse</option>
							    <option value="10">Recycle paper and plastic only</option>
							    <option value="15">I do not recycle...ever</option>
							  	</select>							
							</div>
					
							<div className="form-group">
							<h1 className="questions">Last one</h1>							  
							    <select className="form-control">
									<option value="1">100% Walk/Bike/Public Transit</option>
							    <option value="5">50% Walk/Bike/Public Transit</option>
							    <option value="10">Carpool/Public Transit Only</option>
							    <option value="15">Something else here</option>
							  	</select>						
							</div>

							</div>
  						</div>
  					<div>
						<DashboardGraph/>
					</div>


					</div>
			
				
			</div>		
		);
	}
}

export default Dashboard;