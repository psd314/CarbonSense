import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {

	state = {
		name: '',
		password: '',
		error: ''
	}

	componentDidMount() {

	}
	
	login = (event) => {
		
		event.preventDefault();		
			axios
				.post('/login', {name: this.state.name, password: this.state.password})
				.then(res => {
					console.log(res.data);
					if(res.data === "exists") {
						this.setState({error: "Logging In"})
						setTimeout( () => {						
							this.props.history.push("/dashboard");
							}, 1500);
					} else {
						this.setState({error: "Loggin in..."})
						setTimeout( () => {						
							this.props.history.push("/dashboard");
						}, 1500);					
					}
				})
				.catch(err => console.error(err));		
	}

	render() {
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
							  	onChange={event => this.setState({username: event.target.value})}					
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
			    <button type="button" className="btn btn-secondary" onClick={this.login}>Login</button><a href="/signup" style={{color:"orange",
					fontSize: 30, fontWeight: "bold"}}>Sign Up</a>
				<h3 style={{color: "orange"}}><span>{this.state.error}</span></h3>
			</div>
		);
	}
}

export default Login;