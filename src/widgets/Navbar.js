import DisplayToggle from "../components/Utils/DisplayMode";
import ThemeSwitcher from "../components/Utils/ThemeSwitcher";
import Sidebar from "../widgets/Sidebar";
import Login from "../Login"

function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary" data-bs-theme="light">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand fw-bolder px-2" href="/home"> RECIPE GENERATOR</a>
                </div>
                <div> 
                    <Sidebar/>
                    <ThemeSwitcher />
                </div>
                <div classname="d-flex">
                    <div className="row justify-content-end align-items-center">
                        <div className="col-6">
                            <DisplayToggle/>
                        </div>
                        <div className="col-6">
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="ex: Lasagna, pasta.." aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <img class="avatar avatar-24 bg-light rounded-circle text-white p-1"
                                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"></img>
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
            </div>
        </nav>
    )
}

export default Navbar;