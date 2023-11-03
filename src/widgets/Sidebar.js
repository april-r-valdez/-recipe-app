import { Link } from "react-router-dom";

import ThemeSwitcher from "../components/Utils/ThemeSwitcher";

function Sidebar() {
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <form class="d-flex mt-3 mx-auto my-auto search-box" role="search">
                    <input className="form-control me-2" type="search" placeholder="Ex: lasagna, pasta..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                    <li className="nav-item">
                        <Link className="nav-link active" to="/input-portal">Input Ingredients Portal</Link>
                    </li>
                    <li><hr className="dropdown-divider/"/></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User Menu
                        </a>
                        <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/login-page">Log In</Link></li>
                        <li><hr className="dropdown-divider/"/></li>
                        <li><Link className="dropdown-item" to="/profile-page">Profile</Link></li>
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