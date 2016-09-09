// Node modules import
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

// Actions import
import { updatePersonData } from '../../actions/persons';

// Changes data about user
class EditPerson extends Component {
	handleFormSubmit({email, password}) {
		console.log(email, password);
		this.props.updatePersonData(this.props.params.id, {email: email, password: password});
	}

	render() {
		const { handleSubmit, fields: { email, password} } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h4>Edit person's data</h4><br/>
				<fieldset className="form-group">
					<label>Email</label>
					<input
						{...email}
						className="form-control"
						type="text"/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password</label>
					<input
						{...password}
						className="form-control"
						type="password"/>
				</fieldset>
				<br/>
				<button
					type="submit"
					className="btn btn-primary">
					Update
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'EditPersonForm',
	fields: ['email', 'password']
}, null, { updatePersonData })(EditPerson);
