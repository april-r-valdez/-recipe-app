import { Link } from "react-router-dom";

function Footer() {
    return (
    <div className="container-xl">
        <footer className="bg-body-tertiary py-3 fixed-bottom" data-bs-theme="light">
            <div className="row row-cols-1 row-cols-2 row-cols-3">
                <div className="col-3">
                    <div className="row">
                        <div className="col-1">
                            <img className="icon-img ms-md-3" src="restaurant.png" alt="" style={{ maxWidth: '30px', maxHeight: '30px' }}></img>
                        </div>
                        <div className="col-2">
                            <Link className="navbar-brand text-md-start fw-bolder ms-md-4 nav-link active" to="/home">RECIPE GENERATOR</Link>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <p className="navbar-brand fw-bolder text-md-center ms-md-4">&copy; 2023 KLINGONS. All rights reserved.</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <Link className="navbar-brand fw-bolder mx-4 nav-link active" to="/">About</Link>
                    <span className="text-muted">|</span>
                    <Link className="navbar-brand fw-bolder mx-4 nav-link active" to="/home">Contact Us</Link>
                    <span className="text-muted">|</span>
                    <Link className="navbar-brand fw-bolder mx-4 nav-link active" to="/our-team">Our Team</Link>
                    <span className="text-muted">|</span>
                    <Link className="navbar-brand fw-bolder mx-4 nav-link active" to="/home">Tips & Tutorials</Link>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer;