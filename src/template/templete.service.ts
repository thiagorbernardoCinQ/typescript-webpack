export class TemplateService {
	constructor() {}

	public buildMovieTemplate(movie: any): any {
		return `
			<h1>${movie.title}</h1>
			<ul>
				<li>${movie.overview}</li>
			</ul>
			<div>
				<img src="${this.buildImage(movie)}"/>
			</div>
			<div>
				Genres: ${this.buildGenres(movie)}
			</div>
		`
	}

	public buildGenres(movie: any): any {
		let genres = '';
		movie.genres.forEach((genre: any) => {
			genres += ` ${genre.name} `;
		});
		return genres;
	}

	public buildImage(movie: any): any {
		const movieBaseUrl = 'https://image.tmdb.org/t/p/w500';
		return `${movieBaseUrl}${movie.poster_path}`;
	}
}