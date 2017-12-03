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
		axios.get("/user/5a22ea7b67a02b3b07921758")

			.then(res => {
				this.setState({ user: res.data })
				console.log(this.state)
			})
			.catch(err => console.log(err));
	}



	render() {
		return(
<div className="container-fluid well span6">
	<div className="row-fluid">
        
        <div className="span8">
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
        
        
	</div>
</div>
		);
	}
}

export default Profile;