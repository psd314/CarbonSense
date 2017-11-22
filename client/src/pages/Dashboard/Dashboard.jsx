import React, { Component } from "react";
import DashboardGraph from "../../components/DashboardGraph/DashboardGraph.jsx";
import "./dashboard.css";
class Dashboard extends Component {

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
							<h1 className="questions">Transportation</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="100% Walk/Bike/Public Transit">Action</a>
							    <a className="dropdown-item" href="50% Walk/Bike/Public Transit">Another action</a>
							    <a className="dropdown-item" href="Carpool/Public Transit Only">Something else here</a>
							    <a className="dropdown-item" href="Walk/Bike Only">Something else here</a>
							  </div>
							</div>
							<h1 className="questions">Eating</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Vegetarian/Vegan-Local/Humane-Non-Processed">Action</a>
							    <a className="dropdown-item" href="Omnivore-Local/Humane-Non-Processed">Another action</a>
							    <a className="dropdown-item" href="Vegetarian-Non-local/Processed">Something else here</a>
							    <a className="dropdown-item" href="Omnivore-Non-Local/Processed">Something else here</a>
							  </div>
							  <h1 className="questions">Thermostat</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Above 72 in Summer/Below 68 in Winter">Action</a>
							    <a className="dropdown-item" href="Above 70 in Summer/Below 70 in Winter">Another action</a>
							    <a className="dropdown-item" href="Above 68 in Summer/Below 72 in Winter">Something else here</a>
							    <a className="dropdown-item" href="Below 68 in Summer/Above 72 in Winter">Something else here</a>
							  </div>
							</div>
							<h1 className="questions">Grocery Shopping</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Brought My Own Bags">Action</a>
							    <a className="dropdown-item" href="Used Paper Bags">Another action</a>
							    <a className="dropdown-item" href="Used Plastic Bags">Something else here</a>
							    <a className="dropdown-item" href="Had my Groceries Delivered ">Something else here</a>
							  </div>
							</div>
							<h1 className="questions">Groceries</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="All Fresh meat and Produce">Action</a>
							    <a className="dropdown-item" href="50% PrePackaged">Another action</a>
							    <a className="dropdown-item" href="100% PrePackaged">Something else here</a>
							    <a className="dropdown-item" href="No Groceries - I only eat out">Something else here</a>
							  </div>
							</div>
							<h1 className="questions">Bathing</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="5 Mins or Less/Cold to Warm">Action</a>
							    <a className="dropdown-item" href="5 Mins or Less/Hot">Another action</a>
							    <a className="dropdown-item" href="5 - 10 Mins/Hot">Something else here</a>
							    <a className="dropdown-item" href="10+ Mins/Hot">Something else here</a>
							  </div>
							</div>
							<h1 className="questions">Device Charging</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Chargers unplugged when not in use">Action</a>
							    <a className="dropdown-item" href="Chargers left plugged into wall always">Another action</a>
							    <a className="dropdown-item" href="Charge items even if they are not dead">Something else here</a>
							    <a className="dropdown-item" href="If I'm not using it, I'm charging it">Something else here</a>
							  </div>
							</div>
							<h1 className="questions">Energy Conservation</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Only lights and appliances in use are turned on">Action</a>
							    <a className="dropdown-item" href="Lights and appliances on timers">Another action</a>
							    <a className="dropdown-item" href="Some lights and appliances left on for safety">Something else here</a>
							    <a className="dropdown-item" href="Lights and appliances are always on all over">Something else here</a>
							  </div>
							</div>
							<h1 className="questions">Recycling</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="Recycle/reuse everything that can be">Action</a>
							    <a className="dropdown-item" href="Recycle everything, but don't reuse">Another action</a>
							    <a className="dropdown-item" href="Recycle paper and plastic only">Something else here</a>
							    <a className="dropdown-item" href="I do not recycle...ever">Something else here</a>
							  </div>
							</div>
							<h1 className="questions">Last one</h1>
							<div className="dropdown">
							  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Options...
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="100% Walk/Bike/Public Transit">Action</a>
							    <a className="dropdown-item" href="50% Walk/Bike/Public Transit">Another action</a>
							    <a className="dropdown-item" href="Carpool/Public Transit Only">Something else here</a>
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