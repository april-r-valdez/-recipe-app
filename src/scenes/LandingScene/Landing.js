import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Link } from "react-router-dom";

function Landing() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };
  const resetHover = () => {
    setHoveredCard(null);
  };

  const features = [
    {
      title: "RECIPE GENERATOR",
      description:
        "Generate recipes that are tailored to your available ingredients at home!",
      secondaryText:
        "No more stress about meal planning — just pure cooking satisfaction!",
      link: "/home",
    },
    {
      title: "FOODIE COMMUNITY",
      description: "Create, share, browse, and rate custom recipes!",
      link: "/home",
    },
    {
      title: "CULINARY PROFILES",
      description:
        "Discover your taste profile and embark on a global gastronomic adventure.",
      secondaryText: "Unravel the mysteries of your culinary preferences!",
      link: "",
    },
    {
      title: "COOKING HOW TOs",
      description:
        "Get access to a customized feed of cooking tips and tutorials for your new dishes!",
      style: "my-4",
      link: "/tips-tutorials",
    },
    {
      title: "FOOD RECOGNITION",
      description:
        "Effortlessly identify groceries and unknown food with a snap!",
      secondaryText:
        "Break out of your culinary comfort zone — identify, buy, and try out new ingredients in amazingly new dishes!",
      link: "/home",
    },
    {
      title: "YOUR PANTRY",
      description:
        "Organize your online pantry to easily take inventory and restock using shopping lists!",
      link: "/in-stock",
    },
  ];

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
                <Link
                  to="/home"
                  className="btn btn-outline-secondary btn-lg px-4 my-5"
                >
                  START COOKING
                </Link>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Features Section */}
        <ParallaxLayer offset={0.8}>
          <div className="container-fluid py-5 m-0 landing-content">
            <h1 className="display-6 landing-headers py-4">FEATURES</h1>
            <div className="row card-group mx-5">
              {/* ROW 1 */}
              {features.slice(0, 3).map((feature, index) => (
                <Link
                  to={feature.link}
                  key={index}
                  className={`col-12 col-sm-6 col-md-4 ${feature.style}`}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={resetHover}
                >
                  <div
                    className={`card px-4 py-4 pt-2 ${
                      hoveredCard === index ? "hovered-card" : ""
                    }`}
                  >
                    <h4 className="pt-4 pb-2">{feature.title}</h4>
                    <p>{feature.description}</p>
                    {feature.secondaryText && (
                      <p className={"text-secondary mt-2"}>
                        {feature.secondaryText}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div className="row card-group mx-5">
              {/* ROW 2 */}
              {features.slice(3, 6).map((feature, index) => (
                <Link
                  to={feature.link}
                  key={index + 3}
                  className={`col-12 col-sm-6 col-md-4 ${feature.style}`}
                  onMouseEnter={() => handleCardHover(index + 3)}
                  onMouseLeave={resetHover}
                >
                  <div
                    className={`card px-4 py-4 pt-2 ${
                      hoveredCard === index + 3 ? "hovered-card" : ""
                    }`}
                  >
                    <h4 className="pt-4 pb-2">{feature.title}</h4>
                    <p>{feature.description}</p>
                    {feature.secondaryText && (
                      <p className={"text-secondary mt-2"}>
                        {feature.secondaryText}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="container-fluid py-5 m-0 landing-content">
            <hr className="my-4"></hr>
            <div className="m-5">
              <h1 className="display-6 landing-headers">PRICING</h1>
              <p className="landing-headers">IT'S FREE</p>
              <p>
                Elevate your meals, discover new culinary experiences — all at
                an unbeatable price.
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
              <Link
                to="/home"
                className="btn btn-outline-secondary btn-lg px-4 my-5"
              >
                LET'S GO
              </Link>
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
