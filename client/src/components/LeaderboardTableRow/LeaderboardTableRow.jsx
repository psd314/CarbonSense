import React, { Component } from "react"; 

class LeaderboardTableRow extends Component {


    render() {

        return (
                    <tr>
				      <th scope="row">{this.props.index}</th>
				      <td>{this.props.name}</td>
				      <td>{this.props.location}</td>
				      <td>{this.props.gender}</td>
				      <td>{this.props.successStreak}</td>
                      <td>{this.props.challengeScore}</td>
				    </tr>
        );
    }
}

export default LeaderboardTableRow; 