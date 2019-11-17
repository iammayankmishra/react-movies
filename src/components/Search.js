import React from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import API from '../util/API';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			variable: false,
			data: []
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleClick() {
		this.setState({ variable: !this.state.variable });
	}

	async handleSearch(e) {
		let query = e.target.value;
		if (query.length > 2) {
			const data = API.getSearchedMovies(query)
				.then((response) => response.data)
				.then((data) => this.setState({ data: data.results }));
		} else {
			this.setState({ data: [] });
		}
	}

	render() {
		return (
			<div>
				<div className="searchStyle">
					<input
						type="text"
						id="searchInput"
						className={this.state.variable ? 'focused' : ''}
						onChange={this.handleSearch}
						placeholder="Search"
					/>
					<button
						id="searchButton"
						className={this.state.variable ? 'active' : ''}
						onClick={this.handleClick}
					>
						<span role="img" aria-label="">
							🔍
						</span>
					</button>
				</div>
				{this.state.variable ? (
					<div id="searchResults">
						{this.state.data !== [] ? (
							this.state.data.map((movie, index) => {
								if (index < 10) {
									return (
										<Route
											key={movie.id}
											render={({ history }) => (
												<div
													style={{ display: 'flex', marginTop: '5px' }}
													onClick={() => {
														history.push(`/${movie.id}`);
													}}
												>
													<img
														src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
														width="50"
														height="50"
														style={{ margin: '10px' }}
													/>
													<span style={{ marginTop: '10px', marginLeft: '10px' }}>
														{movie.title}
													</span>
												</div>
											)}
										/>
									);
								}
							})
						) : null}
					</div>
				) : null}
			</div>
		);
	}
}
