// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


// Actions import
import { fetchPersons, fetchPersonsPages } from '../../actions/persons';

// Components import
import Person from './index/person';
import Pagination from './index/pagination';

// Shows
class Persons extends Component {
	// Calls action creator
	componentWillMount() {
		this.props.fetchPersons();
		this.props.fetchPersonsPages();
	}

	// JSX rendering
	render() {
		console.log(this.props.pagesInfo);
		return (
			<div className="persons-list">
				<ul className="list-group">
					{this.props.persons.map(person =>
						<Person
							personId={person.id}
							email={person.email}
							key={person.id} />
					)}
				</ul>

				<Pagination
					fetchPersons={this.props.fetchPersons}
					pagesCount={this.props.pagesInfo.total_pages} />
			</div>
		);
	}
}

// Transforms states to properties
function mapStateToProps(state) {
	return {
		persons: state.persons.all_persons,
		pagesInfo: state.persons.pages_info
	}
}

export default connect(mapStateToProps, { fetchPersons, fetchPersonsPages })(Persons);
