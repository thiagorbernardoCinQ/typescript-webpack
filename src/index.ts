import * as _ from 'lodash';
import { MovieService } from './movie/movie.service';
import { TemplateService } from './template/templete.service';
import { Main } from './main';

const movieService: MovieService = new MovieService();
const templateService: TemplateService = new TemplateService();
const main = new Main(movieService, templateService);

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'Oi Raquel'
	return element;
}
document.body.appendChild(component());

main.init();
