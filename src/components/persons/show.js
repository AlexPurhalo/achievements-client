// Node modules import
import React, { Component } from 'react';

export default class Person extends Component {
	render() {
		return <div>Single post page with {this.props.params.id} id</div>
	}
}
