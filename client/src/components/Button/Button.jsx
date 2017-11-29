import React, { Component } from 'react';

class Button extends Component {
	
	render() {
		return (
			
			<button className="btn btn-warning" 
			onClick={this.props.handleOnClick}
			to={this.props.to}>{this.props.buttonName}</button>
			
		);	
	}
}

export default Button;

