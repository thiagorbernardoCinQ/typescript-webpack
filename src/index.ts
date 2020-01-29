import * as _ from 'lodash';
import { MovieService } from './movie/movie.service';
import { TemplateService } from './template/templete.service';
import { ListService } from './list/list.Service';
import { Main } from './main';

const movieService: MovieService = new MovieService();
const templateService: TemplateService = new TemplateService();
const listService: ListService = new ListService();
const main = new Main(movieService, templateService, listService);

main.init();
