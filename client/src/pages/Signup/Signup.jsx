import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Signup extends Component {

	state = {
		name: '',
		password: '',
		confirmPassword: '',
		error: ''
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		if(this.state.password === this.state.confirmPassword
			&& this.state.password.length >= 7) {
			axios
			.post('/newuser', {name: this.state.name, password: this.state.password})
			.then(res => {
				console.log(res.data);
				if(res.data === "exists") {
					this.setState({error: 'Username already exists'})
				} else {
					this.setState({error: "Sign Up successful"})
					setTimeout( () => {
						
						this.props.history.push("/dashboard");
						}, 1500);
					
				}
			})
			.catch(err => console.error(err));
		} else {
			this.setState({
				error: 'Passwords must match exactly and be at least 8 characters'
				});
		}
		
	}

	handleInputChange = (event) => {
	    const value = event.target.value;
	    const name = event.target.name;

	    this.setState({
	      [name]: value
	    });
	}

	render() {
		return(
			<div>
				<SignUpForm 
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange} />
				<h3 style={{color: "orange"}}><span>{this.state.error}</span></h3>
			</div>
		);
	}
}

export default Signup;