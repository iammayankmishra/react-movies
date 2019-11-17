import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';

//const imageUrl = 'https://image.tmdb.org/t/p';

export default {
	getTrendingMovies: () =>
		axios.get(`${apiUrl}/trending/movie/week`, {
			params: {
				api_key: '2a5dc9a788f16ea4bcd4fb38ef55562b',
				language: 'en-US',
				sort_by: 'popularity.desc',
				page: '1'
			}
		}),
	getMovie: (id) =>
		axios.get(`${apiUrl}/movie/${id}`, {
			params: {
				api_key: '2a5dc9a788f16ea4bcd4fb38ef55562b',
				language: 'en-US'
			}
		}),
	getSearchedMovies: (query) =>
		axios.get(`${apiUrl}/search/movie`, {
			params: {
				api_key: '2a5dc9a788f16ea4bcd4fb38ef55562b',
				query: query,
				language: 'en-US'
			}
		})
};
