import React, { Component } from "react";

class Login extends Component {
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
							  	onChange={this.props.handleInputChange}					
							  	name="topic"/>
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
							  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
							  	value={this.props.value}
							  	onChange={this.props.handleInputChange}					
							  	name="topic"/>
							</div>
				    	</div>
				    </div>
			    </div>
			</div>
		);
	}
}

export default Login;