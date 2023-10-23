import DisplayToggle from "../components/Utils/DisplayMode";

function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary" data-bs-theme="light">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand fw-bolder px-2" href="/"> RECIPE GENERATOR</a>
                </div>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">NAVIGATION</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider/"/>
                            </li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                </div>
                <div classname="d-flex">
                    <div className="row justify-content-end align-items-center">
                        <div className="col-3">
                            <DisplayToggle/>
                        </div>
                        <div className="col-9">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="ex: Lasagna, pasta.." aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;