// Node modules import
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

// Actions import
import { updatePersonData, fetchSinglePerson, deletePerson, uploadPersonPicture } from '../../actions/persons';

// Changes data about user
class EditPerson extends Component {
	// Default initialization
	constructor(props) {
		super(props);

		this.state = {
			file: '',
			imagePreviewUrl: ''
		};

		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleImageSubmit = this.handleImageSubmit.bind(this);
	}

	// Image Submitting
	handleImageSubmit(e) {
		e.preventDefault();
		console.log(this.state.file);
		// this.props.uploadPersonPicture(this.state.image)
	}

	handleImageChange(e) {
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			})
		};

		reader.readAsDataURL(file);
		this.props.uploadPersonPicture(this.props.params.id, file)
	}
	// Calls function that create GET request to fetch data about certain user
	componentWillMount() {
		this.props.fetchSinglePerson(this.props.params.id);
	}

	// Calls function sends PUT request to server to change information about certain person
	handleFormSubmit({email, name}) {
		if (email === "") email = this.props.person.email;
		this.props.updatePersonData(this.props.params.id, {email: email, name: name});
	}

	// Calls function that send DELETE request to server to delete certain person
	onDeleteClick() {
		this.props.deletePerson(this.props.params.id);
	}

	// JSX rendering
	render() {
		let {imagePreviewUrl} = this.state;
		let imagePreview = null;
		if (imagePreviewUrl) {
			imagePreview = (<img src={imagePreviewUrl} height="200px" width="200px"/>)
		}
		const { handleSubmit, fields: { email, name} } = this.props;

		return (
			<div>
				<div className="image-upload">
					<form onSubmit={this.handleImageSubmit}>
						<input
							onChange={this.handleImageChange}
							type="file"/>
						<button
							onClick={this.handleImageSubmit}
							type="submit" >
							Upload Image
						</button>
					</form>
					{imagePreview}
				</div>
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<h4>Edit person's data</h4>
					<fieldset className="form-group">
						<label>Email</label>
						<input
							{...email}
							placeholder={this.props.person.email}
							className="form-control"
							type="text"/>
					</fieldset>
					<fieldset className="form-group">
						<label>Name</label>
						<input
							{...name}
							placeholder={this.props.person.name}
							className="form-control"
							type="text"/>
					</fieldset>
					<button
						type="submit"
						className="btn btn-primary">
						Update
					</button>
				</form>
				<br/>
				<br/>
				<div>
					<div className="row">
						<div className="col-md-10"><h4>Want to delete account?</h4></div>
						<div className="col-md-2">
							<Link
								className="btn"
								to={`/persons/${this.props.person.id}`}>Back to account</Link>
						</div>
					</div>
					<button
						onClick={this.onDeleteClick.bind(this)}
						className="btn btn-danger">
						Delete
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { person: state.persons.single_person }
}

export default reduxForm({
	form: 'EditPersonForm',
	fields: ['email', 'name']
}, mapStateToProps, { updatePersonData, fetchSinglePerson, deletePerson, uploadPersonPicture })(EditPerson);
