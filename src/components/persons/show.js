// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePerson, deletePerson } from '../../actions/persons';

class Person extends Component {
	componentWillMount() {
		this.props.fetchSinglePerson(this.props.params.id);
	}

	onDeleteClick() {
		this.props.deletePerson(this.props.params.id);
	}

	render() {
		// console.log(this.props.person);
		const token = localStorage.getItem('token');
		return (
			<div className="single-user-page">
				User: <strong>{this.props.person.email}</strong>
				<div>	{this.props.person.access_token === token ?
					(
						<button
							onClick={this.onDeleteClick.bind(this)}
							className="btn btn-danger">
							Delete Account
						</button>
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

export default connect(mapStateToProps, { fetchSinglePerson, deletePerson })(Person);

