// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { fetchPersons } from '../../actions/persons';

class Persons extends Component {
	componentWillMount() {
		// console.log('this would be a good time to call an action creator to fetch posts');
		this.props.fetchPersons();
	}

	render() {
		return <div className="persons-list">There gonna be list of people!</div>;
	}
}

export default connect(null, { fetchPersons })(Persons);
