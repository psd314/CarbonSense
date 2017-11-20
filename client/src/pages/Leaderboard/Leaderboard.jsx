import React, { Component } from "react";
import LeaderboardTable from '../../components/LeaderboardTable/LeaderboardTable.jsx';
import "./leader.css";

class Leaderboard extends Component {

	render () {
		return (
			<div className="Container">
				<div>
					<h1 className="Head">Leaderboard</h1>
				</div>
				<div>
					<h4 className="Head2">See how you measure up against other CarbonSensers!</h4>
				</div>
						<LeaderboardTable />
			</div>				
		);
	}
}

export default Leaderboard;