// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { uploadPersonPicture } from '../../../actions/persons';

// Shows avatar / avatar upload ability
class Avatar extends Component {
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
		this.props.uploadPersonPicture(this.props.personId, this.state.file)
	}

	// Image target
	handleImageChange(e) {
		let file = e.target.files[0];
		var reader = new FileReader();
		reader.onloadend = () => {
			this.setState({
				file: reader.result,
				imagePreviewUrl: reader.result
			});
		};

		reader.readAsDataURL(file);

	}

	// JSX render
	render() {
		let {imagePreviewUrl} = this.state;
		let imagePreview = null;
		if (imagePreviewUrl) {
			imagePreview = (<img src={imagePreviewUrl} height="200px" width="200px"/>)
		}

		return (
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
		);
	}
}

export default connect(null, { uploadPersonPicture })(Avatar);
