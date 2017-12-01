import React, { Component } from "react";
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';
import axios from 'axios';

class Profile extends Component {
state = {
	user: {}
};

componentDidMount() {
		this.loadUser();
	}

	loadUser = () => {
		axios.get("/user/5a1f3cc4f36b011c04114055")
			.then(res => {
				this.setState({ user: res.data })
				console.log(this.state)
			})
			.catch(err => console.log(err));
	}



	render() {
		return(
			<div style={{paddingTop: 150}}>
				<ProfileInfo 
					alttext={this.state.user.name}
					src={this.state.user.image}
					username={this.state.user.name}
					location={this.state.user.location}
					gender={this.state.user.gender}
					successStreak={this.state.user.successStreak}
					challengeScore={this.state.user.challengeScore}
				/>
			</div>
		);
	}
}

export default Profile;