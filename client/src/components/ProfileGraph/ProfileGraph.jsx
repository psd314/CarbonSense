import React, { Component } from 'react';

class ProfileGraph extends Component {
	render() {
		return(
			<img src={this.props.url} style={{width: this.props.width}} />
		);
	}
}

export default ProfileGraph;