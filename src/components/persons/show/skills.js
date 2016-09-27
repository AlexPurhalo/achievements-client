// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { createSkill, deleteSkill } from '../../../actions/skills';

class Skills extends Component {
	constructor() {
		super();

		this.state = { body: '' };

		this.handleSubmitSkill = this.handleSubmitSkill.bind(this);
		this.handleDeleteSkillClick = this.handleDeleteSkillClick.bind(this);
		this.handleChangeSkill = this.handleChangeSkill.bind(this);
	}

	handleChangeSkill(e) {
		this.setState({ body: e.target.value })
	}

	handleSubmitSkill(e) {
		e.preventDefault();

		this.props.createSkill(this.props.personId,  this.state.body);
		this.setState({ body: '' })
	}


	handleDeleteSkillClick(skill_id) {
		this.props.deleteSkill(this.props.personId, skill_id)
	}

	deleteSkillFunc(skill_id) {
		if (this.props.access_token === localStorage.getItem('token')) {
			return <button
				onClick={e => this.handleDeleteSkillClick(skill_id)}
				className="unstiled-btn">
				<img
					src="http://iconizer.net/files/DefaultIcon_ver_0.11/orig/cancel.png"
					alt="delete-skill-icon"
					className="delete-skill-icon" />
			</button>




		}
	}

	// Skills form render
	addSkillFormRender() {
		return (
			<form
				onSubmit={this.handleSubmitSkill}
				className="form-inline skills-adding-section">
				<input
					onChange={this.handleChangeSkill}
					value={this.state.body}
					type="text"
					placeholder="Enter skill"
					className="form-control add-skill-input"/>
				<button
					type="submit"
					className="btn btn-default">Add
				</button>
			</form>
		);
	}


	// Skills List Render
	firstSkillRender() {
		return (
			<li className="person-skill">
				{this.props.skills[0].body}
				{this.deleteSkillFunc(this.props.skills[0].id)}
				&nbsp;
			</li>
		);
	}

	lastSkillRender() {
		if (this.props.skills.length > 1) {
			return (
				<li className="person-skill">
					&nbsp;+ {this.props.skills[this.props.skills.length - 1].body}
					{this.deleteSkillFunc(this.props.skills[this.props.skills.length - 1].id) }
				</li>
			)
		}
	}

	skillsListRender() {
		return (
			<ul className="skills-list">
				<li className="person-skill">(</li>
				{this.firstSkillRender()}
				{
					this.props.skills.slice(1, this.props.skills.length - 1)
						.map(skill => {
							return (
								<li className="person-skill" key={skill.id}>
									&nbsp;+ {skill.body}
									{this.deleteSkillFunc(skill.id)}
								</li>
							)
						})
				}
				{this.lastSkillRender()}
				<li className="person-skill">)</li>
			</ul>
		);
	}

	render() {
		const token = localStorage.getItem('token');

		return (
			<h2 className="person-skills">
				{this.props.access_token  === token ? (this.addSkillFormRender()) : null}
				{ this.props.skills.length > 0 ? (this.skillsListRender()) : null }
			</h2>
		);
	}
}

export default connect(null, { createSkill, deleteSkill })(Skills)

