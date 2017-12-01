import React, { Component } from "react";
import LeaderboardTable from '../../components/LeaderboardTable/LeaderboardTable.jsx';
import "./leader.css";
import LeaderboardTableRow from '../../components/LeaderboardTableRow/LeaderboardTableRow.jsx'
import axios from 'axios'

class Leaderboard extends Component {
	state = {
		leaders: []
	  };
		
	componentDidMount() {
		this.loadLeaderboard();
	}

	loadLeaderboard = () => {
		axios.get("/leaderboard/successstreak")
			.then(res => {
				this.setState({ leaders: res.data })
				console.log(this.state)
			})
			.catch(err => console.log(err));
	}
	render () {
		return (
			<div className="Container">
				<div>
					<h1 className="Head">Leaderboard</h1>
				</div>
				<div>
					<h4 className="Head2">See how you measure up against other CarbonSensers!</h4>
				</div>
						<LeaderboardTable>
							{this.state.leaders.map( (result, index) => {
								return (
									<LeaderboardTableRow
										index={index + 1}
										name={result.name}
										location={result.location}
										gender={result.gender}
										successStreak={result.successStreak}
										challengeScore={result.challengeScore}
										/>
									);	
								})
							}

						</LeaderboardTable>
			</div>				
		);
	}
}

export default Leaderboard;