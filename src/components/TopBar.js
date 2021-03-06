import "../css/TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSearch, faFilm, faUserPlus, faHeart, faClock, faStar, faTv, faUserCircle, faHome, faInfo } from "@fortawesome/free-solid-svg-icons";

function TopBar() {
    return (
        <div className="topbar">
            <nav id="mynav" className="mynav navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container-fluid">
                    <span className="navbar-brand">Popcorn Info</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="btn nav-link"><FontAwesomeIcon icon={faHome}/> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movies" className="btn nav-link"><FontAwesomeIcon icon={faFilm}/> Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/series" className="btn nav-link"><FontAwesomeIcon icon={faTv}/> Series</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="btn nav-link"><FontAwesomeIcon icon={faInfo}/> About</Link>
                            </li>
                        </ul>
                        <form className="d-flex my-2">
                            <input className="form-control me-2" type="search" placeholder="Search shows..." aria-label="Search"/>
                            <button className="btn btn-outline-success me-2" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                        </form>
                        <div className="dropdown">
                            <button className="btn btn-success" id="accountDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faUserCircle}/>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="accountDropdown">
                                <button className="btn dropdown-item"><FontAwesomeIcon icon={faUserPlus}/> Log in</button>
                                <hr className="dropdown-divider"/>
                                <button className="btn dropdown-item"><FontAwesomeIcon icon={faHeart}/> Favorites</button>
                                <button className="btn dropdown-item"><FontAwesomeIcon icon={faClock}/> Watch Later</button>
                                <hr className="dropdown-divider"/>
                                <button className="btn dropdown-item"><FontAwesomeIcon icon={faStar}/> Reviews</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopBar;