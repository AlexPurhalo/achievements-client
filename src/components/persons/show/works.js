// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Works extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<h2 className="works-title">The works provided by me</h2>
				</div>
				<div className="row">
					<ul className="works-list">
						<li className="single-work">
							<div className="row">
								<div className="col-md-4">
									<img
										src="https://cs7057.vk.me/c7008/v7008344/4c66e/icjwsG2ozTI.jpg"
										alt="work-thumbnail"
										className="single-work-thumbnail"/>
									<div className="single-work-thumbnails-pagination-section">
										<ul className="single-work-thumbnails-pagination-list">
											<li className="single-work-thumbnails-pagination-item single-work-thumbnails-pagination-item-active">
											</li>
											<li className="single-work-thumbnails-pagination-item">
											</li>
											<li className="single-work-thumbnails-pagination-item">
											</li>
											<li className="single-work-thumbnails-pagination-item">
											</li>
										</ul>
									</div>
								</div>
								<div className="col-md-8">
									<h3 className="single-work-title">Personal Achievements</h3>
									<p className="single-work-description">
										This is pretty interesting web-site that helps you provide the most required information about
										yourself as about developer, quality assurance, recruiter, etc.. It just like as resume and portfolio
										together, when you want describe all your skills and achievements to show somebody this gonna safe
										your time. This also useful if you aren't looking for introducing your abilities just in this moment.
										You can collect data about you and your works just when you've achieved some new...
									</p>
									<div className="single-work-additional-info">
										<div className="row">
											<div className="col-md-9">
												<ul className="single-work-additional-info-skills-list">
													<li className="single-work-additional-info-skill">React</li>
													<li className="single-work-additional-info-skill">Ruby on Rails</li>
													<li className="single-work-additional-info-skill">Bootstrap</li>
													<li className="single-work-additional-info-skill">Angular 2</li>
												</ul>
											</div>
											<div className="col-md-3">
												<div className="single-work-additional-info-date">08.10.2016</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="single-work">
							<div className="row">
								<div className="col-md-4">
									<img
										src="https://hd.unsplash.com/photo-1455275892767-005ebb186764"
										alt="work-thumbnail"
										className="single-work-thumbnail"/>
									<div className="single-work-thumbnails-pagination-section">
										<ul className="single-work-thumbnails-pagination-list">
											<li className="single-work-thumbnails-pagination-item">
											</li>
											<li className="single-work-thumbnails-pagination-item">
											</li>
											<li className="single-work-thumbnails-pagination-item single-work-thumbnails-pagination-item-active">
											</li>
											<li className="single-work-thumbnails-pagination-item">
											</li>
										</ul>
									</div>
								</div>
								<div className="col-md-8">
									<h3 className="single-work-title">Some Another Project</h3>
									<p className="single-work-description">
										Pug af yr fashion axe chia, schlitz mustache fingerstache prism irony microdosing ramps aesthetic. Normcore pork belly PBR&B vaporware sriracha lyft pickled health goth, succulents iceland. Fingerstache sustainable synth, fam banh mi heirloom meh. Stumptown
									</p>
									<div className="single-work-additional-info">
										<div className="row">
											<div className="col-md-9">
												<ul className="single-work-additional-info-skills-list">
													<li className="single-work-additional-info-skill">Ruby on Rails</li>
													<li className="single-work-additional-info-skill">Bootstrap</li>
													<li className="single-work-additional-info-skill">JQuery</li>
												</ul>
											</div>
											<div className="col-md-3">
												<div className="single-work-additional-info-date">08.10.2016</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="row works-pagination">
					<div className="col-md-3">
						<ul className="works-pagination-list">
							<li className="works-pagination-item">
								<button className="unstiled-btn change-works-page-button">Previous</button>
							</li>
							<li> | </li>
							<li className="works-pagination-item">
								<button className="unstiled-btn change-works-page-button">Next</button>
							</li>
						</ul>
					</div>
					<div className="col-md-6"></div>
					<div className="col-md-3">
						<p className="works-cont">Works Count: 3	</p>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null)(Works);
