import { MovieService } from './movie/movie.service';
import { TemplateService } from './template/templete.service';

export class Main {
	constructor(
		private movieService: MovieService,
		private templateService: TemplateService
	) {}

	public init() {
		this.getMovie();
	}

	public getMovie() {
		this.movieService.getMovie(181812)
		.then(response => {
			response.json().then((movie: any) => {
				console.log(movie);
				const element = document.createElement('div');
				element.innerHTML = this.templateService.buildMovieTemplate(movie);
				document.body.appendChild(element);
			})
		});
	}
}