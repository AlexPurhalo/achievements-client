// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';

// Representation of single person in its List
class Person extends Component {
	render() {
		return (
			<Link to={`persons/${this.props.personId}`}>
				<li className="list-group-item">
					<img src={`http://localhost:3000/${this.props.avatar}`} height="40px" width="40px" />
					{this.props.email}
					</li>
			</Link>
		);
	}
}

export default Person;
