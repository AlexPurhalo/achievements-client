// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';

// Representation of single person in its List
class Person extends Component {
	render() {
		return (
			<Link to={`persons/${this.props.personId}`}>
				<li className="list-group-item">{this.props.email}</li>
			</Link>
		);
	}
}

export default Person;
