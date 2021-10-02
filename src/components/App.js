import '../css/App.css';
import {api_key} from '../config.json';
import ShowList from './ShowList';

function App() {
  	return (
    	<div className="App">
			<h2>Trending</h2>
			<div>
				<ShowList url={"https://api.themoviedb.org/3/trending/all/week?api_key=" + api_key} />
			</div>
    	</div>
  	);
}

export default App;
