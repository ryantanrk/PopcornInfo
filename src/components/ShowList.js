import '../css/ShowList.css';
import PropTypes from 'prop-types';
import ShowButton from './ShowButton';
import {api_key} from '../config.json';
import {useState, useEffect} from 'react';

function ShowList({url, type}) {
	const [data, setData] = useState([]);
	const [config, setConfig] = useState([]);
	//pending states
	const [dataIsPending, setDPending] = useState(true);
	const [configIsPending, setCPending] = useState(true);

	//useeffect for data
	useEffect(() => {
		const abort = new AbortController();

		async function getData() {
			await fetch(url, {signal: abort.signal})
			.then(response => {
				if (!response.ok) {
					throw Error('data fetch failed');
				}
				return response.json();
			})
			.then(data => {
				setData(data.results);
				setDPending(false);
			})
			.catch(e => {
				if (e.name === "AbortError") {
					console.log("fetch aborted");
				}
				else {
					console.log(e.message);
				}
			});
		}

		getData();

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
				.then(cfg => {
					setConfig(cfg);
					setCPending(false);
				})
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
			{(dataIsPending && configIsPending) && <div>Loading...</div>}
			{(!dataIsPending && !configIsPending) && (data.map((d) => <ShowButton key={d.id} show={d} typeA={type} imgCfg={config.images}/>))}
    	</div>
  	);
}

ShowList.propTypes = {
	url: PropTypes.string.isRequired,
	type: PropTypes.string
}

export default ShowList;
