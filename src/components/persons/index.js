// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Reactable from 'reactable';

var Table = Reactable.Table,
	Thead = Reactable.Thead,
	Th = Reactable.Th;

var sgTeams = [
	{name: "SG-1", leader: "Oneil", assignment: "Exploration", members: 4},
	{name: "SG-2", leader: "Kawalsky", assignment: "Search and Rescue", members: 5},
	{name: "SG-3", leader: "Reynolds", assignment: "Marine Combat", members: 10},
	{name: "SG-4", leader: "Howe", assignment: "Medical", members: 4},
	{name: "SG-5", leader: "Davis", assignment: "Marine Combat", members: 6},
	{name: "SG-6", leader: "Fischer", assignment: "Search and Rescue", members: 10},
	{name: "SG-7", leader: "Isaacs", assignment: "Scientific", members: 6},
	{name: "SG-8", leader: "Yip", assignment: "Medical", members: 6},
	{name: "SG-9", leader: "Winters", assignment: "Diplomatic", members: 7},
	{name: "SG-10", leader: "Colville", assignment: "Military Exploration", members: 5}
];

// Actions import
import { fetchPersons } from '../../actions/persons';

class Persons extends Component {
	componentWillMount() {
		// console.log('this would be a good time to call an action creator to fetch posts');
		this.props.fetchPersons();
	}

	renderTable() {
		return (
			<Table className="table"
						 filterable={['leader', 'assignment', 'members']}
						 noDataText="No matching records found"
						 itemsPerPage={5}
						 currentPage={0}
						 sortable={true}
						 data={sgTeams}>
				<Thead>
				<Th column="name">Away Team</Th>
				<Th column="leader">Leader</Th>
				<Th column="assignment">Mission</Th>
				<Th column="members">Team Members</Th>
				</Thead>
			</Table>
		)
	}


	render() {
		console.log(this.props.persons);
		return (
			<div className="persons-list">
				<ul className="list-group">
					{this.props.persons.map(person =>
						<Link to={`persons/${person.id}`} key={person.id}>
							<li className="list-group-item">{person.email}</li>
						</Link>
					)}
				</ul>
				<div>
					{this.renderTable()}
				</div>
			</div>
		);
	}
}

// Transforms states to properties
function mapStateToProps(state) {
	return { persons: state.persons.all_persons }
}

export default connect(mapStateToProps, { fetchPersons })(Persons);
