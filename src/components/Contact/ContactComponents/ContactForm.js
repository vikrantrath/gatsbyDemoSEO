import React from "react"

export default function ContactForm() {
  return (
    <>
      <h3 className="mb-5">E-MAIL FORM</h3>
      <div className="row">
        <div className="col-sm-6 mb-2">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            aria-label="Your Name*"
          />
        </div>
        <div className="col-sm-6 mb-2">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            aria-label="Your Email Address*"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-2">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Job Title"
            aria-label="Your Name*"
          />
        </div>
        <div className="col-sm-6 mb-2">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Company Name"
            aria-label="Your Name*"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mb-2">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Mobile Number"
            aria-label="Your Contact Number"
          />
        </div>
      </div>
      <textarea
        type="textarea"
        className="form-control mb-2"
        placeholder="Message"
        aria-label="Your Message"
        rows="8"
      />

      <div className="row">
        <div className="col-sm-12">
          <div
            id="gcaptcha"
            className="g-recaptcha"
            data-sitekey="6Lczt7oUAAAAAFQdABAcn7ibO9RO5KNWqeIzQ5y9"
          ></div>
        </div>
      </div>
    </>
  )
}
