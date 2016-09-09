// Node modules import
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { fetchSinglePerson } from '../../actions/persons';

class EditPerson extends Component {
	componentWillMount() {
		this.props.fetchSinglePerson(this.props.params.id);
	}

	onDeleteClick() {
		this.props.deletePerson(this.props.params.id);
	}

	render() {
		console.log(this.props.person);
		return (
			<div className="person-edit-container">
				<form>
					<h4>Edit person's data</h4>
					<fieldset className="form-group">
						<label>Email</label>
						<input
							placeholder={this.props.person.email}
							className="form-control"
							type="text"/>
					</fieldset>
					<fieldset className="form-group">
						<label>Password</label>
						<input
							placeholder="**************"
							className="form-control"
							type="password"/>
					</fieldset>
					<button
						type="submit"
						className="btn btn-primary">
						Update
					</button>
				</form>
				<br/><br/>
				<div className="person-delete-container">
					<h4>Delete account</h4>
					<button
						onClick={this.onDeleteClick.bind(this)}
						className="btn btn-danger">
						Destroy
					</button>
				</div>
			</div>
		);
	}
}

// Sets as property needed state
function mapStateToProps(state) {
	return { person: state.persons.single_person }
}

export default reduxForm({
	form: 'NewPersonForm',
	fields: ['email', 'password']
}, mapStateToProps, { fetchSinglePerson })(EditPerson);
