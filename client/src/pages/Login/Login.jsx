import React, { Component } from "react";
import { connect } from 'react-redux';
import { login } from '../../actions/loginRequest.js';

class Login extends Component {

	state = {
		name: '',
		password: '',
		errors: ''
	}

	componentDidMount() {

	}
	
	handleLogin = (event) => {		
		event.preventDefault();	
		this.setState({errors: {}});
		this.props.login(this.state)
		.then((resp) => {
			this.setState({errors: {name:"Logging in..."}});
			setTimeout(() => { this.props.history.push('/dashboard')}, 1500);
			},
			(err) => { this.setState({errors: err.response.data}) }
		);
	}

	render() {
		const { errors } = this.state;
		return(
			<div>
				<div style={{ paddingTop: 150, paddingBottom: 30}}>
				    <div className="row">
				    	<div className="col-4 offset-4">
				    		<h3>Username</h3>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col-4 offset-4">
				    		<div className="input-group">
							  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
							  	value={this.props.value}
							  	onChange={event => this.setState({name: event.target.value})}					
							  	name="name"
							  	placeholder="email"
							  	/>
							</div>
				    	</div>
				    </div>
			    </div>

			    <div style={{ paddingBottom: 30}}>
				    <div className="row">
				    	<div className="col-4 offset-4">
				    		<h3>Password</h3>
				    	</div>
				    </div>
				    <div className="row">
				    	<div className="col-4 offset-4">
				    		<div className="input-group">
							  <input type="password" className="form-control" placeholder="" aria-describedby="basic-addon1" 
							  	value={this.props.value}
							  	onChange={event => this.setState({password: event.target.value})}					
							  	name="password"
							  	placeholder="********"
							  	/>
							</div>
				    	</div>
				    </div>
			    </div>
			    <button type="button" className="btn btn-secondary" onClick={this.handleLogin}>Login</button><a href="/signup" style={{color:"orange",
					fontSize: 30, fontWeight: "bold"}}>Sign Up</a>
				<h3 style={{color: "orange"}}><span>{errors.name}</span></h3>
				<h3 style={{color: "orange"}}><span>{errors.password}</span></h3>
				<h3 style={{color: "orange"}}><span>{errors.errors}</span></h3>
			</div>
		);
	}
}

export default connect(null, { login })(Login);