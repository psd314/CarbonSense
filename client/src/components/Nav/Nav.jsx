import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {

	render() {
		return (
		<nav className="navbar navbar-expand-lg" id="nav" style={{ backgroundColor: "#29c7d8"}}>
  			<a className="navbar-brand mr-auto">CarbonSense</a>
 		 	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>
  			<div className="collapse navbar-collapse p-0" id="navbarNavAltMarkup">
    			<div className="navbar-nav">
      				<button type="button" class="btn btn-outline-success">Dashboard <span className="sr-only">(current)</span></button>
      				<button type="button" class="btn btn-outline-success">Profile <span className="sr-only">(current)</span></button>
      				<button type="button" class="btn btn-outline-success">Leaderboard <span className="sr-only">(current)</span></button>
    			</div>
  			</div>
		</nav>
		);
	}
}

export default Nav;
