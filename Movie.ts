import ProductionCountries from "./ProductionCountries"
import SpokenLanguages from "./SpokenLanguages"
import Show from "./Show"
class Movie extends Show{
    adult : boolean;
    belongs_to_collection : object;
    budget : number;
    imdb_id : string;
    original_title : string;
    production_countries : ProductionCountries[];
    release_date : string;
    revenue : number;
    runtime : number;
    spoken_languages : SpokenLanguages[];
    tagline : string;
    title : string;
    video : boolean;
}