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
				<div className="row">
					<div className="col-md-12">
						<div className="profile-main-info">
							<h1 className="person-profile">Full-Stack Developer</h1>
							<h2 className="person-skills">(Ruby on Rails + ReactJS)</h2>
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
							<h2>Alexnder Purhalo</h2>
							<h3>
								Kiev, 19 years
							</h3>
							<h4 className="person-phone">
								<img
									src="http://www.clipartbest.com/cliparts/dT6/nXB/dT6nXBGT9.png"
									alt="phone-icon"
									className="phone-icon"/>
								+38 095 220 78 66
							</h4>
							<h4 className="person-email">
								<img
									src="http://www.crescentinteractive.com/wp-content/uploads/2014/10/Email-Icon-Image.png"
									alt="email"
									className="email-icon" />
								alexpurhalo@gmail.com
							</h4>
							<h4 className="person-skype">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Skype-icon-new.png"
									alt="skype-icon"
									className="skype-icon"/>
								alexpurhalo
								<img
									src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png"
									alt="skype-icon"
									className="github-icon"/>
								<img
									src="http://marisasanfilippo.com/wp-content/uploads/2015/07/Linkedin_circle.svg_.png"
									alt="skype-icon"
									className="linkedin-icon"/>
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
								<ul className="achievement-list">
									<li className="achievements-list-item">Self education progress: one relised product and over than 30 pet projects (1,5 years)</li>
									<li className="achievements-list-item">Commercial experiance: manual QA engeneer; (0,5 years)</li>
									<li className="achievements-list-item">Basic: Ruby (0,5+ years), JavaScript (0,5+ years), HTML & CSS (1+ year)</li>
									<li className="achievements-list-item">Technologies: Ruby on Rails, ReactJS, JQuer, AngularJS, NodeJS</li>
									<li className="achievements-list-item">Databases: PostgreSQL, MySQL,  MongoDB</li>
									<li className="achievements-list-item">Testing: Rspec, Mocha</li>
									<li className="achievements-list-item">Code structure: HAML, ES6, SASS</li>
									<li className="achievements-list-item">OS: prefere Linux</li>
									<li className="achievements-list-item">VCS: love to write clear commit history with Git</li>
									<li className="achievements-list-item">Services: Heroku, Amazon</li>
									<li className="achievements-list-item">English: use for reading, watching technical things, messaging, speaking meetings</li>
									<li className="achievements-list-item">Computer science: understanding of Data Structure and Algorithms</li>
									<li className="achievements-list-item">Personal qualites: fast learner, team player</li>
								</ul>
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
		achievements: state.achievements.all_achievements
	}
}

export default connect(mapStateToProps, { fetchSinglePerson, fetchAchievements })(Person);

