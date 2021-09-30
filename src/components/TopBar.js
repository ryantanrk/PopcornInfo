import "../css/TopBar.css";

function TopBar() {
    return (
        <div className="topbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">Popcorn Info</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav">
                            <li className="nav-item">
                                <button className="btn nav-link">Trending</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn nav-link">Browse</button>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="btn nav-link dropdown-toggle" id="fydropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">For You</button>
                            </li>
                            <div className="dropdown-menu" aria-labelledby="fydropdown">
                                <button className="btn dropdown-item">Favorites</button>
                                <button className="btn dropdown-item">Watch Later</button>
                                <hr className="dropdown-divider"/>
                                <button className="btn dropdown-item">Reviews</button>
                            </div>
                        </ul>
                        <form className="d-flex"></form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopBar;