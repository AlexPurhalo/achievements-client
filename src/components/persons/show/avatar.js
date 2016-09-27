// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { uploadPersonPicture } from '../../../actions/persons';

class Avatar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: '',
			imagePreviewUrl: '',
			onEditAvatar: false,
		};

		this.accessToken = localStorage.getItem('token');

		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleImageSubmit = this.handleImageSubmit.bind(this);

		this.changeOnAvatarEdit = this.changeOnAvatarEdit.bind(this);
	}

	// Changes on edit avatar state
	changeOnAvatarEdit() {
		this.setState({ onEditAvatar: !this.state.onEditAvatar });
	}


	// Updating
	handleImageSubmit(e) {
		e.preventDefault();
		this.props.uploadPersonPicture(this.props.personId, this.state.file);
		this.setState({onEditAvatar: !this.state.onEditAvatar})
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


	avatarForm() {
		return (
			<form onSubmit={this.handleImageSubmit}>
				<label htmlFor="files" className="btn on-select-avatar">Select Image</label>
				<input
					onChange={this.handleImageChange}
					id="files"
					className="file-input"
					type="file" />
				<button
					onClick={this.handleImageSubmit}
					className="btn unstiled-btn"
					type="submit" >
					<img
						src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkxasy3vTR3Ns-Br-C-S338ksNJ2qTl54YxDhFIm-YZZDrhbZu"
						alt="update-avatar"
						width="36px" height="36px" />
				</button>
				{this.avatarEditStateButton()}
			</form>
		);
	}

	// State Change Button
	avatarEditStateButton() {
		if (this.props.accessToken === this.accessToken) {
			return (
				<button
					type="reset"
					onClick={this.changeOnAvatarEdit}
					className='unstiled-btn'>
					{this.props.imageUrl
						?
						(
							!this.state.onEditAvatar
								?
								(<div className="on-edit-avatar-button">
									Change this avatar <img src='http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png' className="on-edit-avatar-icon"/></div>)
								:
								(<img src="http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png" width="40px" height="40px"/>))
						:
						(
							!this.state.onEditAvatar ?
								('Add your Avatar') : (<img src="http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png" width="40px" height="40px"/>))
					}
				</button>
			);
		}
	}

	personAvatarRender() {
		let {imagePreviewUrl} = this.state;
		let imagePreview = null;
		if (imagePreviewUrl) {
			imagePreview = (<img src={imagePreviewUrl} alt="avatar" className="avatar"/>)
		} else {
			if (this.props.imageUrl) {
				imagePreview = (
					<img src={`http://localhost:3000/${this.props.imageUrl}`} alt="avatar" className="avatar"/>)
				;
			} else {
				imagePreview = (<img
													src="http://orig12.deviantart.net/5374/f/2013/314/8/3/pokemon_silhouette__5___pikachu_by_supersmashremix2375-d6ts8mm.png"
													alt="unknown-user"
													className="avatar"/>)
			}
		}

		return (
			<div>
				<div className="row">
					<div className="row">
						{!this.state.onEditAvatar ? (this.avatarEditStateButton()) : (this.avatarForm())}
					</div>
					{imagePreview}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="thumbnail">
				{this.personAvatarRender()}
			</div>
		);
	}
}

export default connect(null, { uploadPersonPicture })(Avatar);
