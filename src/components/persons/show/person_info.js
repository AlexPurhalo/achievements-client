// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { updatePersonData } from '../../../actions/persons';

class PersonInfo extends Component {
	constructor() {
		super();

		this.state = {
			onNameEdit: false,
			onCityEdit: false,
			onMobileEdit: false,
			onMailEdit: false,
			skypeEdit: false,
			githubEdit: false,
			linkedinEdit: false,
			name: '',
			city: ''
		};

		this.accessToken = localStorage.getItem('token');

		this.handleEditNameClick = this.handleEditNameClick.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.handleUpdateName = this.handleUpdateName.bind(this);

		this.handleEditCityClick = this.handleEditCityClick.bind(this);
		this.onCityChange = this.onCityChange.bind(this);
		this.handleUpdateCity = this.handleUpdateCity.bind(this);
	}

	// Name tags render
	handleEditNameClick() {
		this.setState({ onNameEdit: !this.state.onNameEdit });
	}

	onNameChange(e) {
		this.setState({ name: e.target.value });
	}

	personNameRender() {
		return (
			<h2>
				{this.props.name ? (this.props.name) : ('Still empty')}
				{this.props.accessToken === this.accessToken ?
					(this.changeEditStateButton(this.handleEditNameClick, 'btn btn-default', 'Edit')) : null}
			</h2>
		);
	}

	personNameFormRender() {
		return (
			<form onSubmit={this.handleUpdateName}>
				<input
					type="text"
					placeholder={this.props.name}
					onChange={this.onNameChange}/>
				<button type="submit">Update</button>
				{this.changeEditStateButton(this.handleEditNameClick, 'btn btn-default', 'Cancel')}
			</form>
		);
	}

	handleUpdateName(e) {
		e.preventDefault();
		if (this.state.name) { this.props.updatePersonData(this.props.personId, undefined, this.state.name) }

		this.setState({ onNameEdit: !this.state.onNameEdit, name: '' });
	}


	// City tags render
	handleEditCityClick() {
		this.setState({ onCityEdit: !this.state.onCityEdit });
	}

	onCityChange(e) {
		this.setState({ city: e.target.value })
	}

	personCityRender() {
		return (
			<h3>
				{this.props.city ? (this.props.city) : ('Still empty')}
				{this.props.accessToken === this.accessToken ?
					(this.changeEditStateButton(this.handleEditCityClick, 'btn btn-default', 'Edit')) : null}
			</h3>
		);
	}

	personCityFormRender() {
		return (
			<form onSubmit={this.handleUpdateCity}>
				<input
					onChange={this.onCityChange}
					placeholder={this.props.city}
					type="text" />
				<button type="submit">Update</button>
				{this.changeEditStateButton(this.handleEditCityClick, 'btn btn-default', 'Cancel')}
			</form>

		);
	}

	handleUpdateCity(e) {
		e.preventDefault();

		if (this.state.city) {
			this.props.updatePersonData(this.props.personId, undefined, undefined, this.state.city)
		}

		this.setState({ onCityEdit: !this.state.onCityEdit, city: '' });
	}

	// Common configs
	changeEditStateButton(handleEditClickType, className, text) {
		return (
			<button
				type="reset"
				onClick={handleEditClickType}
				className={className}>
				{text}
			</button>
		)
	}



	// JSX render
	render() {
		return (
			<div className="person-info">
				{this.state.onNameEdit ? (this.personNameFormRender()) : (this.personNameRender())}
				<ul>
					<li>{this.state.onCityEdit ? (this.personCityFormRender()) : (this.personCityRender())}</li>
					<li><h3>, {this.props.age} years</h3></li>
				</ul>
				<h4 className="person-phone">
					<img
						src="http://www.clipartbest.com/cliparts/dT6/nXB/dT6nXBGT9.png"
						alt="phone-icon"
						className="phone-icon"/>
					{this.props.mobile}
				</h4>
				<h4 className="person-email">
					<img
						src="http://www.crescentinteractive.com/wp-content/uploads/2014/10/Email-Icon-Image.png"
						alt="email"
						className="email-icon" />
					{this.props.email}
				</h4>
				<h4 className="person-skype">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Skype-icon-new.png"
						alt="skype-icon"
						className="skype-icon"/>
					{this.props.skype}
					<a href={this.props.github}>
						<img
							src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png"
							alt="skype-icon"
							className="github-icon"/>
					</a>
					<a href={this.props.linkedin}>
						<img
							src="http://marisasanfilippo.com/wp-content/uploads/2015/07/Linkedin_circle.svg_.png"
							alt="skype-icon"
							className="linkedin-icon"/>
					</a>
				</h4>
			</div>
		);
	}
}

export default connect(null, { updatePersonData })(PersonInfo);
