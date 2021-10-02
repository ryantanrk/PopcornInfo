import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {api_key} from '../config.json';

function Movie() {
    //get show first
    const { id } = useParams();
    const [show, setShow] = useState([]);
    const [imgCfg, setConfig] = useState([]);

    //useeffect for show
    useEffect(() => {
        const abort = new AbortController();
        async function getShow() {
			try {
				await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + api_key, {signal: abort.signal})
				.then(response => {
					if (!response.ok) {
						throw Error('show fetch failed');
					}
					return response.json();
				})
				.then(show => setShow(show))
				.catch(e => {
					if (e.name === "AbortError") {
						console.log('show fetch aborted');
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

		getShow();

		return () => abort.abort();
    }, [id]);

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
				.then(cfg => setConfig(cfg.images))
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

    //title of the show can be show.name or show.title depending if the show is a series or movie
    var name = show.name ? show.name : show.title;

    //get original title if possible
    var oriname;
    if (show.original_name) {
        oriname = show.original_name;
    }
    else if (show.original_title) {
        oriname = show.original_title;
    }

    //if original title is equal to title then clear original title
    if (oriname === name) {
        oriname = "";
    }

    //get image
    // var imgSrc;
    // if (imgCfg) {
    //     imgSrc = imgCfg.base_url + imgCfg.backdrop_sizes[0] + show.poster_path;
    // }
	console.log(imgCfg.base_url);

    return (
        <div className="movieView">
            <h1>Movie Info</h1>
            <div className="col-md-4">
                {show.title}
            </div>
        </div>
    );
}

Movie.propTypes = {
    show: PropTypes.object
}

export default Movie;