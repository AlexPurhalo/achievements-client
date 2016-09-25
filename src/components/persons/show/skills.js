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
				className="btn btn-danger">X</button>
		}
	}

	render() {
		const token = localStorage.getItem('token');

		return (
			<h2 className="person-skills">
				{
					this.props.access_token  === token
						?
						(
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
						)
						:
						null
				}
				{
					this.props.skills.length > 0
						?
						(
							<ul className="skills-list">
								<li className="person-skill">(</li>
								<li className="person-skill">
									{this.props.skills[0].body}&nbsp;
									{this.deleteSkillFunc(this.props.skills[0].id)}
								</li>
								{this.props.skills.slice(1, this.props.skills.length - 1)
									.map(skill => {
										return (
											<li className="person-skill" key={skill.id}>
												&nbsp;+ {skill.body}
												{this.deleteSkillFunc(skill.id)}
											</li>
										)
									})
								}
								{
									this.props.skills.length > 1
										?
										(
											<li className="person-skill">
												&nbsp;+ {this.props.skills[this.props.skills.length - 1].body}
												{this.deleteSkillFunc(this.props.skills[this.props.skills.length - 1].id) }
											</li>
										)
										: null
								}
								<li className="person-skill">)</li>
							</ul>
						)
						:
						null
				}
			</h2>
		);
	}
}

export default connect(null, { createSkill, deleteSkill })(Skills)

