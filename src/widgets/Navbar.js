import DisplayToggle from "../components/Utils/DisplayMode";
import Sidebar from "../widgets/Sidebar";
import Login from "../Login"
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";


function Navbar() {
    return (
        <nav className="navbar fixed-top bg-body-tertiary" data-bs-theme="light">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Sidebar/>
                    <Link className="navbar-brand fw-bolder px-2" to="/home" >  RECIPE GENERATOR </Link>
                </div>
                <div className="d-flex align-items-center">
                        <div className="col-12 d-flex justify-content-end align-items-center">
                            <DisplayToggle className="me-3"/>
                            <form className="d-flex me-3 col-10" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search for recipe (ex: lasagna,...)" aria-label="Search"/>
                                <button className="btn btn-primary" type="submit">
                                <IoIosSearch style={{ fontSize: '20px'}}/>
                                </button>
                            </form>
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <FaCircleUser style={{ fontSize: '20px'}} />
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
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