import React, { Component } from 'react';
import "./SignUpForm.css"

class SignUpForm extends Component {
	
	
	render() {
		return(
			<div style={{paddingTop: 150, color: "white", marginBottom: 110}}>
				<h1>Sign Up</h1>

				<form>
				  <div className="form-group col-4 offset-4">
				    <label htmlFor="email">Email</label>
				    <input 
				    	type="email" 
				    	className="form-control" 
				    	id="email" 
				    	placeholder="myname@email.com" 
				    	value={this.props.value}
				    	onChange={this.props.handleInputChange}
				    	name="name" />
				  </div>
				  <div className="form-group col-4 offset-4">
				    <label htmlFor="password">Password</label>
				    <input 
				    	type="password" 
				    	className="form-control" 
				    	id="password"  
				    	placeholder="********"
				    	value={this.props.value}
				    	onChange={this.props.handleInputChange}
				    	name="password"/>
				  </div>

				  <div className="form-group col-4 offset-4">
				    <label htmlFor="confirmPassword">Confirm Password</label>
				    <input 
				    	type="password" 
				    	className="form-control" 
				    	id="confirmPassword" 
				    	placeholder="********"
				    	value={this.props.value}
				    	onChange={this.props.handleInputChange}
				    	name="confirmPassword"/>
				  </div>			 
				</form>
		    	<button onClick={this.props.handleFormSubmit} className="btn btn-lg btn-warning btn-signUp">Sign Up</button>
			</div>
		);
	}
}

export default SignUpForm;