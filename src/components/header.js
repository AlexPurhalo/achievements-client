// Node modules import
import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router';

// Shows navigation bar
export default class Header extends Component {
	renderLinks() {
		return [
			<li className="nav-item" key={1}>
				<IndexLink
					to="/"
					className="nav-link"
					activeClassName="active">
					Persons
				</IndexLink>
			</li>,
			<li className="nav-item" key={2}>
				<Link
					to="persons/new"
					className="nav-link"
					activeClassName="active">
					Create Account
				</Link>
			</li>
		]
	}

	// JSX rendering
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-light">
					<Link to="/" className="navbar-brand">Achievements</Link>
					<ul className="nav navbar-nav">
						{this.renderLinks()}
					</ul>
				</nav>
			</div>
		);
	}
}
