import { APP_CONFIG } from './../core/app-config.constants';
import { AppConfig } from '../core/app-config.interface';

export class MovieService {

	private _appConfig: AppConfig;

	constructor() {
		this._appConfig = APP_CONFIG;
	}

	public getMovie(id: number): Promise<any> {
		return fetch(this._buildUrl(id), { method: "GET" });
	}

	private _buildUrl(movieId: number): string {
		return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this._appConfig.API_KEY}`;
	}
}