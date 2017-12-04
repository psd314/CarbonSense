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
<<<<<<< HEAD
		axios.get("/user/5a22ea7b67a02b3b07921758")

			.then(res => {
				this.setState({ user: res.data })
				console.log(this.state)
			})
			.catch(err => console.log(err));
=======
		axios.get('/user/1')
			.then( resp => { 
				this.setState({ user: resp.data[0] })
			});
>>>>>>> c5f63f8dfe5f43a9af89a7a3527e803566dc2e7d
	}

	render() {
		return(
			<div className="container-fluid well span6">
				<div className="row-fluid">        
			        <div className="span8">
			            <ProfileInfo 
			            		alttext={this.state.user.name}
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