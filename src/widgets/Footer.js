import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-body-tertiary py-2 fixed-bottom" style={{ zIndex: 'auto' }} data-bs-theme="light">
            <div className="container-fluid">
                <div className="row ">
                    <div className="d-flex col-md-2 col-sm-2 mb-0">
                        <img className="icon-img" src="./images/restaurant.png" alt="" style={{ maxWidth: '30px', maxHeight: '30px' }}></img>
                        <Link className="navbar-brand text-md-start fw-bolder ms-md-2 nav-link active" to="/home">RECIPE GENERATOR</Link>
                    </div>
                    <div className="d-flex col-md-5 col-sm-2 mb-0">
                        <p className="navbar-brand fw-bolder">&copy; 2023 KLINGONS. All rights reserved.</p>
                    </div>
                    <div className="col-md-5 d-flex justify-content-end mb-0">
                        <Link className="navbar-brand fw-bolder mx-2 nav-link active" to="/">About</Link>
                        <span className="text-muted">|</span>
                        <Link className="navbar-brand fw-bolder mx-2 nav-link active" to="/support">Contact Us</Link>
                        <span className="text-muted">|</span>
                        <Link className="navbar-brand fw-bolder mx-2 nav-link active" to="/our-team">Our Team</Link>
                        <span className="text-muted">|</span>
                        <Link className="navbar-brand fw-bolder mx-2 nav-link active" to="/tips-tutorials">Tips & Tutorials</Link>
                    </div>
                </div>
            </div>
        </footer>
    
    )
};

export default Footer;