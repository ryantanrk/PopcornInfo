import "../css/TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function TopBar() {
    return (
        <div class="topbar">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <span class="navbar-brand">Popcorn Info</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="btn nav-link">Trending</button>
                            </li>
                            <li class="nav-item">
                                <button class="btn nav-link">Browse</button>
                            </li>
                            <li class="nav-item dropdown">
                                <button class="btn nav-link dropdown-toggle" id="fydropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">For You</button>
                                <ul class="dropdown-menu" aria-labelledby="fydropdown">
                                    <button class="btn dropdown-item">Favorites</button>
                                    <button class="btn dropdown-item">Watch Later</button>
                                    <hr class="dropdown-divider"/>
                                    <button class="btn dropdown-item">Reviews</button>
                                </ul>
                            </li>
                            
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search movies..." aria-label="Search"/>
                            <button class="btn btn-outline-success me-2" type="submit"><FontAwesomeIcon icon={ faSearch }/></button>
                        </form>
                        <button class="btn btn-success">Account</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopBar;