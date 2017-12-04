import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import ProfileGraph from '../ProfileGraph/ProfileGraph.jsx';
import "./ProInfo.css"
import axios from 'axios';

class ProfileInfo extends Component {
	state = {
		edit: false,
		image: '',
		name: '',
		location: '',
		gender: ''
	}

	componentDidMount() {
		axios
			.get('/user/1')
			.then((res) => {
				this.setState({
					image: res.data[0].image,
					gender: res.data[0].gender,
					name: res.data[0].name,
					location: res.data[0].location,
				})
			});
	}

	handleEdit = (e) => {		
		this.setState({edit: true});
	}

	handleInputChange = (event) => {
		const value = event.target.value;
	    const name = event.target.name;

	    this.setState({
	      [name]: value
	    });
	}

	handleSubmit = (e) => {
		// submit changes to route, update db, respond and update state
		e.preventDefault();
		this.setState({
			edit: false
		});
		axios
			.post('/user/1', this.state)
			.then((res) => {
				this.setState({
					name: res.data.name,
					image: res.data.image,
					location: res.data.location,
					gender: res.data.gender					
					})
			});
			console.log('state', this.state);
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
											  	value={this.state.image}
											  	onChange={this.handleInputChange}			
											  	name="image"	
											  	type="text"										 
											  	/>
											</div>
											: <img style={{width: 200}} alt="profile photo" src={this.state.image}/>
										}
									</div>
								</div>
								<div className="col-8 profile-stats">
									<div>Username: { 
										this.state.edit ? 
											<div className="input-group">
											  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
											  	value={this.state.name}
											  	onChange={this.handleInputChange}					
											  	name="name"	
											  	/>
											</div> 
											: this.state.name}
									</div>
									<div>Location: { 
										this.state.edit ? 
											<div className="input-group">
											  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
											  	value={this.state.location}
											  	onChange={this.handleInputChange}				
											  	name="location"	
											  	type="text"										 
											  	/>
											</div> 
											: this.state.location}
									</div>
									<div>Gender: { 
										this.state.edit ? 
											<div className="input-group">
											  <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" 
											  	value={this.state.gender}
											  	onChange={this.handleInputChange}					
											  	name="gender"	
											  	type="text"										 
											  	/>
											</div> 
											: this.state.gender}
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