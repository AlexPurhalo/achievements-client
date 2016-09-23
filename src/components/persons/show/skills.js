// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Skills extends Component {
	render() {
		return (
			<div className="person-skills">
				{
					this.props.skills.map(skill => {
						return <div key={skill.id}>{skill.body}</div>
					})
				}
			</div>
		);
	}
}

export default connect(null)(Skills)
