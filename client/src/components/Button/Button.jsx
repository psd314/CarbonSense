import React, { Component } from 'react';
import "./button.css"

class Button extends Component {
	
	render() {
		return (
			
			<button className="btn btn-edit" 
			onClick={this.props.onClick}
			to={this.props.to}>{this.props.buttonName}</button>
			
		);	
	}
}

export default Button;

