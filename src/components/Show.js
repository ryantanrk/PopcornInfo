import '../css/Show.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';

function Show({show, imgCfg}) {
    //title of the show can be show.name or show.title depending if tv show / movie
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
        <button className="showBtn col-2">
            <img className="showImg" src={imgSrc} alt={name}/>
            <span className="name">{name}</span>
            <span className="oriname">{oriname}</span>
            <pre>{show.vote_average} <FontAwesomeIcon icon={faStar}/></pre>
        </button>
    );
}

Show.propTypes = {
    show: PropTypes.object,
    imgCfg: PropTypes.object
}

export default Show;