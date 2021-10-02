import {api_key} from '../config.json';
import ShowList from './ShowList';

function SeriesView() {
    return (
        <div className="seriesView">
            <h1>Trending Series</h1>
            <ShowList url={"https://api.themoviedb.org/3/trending/tv/week?api_key=" + api_key}/>
        </div>
    );
}

export default SeriesView;