// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Skills extends Component {
	render() {

		return (
			<div>
				{
					this.props.skills.length > 0
						?
						(
							<ul className="skills-list">
								<li className="person-skill">(</li>
								<li className="person-skill">
									{this.props.skills[0].body}&nbsp;
								</li>
								<li className="person-skill">
									{this.props.skills.slice(1, this.props.skills.length - 1).map(skill => { return ` + ${skill.body}`})}
								</li>
								<li className="person-skill">
									&nbsp;+ {this.props.skills[this.props.skills.length - 1].body}
								</li>
								<li className="person-skill">)</li>
							</ul>
						)
						:
						null
				}
			</div>
		);
	}
}

export default connect(null)(Skills)
