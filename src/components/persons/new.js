// Node modules import
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPerson } from '../../actions/persons';

// Creates a new person
class NewPerson extends Component {
	handleFormSubmit(formProps) {
		this.props.createPerson(formProps);
	}

	render() {
		const { handleSubmit, fields: { email, password} } = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a new Account</h3>
				<fieldset className="form-group">
					<label>Email</label>
					<input
						{...email}
						type="email"
						className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>Password</label>
					<input
						{...password}
						type="password"
						className="form-control" />
				</fieldset>

				<button
					type="submit"
					className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}


export default reduxForm({
	form: 'NewPersonForm',
	fields: ['email', 'password']
}, null, { createPerson })(NewPerson);
