// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePerson } from '../../actions/persons';

class Person extends Component {
	componentWillMount() {
		this.props.fetchSinglePerson(this.props.params.id);
	}

	render() {
		return <div>Single post page with {this.props.params.id} id</div>
	}
}

export default connect(null, { fetchSinglePerson })(Person);
