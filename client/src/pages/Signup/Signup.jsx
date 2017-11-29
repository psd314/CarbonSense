import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx';

class Signup extends Component {

	state = {
		name: '',
		password: '',
		confirmPassword: ''
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		// send email and password to db
	}

	handleInputChange = (event) => {
	    const value = event.target.value;
	    const name = event.target.name;

	    this.setState({
	      [name]: value
	    });
	    console.log(this.state);
	}

	render() {
		return(
			<SignUpForm 
				handleFormSubmit={this.handleFormSubmit}
				handleInputChange={this.handleInputChange} />
		);
	}
}

export default Signup;