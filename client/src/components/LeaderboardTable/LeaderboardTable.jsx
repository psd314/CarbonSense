import React, { Component } from 'react';
import "./leaderboardTable.css";


class LeaderboardTable extends Component {

	render() {
		return(
			<div className="container">
				
				<table className="table table-striped">
				 <thead>
				    <tr>
				      <th scope="col">Rank</th>
				      <th scope="col">Username</th>
				      <th scope="col">Location</th>
				      {/* <th scope="col">Age</th> */}
				      <th scope="col">Gender</th>
				      <th scope="col">Success Streak</th>
							<th scope="col">Challenge Score</th>
				    </tr>
				  </thead>
				  <tbody>
						{this.props.children}
				  </tbody>
				</table>
			</div>
		);
	}
}

export default LeaderboardTable;