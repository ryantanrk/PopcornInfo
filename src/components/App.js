import '../css/App.css';
import Show from './Show';
import {api_key} from '../config.json';
import {useState, useEffect} from 'react';

async function getFromApi({movieID}) {
	try {
		let response = await fetch('https://api.themoviedb.org/3/movie/' + {movieID} + '?api_key=' + api_key);
		let responseJson = await response.json();
		return responseJson;
	}
	catch (error) {
		console.error(error);
	}
}

function App() {
	const [data, setData] = useState([]);
	const [config, setConfig] = useState([]);

	//useeffect for data
	useEffect(() => {
		async function getTrending() {
			try {
				let response = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=' + api_key);
				let responseJson = await response.json();
				setData(responseJson.results);
			}
			catch (error) {
				console.error("error", error);
			}
		}

		getTrending();
	}, []);

	//useeffect for config
	useEffect(() => {
		async function getConfig() {
			try {
				let response = await fetch('https://api.themoviedb.org/3/configuration?api_key=' + api_key);
				let responseJson = await response.json();
				setConfig(responseJson);
			}
			catch (error) {
				console.error("error", error);
			}
		}

		getConfig();
	}, []);

  	return (
    	<div className="App">
			<h2>Trending</h2>
			{data.map((d) => <Show key={d.id} show={d} imgCfg={config.images}/>)}
    	</div>
  	);
}

export default App;
