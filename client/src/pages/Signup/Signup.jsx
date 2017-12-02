import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions.js';
import PropTypes from 'prop-types';

class Signup extends Component {

	state = {
		name: '',
		password: '',
		confirmPassword: '',
		errors: {}
	}

	

	handleFormSubmit = (event) => {
		event.preventDefault();		
		this.setState({ errors : {} });
		this.props.userSignupRequest(this.state)
		.then((resp) => {
			this.setState({errors: {name:"Signing up..."}});
			setTimeout(() => { this.props.history.push('/dashboard')}, 1500);
			},
			(err) => { this.setState({errors: err.response.data})}
		);
	}

	handleInputChange = (event) => {
	    const value = event.target.value;
	    const name = event.target.name;

	    this.setState({
	      [name]: value
	    });
	}

	render() {
		const { userSignupRequest } = this.props;
		const { errors } = this.state;
	
		return(
			<div>
				<SignUpForm 
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange} />
				<h3 style={{color: "orange"}}><span>{errors.name}</span></h3>
				<h3 style={{color: "orange"}}><span>{errors.password}</span></h3>
				<h3 style={{color: "orange"}}><span>{errors.confirmPassword}</span></h3>
			</div>
		);
	}
}

Signup.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Signup);