import React from 'react';
import Navbar from './Navbar';
import '../App.css';
import API from '../util/API';

export default class Details extends React.Component {
	constructor(props) {
		super(props);
		const id = window.location.pathname.split('/')[1];
		this.state = {
			movieData: {},
			id: id != '' ? id : ''
		};
	}

	async componentDidMount() {
		const data = await API.getMovie(this.state.id);
		this.setState({ movieData: data.data });
	}

	render() {
		let posterIMG = 'https://image.tmdb.org/t/p/w500' + this.state.movieData.poster_path;
		return (
			<React.Fragment>
				<Navbar />
				<div className="details-container">
					<div className="image">
						<img src={posterIMG} width="325px" style={{ borderRadius: '10px' }} />
					</div>
					<div className="details">
						<h1>{this.state.movieData.title}</h1>
						<div style={{ color: '#00FC87', marginTop: '-15px', fontSize: '25px' }}>
							{this.state.movieData.tagline}
						</div>
						<h4>Rating: {this.state.movieData.vote_average}/10</h4>
						<p>{this.state.movieData.overview}</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
