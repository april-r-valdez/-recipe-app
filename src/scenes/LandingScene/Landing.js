import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Parallax
        pages={3.1}
        className="landing"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${"/res/images/generic_banner_2.jpeg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="landing-overlay"></div>
        {/* Hero Section */}
        <ParallaxLayer
          factor={1}
          style={{
            backgroundImage: `url(${"/res/images/generic_banner_1.jpeg"})`,
            backgroundSize: "100% auto",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="landing-overlay"></div>
          <div
            className="row text-start align-items-center g-5 my-5 py-5 px-5"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="col-6 py-5">
              <h1 className="display-5 fw-bold lh-1 mb-2 text-light">
                WELCOME TO RECIPES
              </h1>
              <p className="lead text-light">we help you make sandwiches</p>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4 my-5"
                >
                  START COOKING
                </button>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Features Section */}
        <ParallaxLayer offset={0.8}>
          <div className="container-fluid py-5 m-0 landing-content">
            <h1 className="display-6 landing-headers">FEATURES</h1>
            <div className="row card-group py-3 m-5">
              <div className="col-4">
                <div className="card px-4 py-4">
                  {/* FEATURE UNO */}
                  <h4 className="py-4">RECIPE GENERATOR</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="card px-4 py-4">
                  {/* FEATURE DOS */}
                  <h4 className="py-4">SHARE RECIPES</h4>
                  <p>
                    Quisque lacinia dictum leo, non accumsan justo tincidunt ut.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="card px-4 py-4">
                  {/* FEATURE TRES */}
                  <h4 className="py-4">MAKE DR.LEHR PROUD</h4>
                  <p>Nunc eu lorem sed massa vehicula mollis quis eu nisl.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="container-fluid py-5 m-0 landing-content">
            <hr className="my-4"></hr>
            <div className="m-5">
              <h1 className="display-6 landing-headers">PRICING</h1>
              <p className="landing-headers">IT'S FREE</p>
              <p>
                Quisque vulputate et nisi eu bibendum. Fusce auctor molestie
                nulla sit amet dictum. Nunc est orci, euismod eget gravida nec,
                lobortis nec ex. Donec non sollicitudin velit. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Maecenas
                elementum erat efficitur lacus imperdiet interdum. Sed sed
                molestie felis.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="container-fluid py-5 m-0 landing-content-alt">
            <hr className="my-4"></hr>
            <div className="m-5">
              <h1 className="display-6 landing-headers">LET US COOK</h1>
              <p>
                Experience culinary creativity at your fingertips – generate,
                savor, and delight with each recipe.
              </p>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4 my-5"
              >
                LET'S GO
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="container-fluid py-5 m-0 landing-content">
            <hr className="my-4"></hr>
            <h1 className="display-6 landing-headers">
              <Link className="nav-link active" to="/support">
                CONTACT US
              </Link>
            </h1>
            <p>If you have any questions, feel free to get in touch with us.</p>
          </div>

          {/* Information Footer */}
          <footer className="information-footer">
            <div className="container-fluid py-5 m-0 landing-content">
              <p>&copy; 2023 KLINGONS. All rights reserved.</p>
            </div>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
