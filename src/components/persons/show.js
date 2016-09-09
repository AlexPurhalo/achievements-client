// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Actions import
import { fetchSinglePerson } from '../../actions/persons';

// Shows information about single person
class Person extends Component {
	// Calls function that create GET request to fetch data about certain user
	componentWillMount() {
		this.props.fetchSinglePerson(this.props.params.id);
	}

	render() {
		// console.log(this.props.person);
		const token = localStorage.getItem('token');
		return (
			<div className="single-user-page">
				User: <strong>{this.props.person.email}</strong><br/>
				Name: <strong>{this.props.person.name}</strong>
				<div>	{this.props.person.access_token === token ?
					(
						<div><Link to={`/persons/${this.props.params.id}/edit`}>You can</Link></div>
					) :
					(<div>Sorry, you can't do this</div>)}
					</div>
			</div>
		);
	}
}

// Sets as property needed state
function mapStateToProps(state) {
	return { person: state.persons.single_person }
}

export default connect(mapStateToProps, { fetchSinglePerson })(Person);

