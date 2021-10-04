import '../css/Movie.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {api_key} from '../config.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faHeart, faLink, faPlus} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faTwitter, faTumblr, faDiscord, faReddit} from '@fortawesome/free-brands-svg-icons';

function Tv() {
    //get show first
    const { id } = useParams();
    const [show, setShow] = useState([]);
	const [name, setName] = useState([]);
	const [oriname, setOriname] = useState([]);
	const [imgUrl, setImg] = useState([]);
	const [showGenre, setShowGenre] = useState([]);

    //useeffect for show
    useEffect(() => {
        const abort = new AbortController();
        async function getShow() {
			try {
				await fetch('https://api.themoviedb.org/3/tv/' + id + '?api_key=' + api_key, {signal: abort.signal})
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

					//get genres
					//get show genre ids
					var genres = show.genres;
					setShowGenre(genres);
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

    //useeffect for getting image url
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
						imgSrc = imgCfg.base_url + imgCfg.backdrop_sizes[1] + show.poster_path;
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
			<div className="row">
				<div className="col-md-4">
					<div className="row d-flex justify-content-center">
						<img className="movieImg" src={imgUrl} alt={name}/>
					</div>
					<div className="row add mt-3">
						<button className="btn btn-success col-5 mx-2"><FontAwesomeIcon icon={faHeart}/> Favourite</button>
						<button className="btn btn-primary col-5 mx-2"><FontAwesomeIcon icon={faPlus}/> Watch Later</button>
					</div>
					<div className="socials mt-2">
						<button className="btn-social btn-social-fb btn mx-1"><FontAwesomeIcon icon={faFacebookF}/></button>
						<button className="btn-social btn-social-twt btn mx-1"><FontAwesomeIcon icon={faTwitter}/></button>
						<button className="btn-social btn-social-tblr btn mx-1"><FontAwesomeIcon icon={faTumblr}/></button>
						<button className="btn-social btn-social-rdt btn mx-1"><FontAwesomeIcon icon={faReddit}/></button>
						<button className="btn-social btn-social-dc btn mx-1"><FontAwesomeIcon icon={faDiscord}/></button>
						<button className="btn-social btn-social-sl btn mx-1"><FontAwesomeIcon icon={faLink}/></button>
					</div>
				</div>
				<div className="details col-md-8">
					<span className="title">{name}</span>
					<span className="year"> ({new Date(show.first_air_date).getFullYear()})</span>
					<span className="rating"><FontAwesomeIcon icon={faStar}/> {show.vote_average}</span>
					<span className="oriname">{oriname}</span>
					<span className="ep">Seasons: {show.number_of_seasons}, Episodes: {show.number_of_episodes}</span>
					<span className="genre">{showGenre.map((g) => g.name).join(", ")}</span>
					<br/>
					<span className="description">{show.overview}</span>
					<br/>
					<span className="releasedate">First Aired: {show.first_air_date}</span>
					<span className="lang">Language: {show.original_language}</span>
				</div>
			</div>
        </div>
    );
}

Tv.propTypes = {
    show: PropTypes.object
}

export default Tv;