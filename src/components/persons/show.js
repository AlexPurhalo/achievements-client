// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePerson } from '../../actions/persons';

class Person extends Component {
	componentWillMount() {
		this.props.fetchSinglePerson(this.props.params.id);
	}

	render() {
		// console.log(this.props.person);
		return (
			<div className="single-user-page">
				User: <strong>{this.props.person.email}</strong>
			</div>
		);
	}
}

// Sets as property needed state
function mapStateToProps(state) {
	return { person: state.persons.single_person }
}

export default connect(mapStateToProps, { fetchSinglePerson })(Person);
