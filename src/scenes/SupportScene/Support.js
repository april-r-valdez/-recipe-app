import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_recipegen";
const EMAILJS_SUPPORT_TEMPLATE_ID = "template_ypht4zc";
const EMAILJS_PUBLIC_KEY = "1GFHTA5hlv6zGie4L";

function Support() {
  const [showFormSentSuccessfully, setShowFormSentSuccessfully] =
    useState(false);

  const form = useRef();
  const handleContactFormSubmit = (event) => {
    event.preventDefault();

    // send support form using Emailjs
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_SUPPORT_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          console.log("RES: ", res.text);
          setShowFormSentSuccessfully(true);
        },
        (error) => {
          console.log("ERR: ", error.text);
        }
      );
  };

  const handleSearch = () => {};

  return (
    <div className="container mt-5" style={{ textAlign: "left" }}>
      {/* -----------NOTIF: Successfully Sent Support Form----------- */}
      {showFormSentSuccessfully && (
        <div className="alert alert-success" role="alert">
          Message sent successfully!
        </div>
      )}

      {/* -----------SEARCH----------- */}
      <div>
        <h2 style={{ textAlign: "center" }}>How Can We Help?</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Describe your problem..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* -----------FAQ----------- */}
      <h3 className="mt-5">
        Frequently Asked Questions (FAQ)
        <button
          className="btn btn-secondary ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqCollapse"
        >
          >>
        </button>
      </h3>

      <div className="accordion" id="faqAccordion">
        <div className="card">
          <div id="faqCollapse" className="collapse mt-2">
            <ul>
              <li>
                <div className="card-body bg-secondary m-2">
                  <strong>Q: How do I generate a recipe?</strong>
                  <p>Just do it.</p>
                </div>
              </li>

              <li>
                <div className="card-body  bg-secondary m-2">
                  <strong>Q: What do I get for creating an account?</strong>
                  <p>We let you cook.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* -----------NEWS----------- */}
      <div className="row mt-5">
        <div className="col">
          <h2>Latest Updates</h2>
          <ul>
            <li>
              <a href="/updates/version-b.1">Release Notes - Version b.1</a>
            </li>
            <li>
              <a href="/updates/upcoming-features">Upcoming Features</a>
            </li>
          </ul>
        </div>
      </div>

      {/* -----------INFO----------- */}
      <div className="row mt-5">
        <div className="col">
          <h2>Support Hours</h2>
          <p>Our support team is available during the following hours:</p>
          <p>
            Monday to Friday: 11 AM - 2 PM (CDT)
            <br />
            Weekends: Closed
          </p>
          <p>
            For urgent matters outside these hours, please use the contact form,
            and we'll do our best to assist you as soon as possible.
          </p>
        </div>
      </div>

      {/* -----------FORM----------- */}
      <div className="col-6 mt-5">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={handleContactFormSubmit}>
          <div className="form-group">
            {/* <label htmlFor="formEmail">Your Email:</label> */}
            <input
              type="email"
              name="email"
              className="form-control"
              id="formEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="formMessage" className="text-left"> */}
            {/* Your Message: */}
            {/* </label> */}
            <textarea
              className="form-control"
              name="message"
              id="formMessage"
              rows={4}
              placeholder="Enter your message"
              required
            />
          </div>

          <button type="submit" className="btn btn-secondary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Support;
