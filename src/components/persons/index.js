// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchPersons } from '../../actions/persons';

class Persons extends Component {
	componentWillMount() {
		// console.log('this would be a good time to call an action creator to fetch posts');
		this.props.fetchPersons();
	}

	render() {
		console.log(this.props.persons);
		return (
			<div className="persons-list">
				<ul className="list-group">
					{this.props.persons.map(person =>
						<li className="list-group-item" key={person.id}>{person.email}</li>
					)}
				</ul>
			</div>
		);
	}
}

// Transforms states to properties
function mapStateToProps(state) {
	return { persons: state.persons.all_persons }
}

export default connect(mapStateToProps, { fetchPersons })(Persons);
