// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { updatePersonData } from '../../../actions/persons';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			onEdit: false,
			profileTitle: ""
		};

		this.handleChangeTitleClick = this.handleChangeTitleClick.bind(this);
		this.handleEditTitleClick = this.handleEditTitleClick.bind(this);
		this.handleSubmitUpdatedTitle = this.handleSubmitUpdatedTitle.bind(this);
	}

	handleEditTitleClick() {
		this.setState({onEdit: !this.state.onEdit});
	}

	handleChangeTitleClick(e) {
		this.setState({ profileTitle: e.target.value })
	}

	handleSubmitUpdatedTitle(e) {
		e.preventDefault();

		if (this.state.profileTitle.length) {
			this.props.updatePersonData(this.props.personId, this.state.profileTitle);
		}



		this.setState({
			onEdit: !this.state.onEdit,
			profileTitle: ""
		})
	}

	editFormRender() {
		return (
			<form className="form-inline" onSubmit={this.handleSubmitUpdatedTitle}>
				<input
					onChange={this.handleChangeTitleClick}
					className="title-input"
					value={this.state.profileTitle}
					placeholder={this.props.profile}
					type="text" />
				<button type="submit" className="on-update-title-btn">
					<img
						type="submit"
						className="update-title-icon"
						src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkxasy3vTR3Ns-Br-C-S338ksNJ2qTl54YxDhFIm-YZZDrhbZu"
						alt="cancel-icon" />
				</button>
				<img
					onClick={this.handleEditTitleClick}
					className="cancel-edit-title-icon"
					src="http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png"
					alt="cancel-icon" />
			</form>
		);
	}

	editIconRender() {
		return <img
			onClick={this.handleEditTitleClick}
			src="http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png"
			alt="profile-edit-icon"
			className="profile-edit-icon"/>
	}

	titleRender() {
		return (
			<h1 className="person-profile">
				{this.props.profile && this.props.profile.length > 0 ? (this.props.profile) : ('Your Profile')}
				{this.props.accessToken === localStorage.getItem('token') ? (this.editIconRender()) : null}
			</h1>
		);
	}

	render() {
		return (
			<div>
				{ this.state.onEdit ? (this.editFormRender()) : (this.titleRender()) }
			</div>
		);
	}
}

export default connect(null, { updatePersonData })(Profile);
