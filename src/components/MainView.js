import {api_key} from '../config.json';
import ShowList from './ShowList';

function MainView() {
    return (
        <div className="mainView">
            <h1>Trending</h1>
            <ShowList url={"https://api.themoviedb.org/3/trending/all/week?api_key=" + api_key}/>
        </div>
    );
}

export default MainView;