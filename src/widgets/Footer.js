import { Link } from "react-router-dom";

function Footer() {
    return (
    <div className="container-xl">
        <footer className="bg-body-tertiary py-3" data-bs-theme="light">
            <div className="row row-cols-1 row-cols-2">
            <div class="col-2">
                {/* <img className="icon-img" alt="../public/restaurant.png"/> */}
                <Link className="navbar-brand text-md-start ms-md-4 fw-bolder nav-link active" to="/home">RECIPE GENERATOR</Link>
            </div>
            <div class="col-5">
                {/* <img className="icon-img" alt="../public/restaurant.png"/> */}
                <p className="navbar-brand fw-bolder text-md-center ms-md-4">&copy; 2023 KLINGONS. All rights reserved.</p>
            </div>
            <div class="col-5 d-flex justify-content-end">
                <Link className="navbar-brand fw-bolder mx-4 nav-link active" to="/">About</Link>
                <span className="text-muted">|</span>
                <Link className="navbar-brand fw-bolder mx-4 nav-link active" to="/home">Contact Us</Link>
                <span className="text-muted">|</span>
                <Link className="navbar-brand fw-bolder mx-4 nav-link active" to="/home">Our Team</Link>
                <span className="text-muted">|</span>
                <Link className="navbar-brand fw-bolder mx-4 nav-link active" to="/home">Tips & Tutorials</Link>
            </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer;