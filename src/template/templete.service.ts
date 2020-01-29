import { listResponseInterface } from "../list/list.Service";

export class TemplateService {
	constructor() {}
	/*public show(){
		const element = document.createElement('div');
		element.innerHTML = this.templateService.buildNowPlayingMovieList(nowPlaying);
		document.body.appendChild(element);
	}*/
	public buildNowPlayingMovieList(nowPlayingMovieList : listResponseInterface): string{
		let movieList = '<ul>';
		nowPlayingMovieList.results.forEach((movie: any) => {
			movieList += `<li> <button onClick="show(${movie})">${movie.title}</button> </li>`;
		});
		movieList += '</ul>'
		return movieList
	}

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