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
			onEmailEdit: false,
			onSkypeEdit: false,
			onGithubEdit: false,
			onLinkedinEdit: false,
			name: '',
			city: ''
		};

		this.accessToken = localStorage.getItem('token');
	}

	// Name tags render
	personNameRender() {
		return (
			<h2>
				{this.props.name ? (this.props.name) : ('Your Name')}
				{this.props.accessToken === this.accessToken ?
					(this.changeEditStateButton(
						this.onEditChangeClick.bind(this, this.state.onNameEdit, 'onNameEdit'),
						'on-edit-name-icon',
						'http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png')) : null}
			</h2>
		);
	}

	personNameFormRender() {
		return (
			<form onSubmit={this.handleUpdateData()}>
				{this.dataStateChangeInput(this.handleDataChange('name'), 'person-edit-name-input', this.props.name)}
				{this.updatePersonInfoButton()}
				{this.changeEditStateButton(
					this.onEditChangeClick.bind(this, this.state.onNameEdit, 'onNameEdit'),
					'cancel-edit-name-icon',
					'http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png')}
			</form>
		);
	}

	// City tags render
	personCityRender() {
		return (
			<h3>
				{this.props.city ? (this.props.city) : ('Your City')}
				{this.props.accessToken === this.accessToken ?
					(this.changeEditStateButton(
						this.onEditChangeClick.bind(this, this.state.onCityEdit, 'onCityEdit'),
						'cancel-edit-city-icon',
						'http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png')) : null}
			</h3>
		);
	}

	personCityFormRender() {
		return (
			<form onSubmit={this.handleUpdateData()}>
				{this.dataStateChangeInput(this.handleDataChange('city'), 'person-edit-city-input', this.props.city)}
				{this.updatePersonInfoButton()}
				{this.changeEditStateButton(
					this.onEditChangeClick.bind(this, this.state.onCityEdit, 'onCityEdit'),
					'on-edit-city-icon',
					'http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png')}
			</form>

		);
	}

	// Age tags render
	personAgeRender() {
		return (
			<h3 className="">
				{this.props.age ? (`, ${this.props.age} years`) : ('Age')}
				{this.props.accessToken === this.accessToken ?
					(this.changeEditStateButton(
						this.onEditChangeClick.bind(this, this.state.onAgeEdit, 'onAgeEdit'),
						'cancel-edit-city-icon',
						'http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png')) : null}
			</h3>
		);
	}

	personAgeFormRender() {
		return (
			<form onSubmit={this.handleUpdateData()}>
				{this.dataStateChangeInput(this.handleDataChange('age'), 'person-edit-age-input', this.props.age)}
				{this.updatePersonInfoButton()}
				{this.changeEditStateButton(
					this.onEditChangeClick.bind(this, this.state.onAgeEdit, 'onAgeEdit'),
					'on-edit-city-icon',
					'http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png')}
			</form>
		);
	}

	// Mobile tags render
	personMobileRender() {
		return (
			<h4 className="person-phone">
				<ul>
					<li>
						<img
							src="http://www.clipartbest.com/cliparts/dT6/nXB/dT6nXBGT9.png"
							alt="phone-icon"
							className="phone-icon"/>
					</li>
					<li>{this.props.mobile ? (this.props.mobile) : ('your mobile number')}</li>
					<li>
						{this.props.accessToken === this.accessToken ?
							(this.changeEditStateButton(
								this.onEditChangeClick.bind(this, this.state.onMobileEdit, 'onMobileEdit'),
								'cancel-edit-city-icon',
								'http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png')) : null}
					</li>
				</ul>
			</h4>
		);
	}

	personMobileFormRender() {
		return (
			<ul>
				<li>
					<img
						src="http://www.clipartbest.com/cliparts/dT6/nXB/dT6nXBGT9.png"
						alt="phone-icon"
						className="phone-icon"/>
				</li>
				<li>
					<form onSubmit={this.handleUpdateData()}>
						{this.dataStateChangeInput(this.handleDataChange('mobile'), 'person-edit-mobile-input', this.props.mobile)}
						{this.updatePersonInfoButton()}
						{this.changeEditStateButton(
							this.onEditChangeClick.bind(this, this.state.onMobileEdit, 'onMobileEdit'),
							'on-edit-city-icon',
							'http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png')}
					</form>
				</li>
			</ul>
		);
	}

	// Email tags render
	personEmailRender() {
		return (
			<h4 className="person-email">
				<img
					src="http://www.crescentinteractive.com/wp-content/uploads/2014/10/Email-Icon-Image.png"
					alt="email"
					className="email-icon" />
				{this.props.email ? (this.props.email) : ('your email address')}
				{this.props.accessToken === this.accessToken ?
					(this.changeEditStateButton(
						this.onEditChangeClick.bind(this, this.state.onEmailEdit, 'onEmailEdit'),
						'cancel-edit-city-icon',
						'http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png')) : null}
			</h4>
		);
	}

	personEmailFormRender() {
		return (
			<ul>
				<li>
					<img
						src="http://www.crescentinteractive.com/wp-content/uploads/2014/10/Email-Icon-Image.png"
						alt="email"
						className="email-icon" />
				</li>
				<li>
					<form onSubmit={this.handleUpdateData()}>
						{this.dataStateChangeInput(this.handleDataChange('email'), 'person-edit-email-input', this.props.email)}
						{this.updatePersonInfoButton()}
						{this.changeEditStateButton(
							this.onEditChangeClick.bind(this, this.state.onEmailEdit, 'onEmailEdit'),
							'on-edit-city-icon',
							'http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png')}
					</form>
				</li>
			</ul>
		);
	}

	// Skype tags render
	personSkypeRender() {
		return (
			<div className="person-skype">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Skype-icon-new.png"
					alt="skype-icon"
					className="skype-icon"/>
				{this.props.skype ? (this.props.skype) : ('your skype')}
				{this.props.accessToken === this.accessToken ?
					(this.changeEditStateButton(
						this.onEditChangeClick.bind(this, this.state.onSkypeEdit, 'onSkypeEdit'),
						'cancel-edit-city-icon',
						'http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png')) : null}
			</div>
		);
	}

	personSkypeFormRender() {
		return (
			<ul>
				<li>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Skype-icon-new.png"
						alt="skype"
						className="skype-icon" />
				</li>
				<li>
					<form onSubmit={this.handleUpdateData()}>
						{this.dataStateChangeInput(this.handleDataChange('skype'), 'person-edit-skype-input', this.props.skype)}
						{this.updatePersonInfoButton()}
						{this.changeEditStateButton(
							this.onEditChangeClick.bind(this, this.state.onSkypeEdit, 'onSkypeEdit'),
							'on-edit-city-icon',
							'http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png')}
					</form>
				</li>
			</ul>
		);
	}

	// Github tags render
	personGithubRender() {
		return (
			<ul>
				<li>
					<a href={this.props.github}>
						<img
							src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png"
							alt="skype-icon"
							className="github-icon"/>
					</a>
				</li>
				<li>
					{this.props.accessToken === this.accessToken ?
						(this.changeEditStateButton(
							this.onEditChangeClick.bind(this, this.state.onGithubEdit, 'onGithubEdit'),
							'cancel-edit-city-icon',
							'http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png')) : null}
				</li>
			</ul>

		);
	}

	personGithubFormRender() {
		return (
			<ul>
				<li>
					<img
						src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png"
						alt="skype-icon"
						className="github-icon"/>
				</li>
				<li>
					<form onSubmit={this.handleUpdateData()}>
						{this.dataStateChangeInput(this.handleDataChange('github'), 'person-edit-github-input', this.props.github)}
						{this.updatePersonInfoButton()}
						{this.changeEditStateButton(
							this.onEditChangeClick.bind(this, this.state.onGithubEdit, 'onGithubEdit'),
							'on-edit-city-icon',
							'http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png')}
					</form>
				</li>
			</ul>
		);
	}

	// Linkedin tags render
	personLinkedinRender() {
		return (
			<ul>
				<li>
					<a href={this.props.linkedin}>
						<img
							src="http://marisasanfilippo.com/wp-content/uploads/2015/07/Linkedin_circle.svg_.png"
							alt="skype-icon"
							className="linkedin-icon"/>
					</a>
				</li>
				<li>
					{this.props.accessToken === this.accessToken ?
						(this.changeEditStateButton(
							this.onEditChangeClick.bind(this, this.state.onLinkedinEdit, 'onLinkedinEdit'),
							'cancel-edit-city-icon',
							'http://www.freeiconspng.com/uploads/edit-editor-pen-pencil-write-icon--4.png')) : null}
				</li>
			</ul>
		);
	}

	personLinkedinFormRender() {
		return (
			<ul>
				<li>
					<img
						src="http://marisasanfilippo.com/wp-content/uploads/2015/07/Linkedin_circle.svg_.png"
						alt="skype-icon"
						className="linkedin-icon"/>
				</li>
				<li>
					<form onSubmit={this.handleUpdateData()}>
						{this.dataStateChangeInput(this.handleDataChange('linkedin'), 'person-edit-linkedin-input', this.props.linkedin)}
						{this.updatePersonInfoButton()}
						{this.changeEditStateButton(
							this.onEditChangeClick.bind(this, this.state.onLinkedinEdit, 'onLinkedinEdit'),
							'on-edit-city-icon',
							'http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png')}
					</form>
				</li>
			</ul>
		);
	}
	// Render helpers
	dataStateChangeInput(onChangeDataType, className, placeholder) {
		return (
			<input
				onChange={onChangeDataType}
				type="text"
				className={`person-edit-data-input ${className}`}
				placeholder={placeholder}/>
		);
	}

	changeEditStateButton(handleEditClickType, className, img_url) {
		return (
			<button
				type="reset"
				onClick={handleEditClickType}
				className='unstiled-btn'>
				<img src={img_url} alt="" className={className}/>
			</button>
		)
	}

	updatePersonInfoButton() {
		return (
			<button
				type="submit"
				className="unstiled-btn">
				<img
					className="update-data-icon"
					src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkxasy3vTR3Ns-Br-C-S338ksNJ2qTl54YxDhFIm-YZZDrhbZu" />
			</button>
		);
	}

	// Functional functions
	handleDataChange(key) {
		return function(e) {
			let state = {};
			state[key] = e.target.value;
			this.setState(state);
		}.bind(this);
	}

	onEditChangeClick(fieldToChange, helpString) {
		console.log(fieldToChange);
		console.log(helpString);
		let state = {};
		state[helpString] = !fieldToChange;
		console.log(state);
		this.setState(state);
	}

	handleUpdateData() {
		console.log();
		return function(e) {
			e.preventDefault();
			if (this.state.name) {
				this.props.updatePersonData(this.props.personId, undefined, this.state.name);
				this.setState({ onNameEdit: !this.state.onNameEdit, name: '' });
			}

			if (this.state.city) {
				this.props.updatePersonData(this.props.personId, undefined, undefined, this.state.city);
				this.setState({ onCityEdit: !this.state.onCityEdit, city: '' });
			}

			if (this.state.age) {
				this.props.updatePersonData(this.props.personId, undefined, undefined, undefined, this.state.age);
				this.setState({ onAgeEdit: !this.state.onAgeEdit, age: '' });
			}

			if (this.state.mobile) {
				this.props.updatePersonData(this.props.personId, undefined, undefined, undefined, undefined, this.state.mobile);
				this.setState({ onMobileEdit: !this.state.onMobileEdit, mobile: '' });
			}

			if (this.state.email) {
				this.props.updatePersonData(this.props.personId, undefined, undefined, undefined, undefined, undefined, this.state.email);
				this.setState({ onEmailEdit: !this.state.onEmailEdit, email: '' })
			}

			if (this.state.skype) {
				this.props.updatePersonData(
					this.props.personId, undefined, undefined, undefined, undefined, undefined, undefined, this.state.skype);
				this.setState({ onSkypeEdit: !this.state.onSkypeEdit, skype: '' })
			}

			if (this.state.github) {
				this.props.updatePersonData(
					this.props.personId, undefined, undefined, undefined, undefined, undefined, undefined, undefined, this.state.github);
				this.setState({ onGithubEdit: !this.state.onGithubEdit, github: '' })
			}

			if (this.state.linkedin) {
				this.props.updatePersonData(
					this.props.personId, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, this.state.linkedin);
				this.setState({ onLinkedinEdit: !this.state.onLinkedinEdit, linkedin: '' })
			}
		}.bind(this);
	}

	// JSX render
	render() {
		return (
			<div className="person-info">
				{this.state.onNameEdit ? (this.personNameFormRender()) : (this.personNameRender())}
				<ul>
					<li>{this.state.onCityEdit ? (this.personCityFormRender()) : (this.personCityRender())}</li>
					<li>{this.state.onAgeEdit ? (this.personAgeFormRender()) : (this.personAgeRender())}</li>
				</ul>
				{this.state.onMobileEdit ? (this.personMobileFormRender()) : (this.personMobileRender())}
				{this.state.onEmailEdit ? (this.personEmailFormRender()) : (this.personEmailRender())}
				<h4 className="bottom-person-info">
					<ul>
						<li>{this.state.onSkypeEdit ? (this.personSkypeFormRender()) : (this.personSkypeRender())}</li>
						<li>{this.state.onGithubEdit ? (this.personGithubFormRender()) : (this.personGithubRender())}</li>
						<li>{this.state.onLinkedinEdit ? (this.personLinkedinFormRender()) : (this.personLinkedinRender())}</li>
					</ul>
				</h4>
			</div>
		);
	}
}

export default connect(null, { updatePersonData })(PersonInfo);
