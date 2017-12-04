import React, { Component } from "react";
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';
import axios from 'axios';
import { connect } from 'react-redux';

class Profile extends Component {
state = {
	user: {}
};

componentDidMount() {
		this.loadUser();
	}

	loadUser = () => {
		axios.get('/user/1')
			.then( resp => { 
				this.setState({ user: resp.data[0] })
			});
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

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}


export default connect(mapStateToProps)(Profile);