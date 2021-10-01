import PropTypes from 'prop-types';

function MovieButton({movie, color, onClick}) {
    return (
        <div>
            <button style={{backgroundColor: color}} onClick={onClick}>
                <img src={movie.image} alt={movie.title}/>
            </button>

            <button class="btn btn-link">{movie.title}</button>
        </div>
    );
}

MovieButton.defaultProps = {
    text: "Button",
    color: "black"
}

MovieButton.propTypes = {
    movie: PropTypes.object,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default MovieButton;