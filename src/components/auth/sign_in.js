// Node modules import
import React, { Component } from 'react';
import { reduxForm } from 'redux-form' //

// Component for session creating
class SignIn extends Component {
	// User's input handling
	handleFormSubmit({ email, password }) {
		console.log(email, password);
	}

	// JSX returning
	render() {
		// Properties definition
		const { handleSubmit, fields: { email, password }} = this.props;

		// Returns form with fields and button
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<h3>Sign In to Account</h3>
					<label>Email:</label>
					<input
						{...email}
						className="form-control"
						type="email" />
				</fieldset>

				<fieldset className="form-group">
					<label>Password:</label>
					<input
						{...password}
						className="form-control"
						type="password" />
				</fieldset>

				<button
					action="submit"
					className="btn btn-primary">
					Sign in
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(SignIn);
