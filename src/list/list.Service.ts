import {APP_CONFIG} from './../core/app-config.constants'
import {AppConfig} from './../core/app-config.interface'

export class ListService{

    private _appConfig : AppConfig;

    constructor(){
        this._appConfig = APP_CONFIG;
    }

    public getLatest(): Promise<any>{
        return fetch(this._buildUrl(), {method:'GET'});
    }
    public _buildUrl() : string{
        return `https://api.themoviedb.org/3/movie/now_playing?api_key=${this._appConfig.API_KEY}`;
    }
}

export interface listResponseInterface{
    results : Array<any>;
    page : number ;
    total_results : number;
    dates : Array<any>;
    total_pages : number;
}