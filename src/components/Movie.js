import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {api_key} from '../config.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function Movie() {
    //get show first
    const { id } = useParams();
    const [show, setShow] = useState([]);
	const [name, setName] = useState([]);
	const [oriname, setOriname] = useState([]);
	const [imgUrl, setImg] = useState([]);

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
				.then(show => {
					setShow(show);
					//title of the show can be show.name or show.title depending if the show is a series or movie
					var name = show.name ? show.name : show.title;
					setName(name);

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

					setOriname(oriname);
				})
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
				.then(cfg => {
					var imgCfg = cfg.images;
					//get image
					var imgSrc;
					if (imgCfg) {
						imgSrc = imgCfg.base_url + imgCfg.backdrop_sizes[0] + show.poster_path;
					}
					setImg(imgSrc);
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
	}, [show]);

    return (
        <div className="movieView">
            <h1>Movie Info</h1>
            <div className="col-md-4">
				<img className="movieImg" src={imgUrl} alt={name}/>
				<span className="title">{name}</span>
				<span className="oriname">{oriname}</span>
				<span className="rating"><FontAwesomeIcon icon={faStar}/> {show.vote_average}</span>
				<span className="description">Overview: {show.overview}</span>
				<span className="releaseDate">Release Date: {show.release_date}</span>
				<span className="lang">Language: {show.original_language}</span>
            </div>
        </div>
    );
}

Movie.propTypes = {
    show: PropTypes.object
}

export default Movie;