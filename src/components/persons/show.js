// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Actions import
import { fetchSinglePerson } from '../../actions/persons';
import { fetchAchievements } from '../../actions/achievements';
import { fetchSkills } from '../../actions/skills';


// Components import
import Achievements from './show/achievements';
import Skills from './show/skills';

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
		const imageUrl = this.props.person.picture.url;
		return (
			<div className="single-user-page">
				<div className="row">
					<div className="col-md-12">
						<div className="profile-main-info">
							<h1 className="person-profile">{this.props.person.profile}</h1>
							<h2 className="person-skills">
								<Skills
									skills={this.props.skills}
									access_token={this.props.person.access_token}
									personId={this.props.person.id} />
							</h2>
							{
								this.props.person.access_token === token
									?
									(
										<div className="link-to-edit-account-page">
											<Link to={`/persons/${this.props.params.id}/edit`}>Edit Account</Link>
										</div>
									)
									:
									null
							}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="thumbnail">
							<img src={`http://localhost:3000/${imageUrl}`} alt="Image" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="person-info">
							<h2>{this.props.person.name}</h2>
							<h3>
								{this.props.person.city}, {this.props.person.age} years
							</h3>
							<h4 className="person-phone">
								<img
									src="http://www.clipartbest.com/cliparts/dT6/nXB/dT6nXBGT9.png"
									alt="phone-icon"
									className="phone-icon"/>
								{this.props.person.mobile}
							</h4>
							<h4 className="person-email">
								<img
									src="http://www.crescentinteractive.com/wp-content/uploads/2014/10/Email-Icon-Image.png"
									alt="email"
									className="email-icon" />
								{this.props.person.email}
							</h4>
							<h4 className="person-skype">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Skype-icon-new.png"
									alt="skype-icon"
									className="skype-icon"/>
								{this.props.person.skype}
								<a href={this.props.person.github}>
									<img
										src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png"
										alt="skype-icon"
										className="github-icon"/>
								</a>
								<a href={this.props.person.linkedin}>
									<img
										src="http://marisasanfilippo.com/wp-content/uploads/2015/07/Linkedin_circle.svg_.png"
										alt="skype-icon"
										className="linkedin-icon"/>
								</a>
							</h4>
						</div>
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

