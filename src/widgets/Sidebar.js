
function Sidebar() {
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <form class="d-flex mt-3 mx-auto my-auto search-box" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li><hr className="dropdown-divider/"/></li>
                <li className="nav-item">
                    <a className="nav-link active" href="/">My Recipes</a>
                </li>
                <li><hr className="dropdown-divider/"/></li>
                <li className="nav-item">
                    <a className="nav-link active" href="/create-recipe">Create New Recipe</a>
                </li>
                <li><hr className="dropdown-divider/"/></li>
                <li className="nav-item">
                    <a className="nav-link active" href="/in-stock">My Ingredients</a>
                </li>
                <li><hr className="dropdown-divider/"/></li>
                <li className="nav-item">
                    <a className="nav-link active" href="/input-portal">Input Ingredients Portal</a>
                </li>
                <li><hr className="dropdown-divider/"/></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User Menu
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Log In</a></li>
                    <li><hr className="dropdown-divider/"/></li>
                    <li><a className="dropdown-item" href="/">Create Profile</a></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    )


}

export default Sidebar;