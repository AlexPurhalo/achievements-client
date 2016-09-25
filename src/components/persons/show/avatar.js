// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Avatar extends Component {
	render() {
		return (
			<div className="thumbnail">
				<img src={`http://localhost:3000/${this.props.imageUrl}`} alt="Image" />
			</div>
		);
	}
}

export default connect(null)(Avatar);
