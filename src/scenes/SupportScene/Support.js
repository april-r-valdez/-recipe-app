import React from "react";

function Support() {
  const handleContactFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mt-5" style={{ textAlign: "left" }}>
      <div className="row">
        <div className="col-md-6">
          <h3>CONTACT US</h3>
          <form onSubmit={handleContactFormSubmit}>
            <div className="form-group">
              {/* <label htmlFor="formEmail">Your Email:</label> */}
              <input
                type="email"
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
    </div>
  );
}

export default Support;
