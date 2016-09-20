// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import {
	createAchievement, fetchAchievements, deleteAchievement, updateAchievement
} from '../../../actions/achievements';

// Shows avatar / avatar upload ability
class Achievements extends Component {
	// Default initialization
	constructor() {
		super();

		this.state = {
			description: "",
			onEdit: false,
			textToUpdate: "",
			chociedItem: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteClick = this.deleteClick.bind(this);
		this.editClick = this.editClick.bind(this);
		this.onUpdateChange = this.onUpdateChange.bind(this);
		this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ description: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createAchievement(this.props.personId, this.state.description);
	}

	deleteClick(achievementId) {
		this.props.deleteAchievement(this.props.personId, achievementId);
	}

	editClick(achievementId) {
		this.setState({
			onEdit: !this.state.onEdit,
			choicedItem: achievementId
		});
	}

	onUpdateChange(e) {
		this.setState({ textToUpdate: e.target.value });
	}

	onUpdateSubmit(e) {
		e.preventDefault();
		console.log(this.state.textToUpdate);
		console.log(this.state.choicedItem);
		console.log(this.props.personId);
		this.props.updateAchievement(this.props.personId, this.state.choicedItem, this.state.textToUpdate);
		this.setState({ textToUpdate: "", onEdit: false })
	}

	render() {
		const actual_token = localStorage.getItem('token');
		return (
			<div>
				{
					this.props.access_token === actual_token ?
						(
							<form onSubmit={this.handleSubmit}>
								<input
									onChange={this.handleChange}
									value={this.state.description}
									placeholder="Enter your achievement here"
									type="text"/>
								<button
									type="submit">
									Add Achievement
								</button>
							</form>
						)
						:
						null
				}
				<h2>Personal Achievements</h2>
				{this.props.achievements.map(achievement => {

					return (
						<div key={achievement.id}>
							{/*<div className="single-achievement">{achievement.description}</div>*/}
							{
								this.state.onEdit && achievement.id === this.state.choicedItem
									?
									(
										<form onSubmit={this.onUpdateSubmit}>
											<input
												value={this.state.textToUpdate}
												placeholder={achievement.description}
												onChange={this.onUpdateChange}
												type="text" />
											<button type="submit">Update</button>
										</form>
									)
									:
									(
										<div className="single-achievement">{achievement.description}</div>
									)
							}
							{
								this.props.access_token === actual_token
									?
									(
										<div>
											<button
												onClick={e => this.deleteClick(achievement.id)}>
												Delete
											</button>
											<button
												onClick={e => this.editClick(achievement.id)}>
												Edit
											</button>
										</div>
									)
									:
									null
							}
						</div>
					);
				})}
			</div>
		)
	}
}

export default connect(null, {
	createAchievement, fetchAchievements, deleteAchievement, updateAchievement
})(Achievements);
