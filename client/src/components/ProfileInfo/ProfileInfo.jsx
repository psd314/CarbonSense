import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import ProfileGraph from '../ProfileGraph/ProfileGraph.jsx';
import "./ProInfo.css"

class ProfileInfo extends Component {
	render() {
		return(
			<div className="row row2">
				<div className="col-8 offset-2">
					<div className="container container-box">
						<div className="row profileInfo-div">
			
								<div className="col-4">
									<h2 className="profile-word">PROFILE</h2>
									<img style={{width: 200}} alt={this.props.alttext} src={this.props.src}/>
								</div>
								<div className="col-8 profile-stats">
									<p>Username: {this.props.username}</p>
									<p>Location: {this.props.location}</p>
									<p>Gender: {this.props.gender}</p>
									<p>Success Streak: {this.props.successStreak}</p>
									<p>Challenge Score: {this.props.challengeScore}</p>
									<Button buttonName="Edit" />
								</div>
						</div>
					</div>		
				</div>
			</div>
		);
	}
}

export default ProfileInfo;