import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {

	state = {
		name: '',
		password: ''
	}

	componentDidMount() {

	}
	
	login() {
		axios
			.post('/login', {username: this.state.username, password: this.state.password})
			.then(res => {console.log('res:', res)})
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
							  	value="mail@mail.com"/>
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
							  	value="admin"/>
							</div>
				    	</div>
				    </div>
			    </div>
			    <button type="button" className="btn btn-secondary" onClick={()=> this.login()}>Login</button><a href="/signup" style={{color:"orange",
					fontSize: 30, fontWeight: "bold"}}>Sign Up</a>
			</div>
		);
	}
}

export default Login;