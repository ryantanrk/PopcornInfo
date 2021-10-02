import '../css/ShowList.css';
import PropTypes from 'prop-types';
import ShowButton from './ShowButton';
import {api_key} from '../config.json';
import {useState, useEffect} from 'react';

function ShowList({url}) {
	const [data, setData] = useState([]);
	const [config, setConfig] = useState([]);

	//useeffect for data
	useEffect(() => {
		const abort = new AbortController();

		async function getTrending() {
			await fetch(url, {signal: abort.signal})
			.then(response => {
				if (!response.ok) {
					throw Error('data fetch failed');
				}
				return response.json();
			})
			.then(data => setData(data.results))
			.catch(e => {
				if (e.name === "AbortError") {
					console.log("fetch aborted");
				}
				else {
					console.log(e.message);
				}
			});
		}

		getTrending();

		return () => abort.abort();
	}, [url]);

	//useeffect for config
	useEffect(() => {
		const abort = new AbortController();

		async function getConfig() {
			try {
				await fetch("https://api.themoviedb.org/3/configuration?api_key=" + api_key, {signal: abort.signal})
				.then(response => {
					if (!response.ok) {
						throw Error('config fetch failed');
					}
					return response.json();
				})
				.then(cfg => setConfig(cfg))
				.catch(e => {
					if (e.name === "AbortError") {
						console.log('config fetch aborted');
					}
					else {
						console.log(e.message);
					}
				});
			}
			catch (error) {
				console.error("error", error);
			}
		}

		getConfig();

		return () => abort.abort();
	}, []);

  	return (
    	<div className="ShowList">
			{data.map((d) => <ShowButton key={d.id} show={d} imgCfg={config.images}/>)}
    	</div>
  	);
}

ShowList.propTypes = {
	url: PropTypes.string.isRequired
}

export default ShowList;
