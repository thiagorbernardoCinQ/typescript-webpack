import * as _ from 'lodash';
import { MovieService } from './movie/movie.service';
import { TemplateService } from './template/templete.service';

const movieService: MovieService = new MovieService();
const templateService: TemplateService = new TemplateService();

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'Oi Raquel'
	return element;
}

function getMovie() {
	movieService.getMovie(181812)
		.then(response => {
			response.json().then((movie: any) => {
				console.log(movie);
				const element = document.createElement('div');
				element.innerHTML = templateService.buildMovieTemplate(movie);
				document.body.appendChild(element);
			})
		});

}

getMovie();
document.body.appendChild(component());
