import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import ProfileGraph from '../ProfileGraph/ProfileGraph.jsx';
import "./ProInfo.css"

class ProfileInfo extends Component {
	state = {
		edit: false,
		image: '',
		name: '',
		location: '',
		gender: ''
	}

	componentDidMount() {
		console.log(this.props);
	}

	handleEdit = (e) => {		
		this.setState({edit: true});
	}

	handleSubmit = (e) => {
		// submit changes to route, update db, respond and update state
		e.preventDefault();
		this.setState({
			edit: false
		});
			
	}

	render() {

		return(
			<div className="row">
				<div className="col-8 offset-2">
					<div className="container container-box">
						<div className="row profileInfo-div">			
								<div className="col-4">
									<h2 className="profile-word">PROFILE</h2>
									<div>
										{ this.state.edit ?
											<div className="input-group">
											  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
											  	value={this.props.src}
											  	onChange={event => {
											  		this.setState({ image: event.target.value})}
											  	}					
											  	name="image"	
											  	type="text"										 
											  	/>
											</div>
											: <img style={{width: 200}} alt={this.props.src} src={this.props.src}/>
										}
									</div>
								</div>
								<div className="col-8 profile-stats">
									<div>Username: { 
										this.state.edit ? 
											<div className="input-group">
											  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
											  	value={this.props.username}
											  	onChange={event => this.setState({ name: event.target.value })}					
											  	name="name"	
											  	/>
											</div> 
											: this.props.username}
									</div>
									<div>Location: { 
										this.state.edit ? 
											<div className="input-group">
											  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
											  	value={this.props.location}
											  	onChange={event => this.setState({location: event.target.value})}					
											  	name="location"	
											  	type="text"										 
											  	/>
											</div> 
											: this.props.location}
									</div>
									<div>Gender: { 
										this.state.edit ? 
											<div className="input-group">
											  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
											  	value={this.props.gender}
											  	onChange={event => this.setState({gender: event.target.value})}					
											  	name="gender"	
											  	type="text"										 
											  	/>
											</div> 
											: this.props.gender}
									</div>
									<p>Success Streak: {this.props.successStreak}</p>
									<p>Challenge Score: {this.props.challengeScore}</p>
									<Button 
										buttonName={this.state.edit ? "Submit" : "Edit"} 
										onClick={this.state.edit ? this.handleSubmit : this.handleEdit} />
								</div>
						</div>
					</div>		
				</div>
			</div>
		);
	}
}

export default ProfileInfo;