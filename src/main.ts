import { MovieService } from './movie/movie.service';
import { TemplateService } from './template/templete.service';
import { ListService } from './list/list.Service';
import { listResponseInterface } from './list/list.Service'

export class Main {
	constructor(
		private movieService: MovieService,
		private templateService: TemplateService,
		private listService : ListService
	) {}

	public init() {
		this.getMoviesNowPlaying();
	}

	public getMoviesNowPlaying(){
		this.listService.getLatest().then((nowPlaying) => {
			nowPlaying.json().then((nowPlaying:listResponseInterface) =>{
				const element = document.createElement('div');
				element.innerHTML = this.templateService.buildNowPlayingMovieList(nowPlaying);
				document.body.appendChild(element);
			});
		});
	}

	public getMovie(id : any) {
		this.movieService.getMovie(id)
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