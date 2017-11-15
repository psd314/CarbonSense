import React, { Component } from "react";
import ProfileGraph from "../../components/ProfileGraph/ProfileGraph.jsx";
class Dashboard extends Component {

	render() {
		return(
			<div>
				<h1>Hi, I'm the dashboard.</h1>
				<ProfileGraph url="https://res.cloudinary.com/hashnode/image/upload/v1475398325/vde67ay1l2ljf3wpgnwb.jpg" width="300px" />
			</div>
		);
	}
}

export default Dashboard;