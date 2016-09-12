// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Changes pages number that will be fetched
class Pagination extends Component {
	// Default initialization
	constructor(props) {
		super(props);

		this.state = { pageNum: 1 };

		this.nextPageClick = this.nextPageClick.bind(this);
		this.prevPageClick = this.prevPageClick.bind(this);
		this.firstPageClick = this.firstPageClick.bind(this);
		this.lastPageClick = this.lastPageClick.bind(this);
		this.choicePageClick = this.choicePageClick.bind(this);
	}

	// Changes current page to next step
	prevPageClick() {
		this.props.fetchPersons(this.state.pageNum - 1);
		this.setState({pageNum: this.state.pageNum - 1});
	}

	// Changes current page on step back
	nextPageClick() {
		this.props.fetchPersons(this.state.pageNum + 1);
		this.setState({ pageNum: this.state.pageNum + 1});
	}

	// Bring to first page
	firstPageClick() {
		this.props.fetchPersons(1);
		this.setState({pageNum: 1});
	}

	// Bring to last page
	lastPageClick() {
		this.props.fetchPersons(this.props.pagesCount);
		this.setState({pageNum: this.props.pagesCount});

	}

	// Changes current page to passed number
	choicePageClick(pageNum) {
		console.log(`value: ${pageNum}`)
		this.props.fetchPersons(pageNum);
		this.setState({pageNum: pageNum})
	}

	// Shows button that calls method for page changing to next
	prevPage() {
		return (
			<li className={this.state.pageNum < 2 ? "page-item disabled" : "page-item"}>
				<button className="page-link" aria-label="Previous" onClick={this.prevPageClick}>
					<span aria-hidden="true">&laquo;</span>
					<span className="sr-only">Previous</span>
				</button>
			</li>
		);
	}

	// Shows button that calls method for page changing to previous
	nextPage() {
		console.log(`pages count: ${this.props.pagesCount}`);
		return (
			<li className={this.state.pageNum === this.props.pagesCount ? "page-item disabled" : "page-item"} >
				<button className="page-link" aria-label="Next" onClick={this.nextPageClick}>
					<span aria-hidden="true">&raquo;</span>
					<span className="sr-only">Next</span>
				</button>
			</li>
		);
	}

	// Pages
	pageNumbers(pageNum) {
		return (
			<li className={pageNum === this.state.pageNum ? "page-item active" : "page-item"}>
				<button className="page-link" value={pageNum} onClick={e => this.choicePageClick(pageNum)}>{pageNum}</button>
			</li>
		);
	}

	// First page
	firstPage() {
		return (
			<li className="page-item">
				<button
					onClick={this.firstPageClick}
					className="page-link">
					1...</button>
			</li>
		);
	}

	// Last page
	lastPage() {
		return (
			<li className="page-item">
				<button
					onClick={this.lastPageClick}
					className="page-link">
					...{this.props.pagesCount}</button>
			</li>
		);
	}

	// JSX rendering
	render() {
		console.log(this.state.pageNum);
		return (
			<nav aria-label="...">
				<ul className="pagination">
					{this.prevPage()}
					{this.state.pageNum >= 4 ? (this.firstPage()) : null}
					{this.state.pageNum > 2 ? this.pageNumbers(this.state.pageNum - 2) : null}
					{this.state.pageNum > 1 ? this.pageNumbers(this.state.pageNum - 1) : null}
					{this.pageNumbers(this.state.pageNum)}
					{this.state.pageNum + 1 <= this.props.pagesCount ? this.pageNumbers(this.state.pageNum + 1) : null}
					{this.state.pageNum + 2 <= this.props.pagesCount ? this.pageNumbers(this.state.pageNum + 2) : null}
					{this.state.pageNum + 2 < this.props.pagesCount ? (this.lastPage()) : null}
					{this.nextPage()}
				</ul>
			</nav>
		);
	}
}

// Pagination.propTypes = {
// 	fetchPersonsPages: React.PropTypes.func.isRequired
// };

function mapStateToProps(state) {
	return {
		persons: state.persons.all_persons,
		pagesInfo: state.persons.pages_info
	}
}

export default connect(mapStateToProps)(Pagination);
