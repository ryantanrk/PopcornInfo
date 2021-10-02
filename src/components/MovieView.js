import {api_key} from '../config.json';
import ShowList from './ShowList';

function MovieView() {
    return (
        <div className="movieView">
            <h1>Trending Movies</h1>
            <ShowList url={"https://api.themoviedb.org/3/trending/movie/week?api_key=" + api_key}/>
        </div>
    );
}

export default MovieView;