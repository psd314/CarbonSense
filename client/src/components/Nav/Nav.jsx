import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {

	render() {
		return (
			<ul className="nav">
			  <li className="nav-item">
			    <a className="nav-link active" href="/login">Login</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" href="/dashboard">Dashboard</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" href="/leaderboard">Leaderboard</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" href="/profile">Profile</a>
			  </li>
			</ul>
		);
	}
}

export default Nav;
