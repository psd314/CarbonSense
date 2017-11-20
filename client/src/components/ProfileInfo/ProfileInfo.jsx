import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import ProfileGraph from '../ProfileGraph/ProfileGraph.jsx';

class ProfileInfo extends Component {
	
	render() {
		return(
		<div className="row">
			<div className="col-4">
				<div>
					<h2>Profile</h2>
					<img style={{width: 75}} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/1200px-Spongebob-squarepants.svg.png" />
					<p>Username: {this.props.username}</p>
					<p>Location: {this.props.location}</p>
					<p>Gender: {this.props.gender}</p>
					<p>High Score: {this.props.highScore}</p>
					<p>Average Score: {this.props.averageScore}</p>
					<Button buttonName="Edit" />
				</div>
			</div>			
			<div className="col-8" >
				<ProfileGraph  />
			</div>
		</div>
		);
	}
}

export default ProfileInfo;