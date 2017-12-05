import React, { Component } from "react";
import "./Nav.css";
import { connect } from 'react-redux';
import { logout } from '../../actions/loginRequest.js';
import axios from 'axios';

class Nav extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  onClick = (e) => {
    axios
      .get('/token')
  }

	render() {
    const { isAuthenticated } = this.props.auth;

    const logOutButton = (
      <a href="#" onClick={this.logout.bind(this)}><button type="button" className="btn btn-outline-success">Log Out<span className="sr-only">(current)</span></button></a>
    );

    const loginButton = (
      <a href="/login"><button type="button" className="btn btn-outline-success">Login<span className="sr-only">(current)</span></button></a>
    );


		return (
		<nav className="navbar navbar-expand-lg" id="nav" style={{ backgroundColor: "#000000"}}>
  			<a className="navbar-brand mr-auto">CarbonSense</a>
 		 	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>
  			<div className="collapse navbar-collapse p-0" id="navbarNavAltMarkup">
    			<div className="navbar-nav">
      				<a href="/dashboard"><button type="button" className="btn btn-outline-success">Dashboard <span className="sr-only">(current)</span></button></a>
      				<a href="/profile"><button type="button" className="btn btn-outline-success">Profile <span className="sr-only">(current)</span></button></a>
      				<a href="/leaderboard"><button type="button" className="btn btn-outline-success">Leaderboard <span className="sr-only">(current)</span></button></a>
              { isAuthenticated ? logOutButton : loginButton}
    			</div>
  			</div >
		</nav>
		);
	}
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Nav);
