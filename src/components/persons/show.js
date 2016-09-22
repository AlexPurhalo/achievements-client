// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Actions import
import { fetchSinglePerson } from '../../actions/persons';
import { fetchAchievements } from '../../actions/achievements';


// Components import
import Achievements from './show/achievements';

// Shows information about single person
class Person extends Component {
	// Calls function that create GET request to fetch data about certain user
	componentWillMount() {
		this.props.fetchSinglePerson(this.props.params.id);
		this.props.fetchAchievements(this.props.params.id)
	}
	render() {
		const token = localStorage.getItem('token');
		const imageUrl = this.props.person.picture.url;
		return (
			<div className="single-user-page">
				<img src={imageUrl} width="300px" height="300px" className="avatar"/>
				{/*<div>{imageUrl ? (<img src={imageUrl} width="300px" height="300px"/>) : (<div>No photo</div>)}</div><br/>*/}
				{/*User: <strong>{this.props.person.email}</strong><br/>*/}
				{/*Name: <strong>{this.props.person.name}</strong><br/>*/}
				{/*<h2>{this.props.person.profile}</h2*/}
				{/*><br/>*/}
				{/*Age: <strong>{this.props.person.age}</strong><br/>*/}
				{/*Skype: <strong>{this.props.person.skype}</strong><br/>*/}
				{/*Mobile: <strong>{this.props.person.mobile}</strong><br/>*/}

				{/*<Achievements*/}
				{/*achievements={this.props.achievements}*/}
				{/*access_token={this.props.person.access_token}*/}
				{/*personId={this.props.person.id} />*/}

				<div>
					{
						this.props.person.access_token === token
							?
							(
								<div><Link to={`/persons/${this.props.params.id}/edit`}>You can</Link></div>
							)
							:
							(
								<div>Sorry, you can't do this</div>
							)
					}
				</div>
			</div>
		);
	}
}

// Sets as property needed state
function mapStateToProps(state) {
	return {
		person: state.persons.single_person,
		achievements: state.achievements.all_achievements
	}
}

export default connect(mapStateToProps, { fetchSinglePerson, fetchAchievements })(Person);

