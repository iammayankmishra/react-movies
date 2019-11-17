import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import Search from '../components/Search';

export default class Navbar extends React.Component {
	render() {
		const url = window.location.pathname;
		return (
			<div>
				<div id="navbar" className="navbar">
					<Route
						render={({ history }) => (
							<div
								style={{
									color: 'rgb(0, 252, 135)',
									fontSize: '20px',
									paddingLeft: '10px',
									cursor: 'pointer'
								}}
								onClick={() => history.push(`/`)}
							>
								Home
							</div>
						)}
					/>
					<div style={{ flex: 1, color: 'rgb(0, 252, 135)', fontSize: '20px' }}>Welcome to React Movies</div>
				</div>
				{url === '/' ? <Search /> : ''}
			</div>
		);
	}
}
