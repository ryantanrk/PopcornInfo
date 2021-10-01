import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';

function Show({show}) {
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

    
    return (
        <div>
            <button className="btn btn-light">
                <img src="" alt={name}/>
                <br/>
                <span className="name">{name}</span>
                <br/>
                <span className="oriname">{oriname}</span>
                <pre>{show.vote_average} <FontAwesomeIcon icon={faStar}/></pre>
            </button>
        </div>
    );
}

Show.defaultProps = {
    text: "Button",
}

Show.propTypes = {
    show: PropTypes.object,
}

export default Show;