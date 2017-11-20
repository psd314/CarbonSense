import React, { Component } from 'react';
import "./leaderboardTable.css";

class LeaderboardTable extends Component {
	render() {
		return(
			<div className="container">
				
				<table class="table table-striped">
				 <thead>
				    <tr>
				      <th scope="col">Rank</th>
				      <th scope="col">Username</th>
				      <th scope="col">Location</th>
				      <th scope="col">Age</th>
				      <th scope="col">Gender</th>
				      <th scope="col">Average Daily Score</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">1</th>
				      <td>GoingGreenGuy</td>
				      <td>Memphis,TN</td>
				      <td>26</td>
				      <td>Male</td>
				      <td>94</td>
				    </tr>
				    <tr>
				      <th scope="row">2</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">3</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">4</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">5</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">6</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">7</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">8</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">9</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">10</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				  </tbody>
				</table>
			</div>
		);
	}
}

export default LeaderboardTable;