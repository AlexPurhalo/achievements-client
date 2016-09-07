// Node modules import
import React, { Component } from 'react';
import { reduxForm } from 'redux-form'

// Creates a new person
class NewPerson extends Component {
	render() {
		return (
			<form>
				<h3>Create a new Account</h3>
				<fieldset className="form-group">
					<label>Email</label>
					<input
						type="email"
						className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>Password</label>
					<input
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

export default reduxForm({ form: 'NewPersonForm', fields: ['email', 'password'] })(NewPerson);
