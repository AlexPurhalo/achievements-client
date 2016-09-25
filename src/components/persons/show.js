// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Actions import
import { fetchSinglePerson } from '../../actions/persons';
import { fetchAchievements } from '../../actions/achievements';
import { fetchSkills } from '../../actions/skills';


// Components import
import Profile from './show/profile';
import Skills from './show/skills';
import Avatar from './show/avatar';
import PersonInfo from './show/person_info';
import Achievements from './show/achievements';


// Shows information about single person
class Person extends Component {
	// Calls function that create GET request to fetch data about certain user
	componentWillMount() {
		this.props.fetchSinglePerson(this.props.params.id);
		this.props.fetchAchievements(this.props.params.id);
		this.props.fetchSkills(this.props.params.id);
	}
	render() {
		const token = localStorage.getItem('token');

		return (
			<div className="single-user-page">
				<div className="row profile-main-info">
					<div className="col-md-12">
						<Profile
							profile={this.props.person.profile}
							personId={this.props.person.id}
							accessToken={this.props.person.access_token}
							email={this.props.person.email} />

						<Skills
							skills={this.props.skills}
							access_token={this.props.person.access_token}
							personId={this.props.person.id} />
					</div>
				</div>

				<div className="row person-data">
					<div className="col-md-6">
						<Avatar imageUrl={this.props.person.picture.url}/>
					</div>
					<div className="col-md-6">
						<PersonInfo
							linkedin={this.props.person.linkedin}
							github={this.props.person.github}
							skype={this.props.person.skype}
							email={this.props.person.email}
							mobile={this.props.person.mobile}
							age={this.props.person.age}
							name={this.props.person.name}
							city={this.props.person.city}
							profile={this.props.person.profile}
							accessToken={this.props.person.access_token}
							personId={this.props.person.id} />
					</div>
				</div>

				<div className="person-achievements">
					<div className="row">
						<div className="col-md-12">
							<h2 className="person-achievements-title">Summary of Qualifications</h2>
						</div>
						<div className="row">
							<div className="col-md-12">
								<Achievements
									achievements={this.props.achievements}
									access_token={this.props.person.access_token}
									personId={this.props.person.id} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Sets as property needed state
function mapStateToProps(state) {
	return {
		person: state.persons.single_person,
		achievements: state.achievements.all_achievements,
		skills: state.skills.all_skills
	}
}

export default connect(mapStateToProps, { fetchSinglePerson, fetchAchievements, fetchSkills })(Person);

