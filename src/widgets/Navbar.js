import DisplayToggle from "../components/Utils/DisplayMode";
import Sidebar from "../widgets/Sidebar";

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
                <div> 
                    <Sidebar/>
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