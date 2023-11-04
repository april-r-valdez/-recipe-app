import DisplayToggle from "../components/Utils/DisplayMode";
import Sidebar from "../widgets/Sidebar";
import Login from "../Login"
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary" data-bs-theme="light">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Sidebar/>
                    <Link className="navbar-brand fw-bolder px-2" to="/home" >  RECIPE GENERATOR </Link>
                </div>
                <div classname="d-flex align-items-center">
                        <div className="col-12 d-flex justify-content-end align-items-center">
                            <DisplayToggle className="me-3"/>
                            <form className="d-flex me-3 col-10" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search for recipe (ex: lasagna,...)" aria-label="Search"/>
                                <button className="btn btn-primary" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </button>
                            </form>
                            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <img class="avatar avatar-24 bg-light rounded-circle text-white p-1"
                                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
                                alt="avatar"></img>
                            </button>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <Login />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;