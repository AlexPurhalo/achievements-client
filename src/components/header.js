// Node modules import
import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { signOutUser } from '../actions/persons';

// Shows navigation bar
class Header extends Component {
	handleClick() {
		this.props.signOutUser()
	}

	accountPage() {
		const token = localStorage.getItem('token');
		const accountId = token.substring(0, token.indexOf(':'));
		return `persons/${accountId}`
	}

	renderLinks() {
		if (!this.props.authenticated) {
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
						to="/persons/sign_up"
						className="nav-link"
						activeClassName="active">
						Create Account
					</Link>
				</li>,
				<li className="nav-item" key={3}>
					<Link
						to="/persons/sign_in"
						className="nav-link">
						Sign In
					</Link>
				</li>
			]
		} else {
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
						onClick={this.handleClick.bind(this)}
						to="/"
						className="nav-link">
						Sign Out
					</Link>
				</li>,
				<li className="nav-item" key={3}>
					<Link
						to={this.accountPage()}
						className="nav-link">
						Account
					</Link>
				</li>
			]
		}
	}

	// JSX rendering
	render() {
		//console.log(`authenticated boolean: ${this.props.authenticated}`);
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

function mapStateToProps(state) {
	return { authenticated: state.persons.authenticated }
}

export default connect(mapStateToProps, { signOutUser })(Header);
