import React from "react";
import Navbar from "../../widgets/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landing() {
  return (
    <div class="landing">
      <Navbar />
      <Parallax pages={2} class="landing">
        {/* Navbar */}

        {/* Hero Section */}
        <ParallaxLayer
          factor={1}
          style={{
            backgroundImage: `url(${"/res/images/generic_banner_1.jpeg"})`,
            backgroundSize: "100% auto",
            backgroundAttachment: "fixed",
          }}
        >
          <div class="landing-overlay"></div>
          <div
            class="row text-start align-items-center g-5 my-5 py-5 px-5"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div class="col-6 py-5">
              <h1 class="display-5 fw-bold lh-1 mb-2 text-light">
                WELCOME TO RECIPES
              </h1>
              <p class="lead text-light">we help you make sandwiches</p>
              <div>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4 my-5"
                >
                  START COOKING
                </button>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Features Section */}
        <ParallaxLayer offset={0.8} class="landing-content">
          <div className="container py-5">
            <h1 class="display-6 landing-headers">FEATURES</h1>
            <div class="row card-group py-3">
              <div class="col-4">
                <div class="card px-4 py-4">
                  {/* FEATURE UNO */}
                  <h4 class="py-4">RECIPE GENERATOR</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="col-4">
                <div class="card px-4 py-4">
                  {/* FEATURE DOS */}
                  <h4 class="py-4">SHARE RECIPES</h4>
                  <p>
                    Quisque lacinia dictum leo, non accumsan justo tincidunt ut.
                  </p>
                </div>
              </div>
              <div class="col-4">
                <div class="card px-4 py-4">
                  {/* FEATURE TRES */}
                  <h4 class="py-4">MAKE DR.LEHR PROUD</h4>
                  <p>Nunc eu lorem sed massa vehicula mollis quis eu nisl.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <hr class="my-4"></hr>
          <div class="container ">
            <h1 class="display-6 landing-headers">PRICING</h1>
            <p class="landing-headers">IT'S FREE</p>
            <p class="text-start">
              Quisque vulputate et nisi eu bibendum. Fusce auctor molestie nulla
              sit amet dictum. Nunc est orci, euismod eget gravida nec, lobortis
              nec ex. Donec non sollicitudin velit. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. Maecenas elementum erat
              efficitur lacus imperdiet interdum. Sed sed molestie felis.
            </p>
          </div>

          {/* Contact Section */}
          <hr class="my-4"></hr>
          <div class="container ">
            <h1 class="display-6 landing-headers">CONTACT US</h1>
            <p>If you have any questions, feel free to get in touch with us.</p>
          </div>

          {/* Information Footer */}
          <footer class="information-footer">
            <div class="container">
              <p>&copy; 2023 KLINGONS. All rights reserved.</p>
            </div>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
