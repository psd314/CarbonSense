import React, { Component } from 'react';

class Button extends Component {
	
	render() {
		return (
			<button className="btn btn-lg btn-primary" 
			onClick={this.props.handleOnClick}
			to={this.props.to}>{this.props.buttonName}</button>
		);	
	}
}

export default Button;

