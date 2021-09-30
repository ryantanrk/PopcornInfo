import PropTypes from 'prop-types';

function Button({text, color, onClick}) {
    return (
        <button className="btn" style={{backgroundColor: color}} onClick={onClick}>{text}</button>
    );
}

Button.defaultProps = {
    text: "Button",
    color: "black"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;