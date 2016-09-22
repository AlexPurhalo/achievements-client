// Node modules import
import React, { Component } from 'react'
import s from './app.scss';

// Other layout stuff import
import Header from './header';

// Layout component
export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				{this.props.children}
			</div>
		);
	}
}
