import React, { Component } from "react";
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';


class Profile extends Component {


	render() {
		return(
			<div>
				<ProfileInfo 
					username="bob sponja"
					location="Pineapple, UnderTheSea"
					gender="Dude"
					highScore="135 krabby patties"
					averageScore="75 krappy patties"
				/>
			</div>
		);
	}
}

export default Profile;