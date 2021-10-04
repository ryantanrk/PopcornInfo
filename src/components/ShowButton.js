import '../css/ShowButton.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

function ShowButton({show, imgCfg, typeA}) {
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
    var imgSrc;
    if (imgCfg) {
        imgSrc = imgCfg.base_url + imgCfg.backdrop_sizes[0] + show.poster_path;
    }

    //get type
    var type = show.media_type;

    if (!type) {
        type = typeA;
    }
    
    return (
        <Link to={'/' + type + '/' + show.id}>
            <button className="showBtn col-md-2">
                <img className="showImg" src={imgSrc} alt={name}/>
                <span className="name"><strong>{name}</strong></span>
                <span className="oriname">{oriname}</span>
                <span className="rating">{show.vote_average} <FontAwesomeIcon icon={faStar}/></span>
            </button>
        </Link>
    );
}

ShowButton.propTypes = {
    show: PropTypes.object,
    imgCfg: PropTypes.object,
    typeA: PropTypes.string
}

export default ShowButton;