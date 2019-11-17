import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import API from '../util/API';
import Navbar from './Navbar';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			page: 1,
			searchFocus: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	async componentDidMount() {
		const movies = await API.getTrendingMovies();
		this.setState({ data: movies.data.results });
	}

	async handleClick(id) {
		const movie = await API.getMovie(id);
		window.location = `https://www.imdb.com/title/${movie.data.imdb_id}`;
	}

	toggleSearch() {
		this.setState({ searchFocus: !this.state.searchFocus });
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					{this.state.data.map((movie) => (
						<Route
							key={movie.id}
							render={({ history }) => (
								<div className="card" onClick={() => history.push(`/${movie.id}`)}>
									<div>
										<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
									</div>
									<div style={{ fontSize: 16, color: '#80868b' }}>IMDB: {movie.vote_average}</div>
								</div>
							)}
						/>
					))}
				</div>
			</div>
		);
	}
}
