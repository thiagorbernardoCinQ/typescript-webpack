import Genres from "./Genres"
import ProductionCompanies from "./ProductionCompanies"

export default class Show{
    backdrop_path : string;
    genres : Genres[];
    homepage : string;
    id : number;
    original_language : string;
    overview : string;
    popularity : number;
    poster_path : string;
    production_companies : ProductionCompanies[];
    status : string;
    vote_average : number;
    vote_count : number;
}