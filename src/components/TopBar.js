import "../css/TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function TopBar() {
    return (
        <div className="topbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">Popcorn Info</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn nav-link"><FontAwesomeIcon icon={faChartLine}/> Trending</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn nav-link"><FontAwesomeIcon icon={faCompass}/> Browse</button>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="btn nav-link dropdown-toggle" id="fydropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faUser}/> For You
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="fydropdown">
                                    <button className="btn dropdown-item"><FontAwesomeIcon icon={faHeart}/> Favorites</button>
                                    <button className="btn dropdown-item"><FontAwesomeIcon icon={faClock}/> Watch Later</button>
                                    <hr className="dropdown-divider"/>
                                    <button className="btn dropdown-item"><FontAwesomeIcon icon={faStar}/> Reviews</button>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex my-2">
                            <input className="form-control me-2" type="search" placeholder="Search movies/TV shows..." aria-label="Search"/>
                            <button className="btn btn-outline-success me-2" type="submit"><FontAwesomeIcon icon={ faSearch }/></button>
                        </form>
                        <div className="dropdown">
                            <button className="btn btn-success" id="accountDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faUserCircle}/>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                                <button className="btn dropdown-item">yo</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopBar;