// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonInfo extends Component {
	render() {
		return (
			<div className="person-info">
				<h2>{this.props.name}</h2>
				<h3>
					{this.props.city}, {this.props.age} years
				</h3>
				<h4 className="person-phone">
					<img
						src="http://www.clipartbest.com/cliparts/dT6/nXB/dT6nXBGT9.png"
						alt="phone-icon"
						className="phone-icon"/>
					{this.props.mobile}
				</h4>
				<h4 className="person-email">
					<img
						src="http://www.crescentinteractive.com/wp-content/uploads/2014/10/Email-Icon-Image.png"
						alt="email"
						className="email-icon" />
					{this.props.email}
				</h4>
				<h4 className="person-skype">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Skype-icon-new.png"
						alt="skype-icon"
						className="skype-icon"/>
					{this.props.skype}
					<a href={this.props.github}>
						<img
							src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png"
							alt="skype-icon"
							className="github-icon"/>
					</a>
					<a href={this.props.linkedin}>
						<img
							src="http://marisasanfilippo.com/wp-content/uploads/2015/07/Linkedin_circle.svg_.png"
							alt="skype-icon"
							className="linkedin-icon"/>
					</a>
				</h4>
			</div>
		);
	}
}

export default connect(null)(PersonInfo);
