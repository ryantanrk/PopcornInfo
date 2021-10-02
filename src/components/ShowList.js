import '../css/ShowList.css';
import PropTypes from 'prop-types';
import ShowButton from './ShowButton';
import {api_key} from '../config.json';
import {useState, useEffect} from 'react';

// async function getFromApi({movieID}) {
// 	try {
// 		let response = await fetch('https://api.themoviedb.org/3/movie/' + {movieID} + '?api_key=' + api_key);
// 		let responseJson = await response.json();
// 		return responseJson;
// 	}
// 	catch (error) {
// 		console.error(error);
// 	}
// }

function ShowList({url}) {
	const [data, setData] = useState([]);
	const [config, setConfig] = useState([]);

	//useeffect for data
	useEffect(() => {
		async function getTrending() {
			try {
				await fetch(url)
				.then(response => response.json())
				.then(data => setData(data.results));
			}
			catch (error) {
				console.error("error", error);
			}
		}

		getTrending();
	}, [url]);

	//useeffect for config
	useEffect(() => {
		async function getConfig() {
			try {
				await fetch("https://api.themoviedb.org/3/configuration?api_key=" + api_key)
				.then(response => response.json())
				.then(cfg => setConfig(cfg));
			}
			catch (error) {
				console.error("error", error);
			}
		}

		getConfig();
	}, []);

  	return (
    	<div className="ShowList">
			<div>
				{data.map((d) => <ShowButton key={d.id} show={d} imgCfg={config.images}/>)}
			</div>
    	</div>
  	);
}

ShowList.propTypes = {
	url: PropTypes.string.isRequired
}

export default ShowList;
