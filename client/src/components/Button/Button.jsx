import React, { Component } from 'react';

class Button extends Component {
	
	render() {
		return (
			<button className="btn btn-lg btn-primary" 
			onClick={this.props.handleArticleSave}>{this.props.buttonName}</button>
		);	
	}
}

export default Button;

