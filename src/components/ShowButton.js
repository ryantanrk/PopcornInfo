import '../css/ShowButton.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';

function ShowButton({show, imgCfg}) {
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
    
    return (
        <button className="showBtn col-md-2">
            <img className="showImg" src={imgSrc} alt={name}/>
            <span className="name"><strong>{name}</strong></span>
            <span className="oriname">{oriname}</span>
            <span className="rating">{show.vote_average} <FontAwesomeIcon icon={faStar}/></span>
        </button>
    );
}

ShowButton.propTypes = {
    show: PropTypes.object,
    imgCfg: PropTypes.object
}

export default ShowButton;