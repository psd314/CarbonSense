import React, { Component } from "react";
import DashboardGraph from "../../components/DashboardGraph/DashboardGraph.jsx";
import "./dashboard.css";
class Dashboard extends Component {

	render() {
		return(
			<div className="Container">
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
							<h1 className="questions">Transportation</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="100% Walk/Bike/Public Transit">100% Walk/Bike/Public Transit</a>
							    <a className="dropdown-item" href="50% Walk/Bike/Public Transit">50% Walk/Bike/Public Transit</a>
							    <a className="dropdown-item" href="Carpool/Public Transit Only">Carpool/Public Transit Only</a>
							    <a className="dropdown-item" href="Walk/Bike Only">Walk/Bike Only</a>
							  </div>
							</div>
							<h1 className="questions">Eating</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Vegetarian/Vegan-Local/Humane-Non-Processed">Vegetarian/Vegan-Local/Humane-Non-Processed</a>
							    <a className="dropdown-item" href="Omnivore-Local/Humane-Non-Processed">Omnivore-Local/Humane-Non-Processed</a>
							    <a className="dropdown-item" href="Vegetarian-Non-local/Processed">Vegetarian-Non-local/Processed</a>
							    <a className="dropdown-item" href="Omnivore-Non-Local/Processed">Omnivore-Non-Local/Processed</a>
							  </div>
							  <h1 className="questions">Thermostat</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Above 72 in Summer/Below 68 in Winter">Above 72 in Summer/Below 68 in Winter</a>
							    <a className="dropdown-item" href="Above 70 in Summer/Below 70 in Winter">Above 70 in Summer/Below 70 in Winter</a>
							    <a className="dropdown-item" href="Above 68 in Summer/Below 72 in Winter">Above 68 in Summer/Below 72 in Winter</a>
							    <a className="dropdown-item" href="Below 68 in Summer/Above 72 in Winter">Below 68 in Summer/Above 72 in Winter</a>
							  </div>
							</div>
							<h1 className="questions">Grocery Shopping</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Brought My Own Bags">Brought My Own Bags</a>
							    <a className="dropdown-item" href="Used Paper Bags">Used Paper Bags</a>
							    <a className="dropdown-item" href="Used Plastic Bags">Used Plastic Bags</a>
							    <a className="dropdown-item" href="Had my Groceries Delivered ">Had my Groceries Delivered </a>
							  </div>
							</div>
							<h1 className="questions">Groceries</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="All Fresh meat and Produce">All Fresh meat and Produce</a>
							    <a className="dropdown-item" href="50% PrePackaged">50% PrePackaged</a>
							    <a className="dropdown-item" href="100% PrePackaged">100% PrePackaged</a>
							    <a className="dropdown-item" href="No Groceries - I only eat out">No Groceries - I only eat out</a>
							  </div>
							</div>
							<h1 className="questions">Bathing</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="5 Mins or Less/Cold to Warm">5 Mins or Less/Cold to Warm</a>
							    <a className="dropdown-item" href="5 - 10 Mins/Hot">5 - 10 Mins/Hot</a>
							    <a className="dropdown-item" href="10+ Mins/Hot">10+ Mins/Hot</a>
							  </div>
							</div>
							<h1 className="questions">Device Charging</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Chargers unplugged when not in use">Chargers unplugged when not in use</a>
							    <a className="dropdown-item" href="Chargers left plugged into wall always">Chargers left plugged into wall always</a>
							    <a className="dropdown-item" href="Charge items even if they are not dead">Charge items even if they are not dead</a>
							    <a className="dropdown-item" href="If I'm not using it, I'm charging it">If I'm not using it, I'm charging it</a>
							  </div>
							</div>
							<h1 className="questions">Energy Conservation</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Only lights and appliances in use are turned on">Only lights and appliances in use are turned on</a>
							    <a className="dropdown-item" href="Lights and appliances on timers">Lights and appliances on timers</a>
							    <a className="dropdown-item" href="Some lights and appliances left on for safety">Some lights and appliances left on for safety</a>
							    <a className="dropdown-item" href="Lights and appliances are always on all over">Lights and appliances are always on all over</a>
							  </div>
							</div>
							<h1 className="questions">Recycling</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Recycle/reuse everything that can be">Recycle/reuse everything that can be</a>
							    <a className="dropdown-item" href="Recycle everything, but don't reuse">Recycle everything, but don't reuse</a>
							    <a className="dropdown-item" href="Recycle paper and plastic only">Recycle paper and plastic only</a>
							    <a className="dropdown-item" href="I do not recycle...ever">I do not recycle...ever</a>
							  </div>
							</div>
							<h1 className="questions">Last one</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="100% Walk/Bike/Public Transit">100% Walk/Bike/Public Transit</a>
							    <a className="dropdown-item" href="50% Walk/Bike/Public Transit">50% Walk/Bike/Public Transit</a>
							    <a className="dropdown-item" href="Carpool/Public Transit Only">Carpool/Public Transit Only</a>
							    <a className="dropdown-item" href="Walk/Bike Only">Something else here</a>
							  </div>
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