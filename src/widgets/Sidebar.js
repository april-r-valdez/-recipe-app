import { Link } from "react-router-dom";

import ThemeSwitcher from "../components/Utils/ThemeSwitcher";

function Sidebar() {
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <form class="d-flex mt-3 col-10 mx-auto my-auto search-box" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search for recipe" aria-label="Search"/>
                        <button className="btn btn-primary" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                </form>
                <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <div data-bs-dismiss="offcanvas">
                        <li><hr className="dropdown-divider/"/></li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li><hr className="dropdown-divider/"/></li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/create-recipe">Create Recipe</Link>
                        </li>
                        <li><hr className="dropdown-divider/"/></li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/in-stock">In Stock</Link>
                        </li>
                        <li><hr className="dropdown-divider/"/></li>
                    </div>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User Menu
                        </a>
                        <ul className="dropdown-menu">
                            <div data-bs-dismiss="offcanvas">
                                <li><Link className="dropdown-item" to="/login-page">Log In</Link></li>
                                <li><hr className="dropdown-divider/"/></li>
                                <li><Link className="dropdown-item" to="/profile-page">Profile</Link></li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
            <row>
                <ThemeSwitcher/>
            </row><br></br>
        </div>
        
    )


}

export default Sidebar;