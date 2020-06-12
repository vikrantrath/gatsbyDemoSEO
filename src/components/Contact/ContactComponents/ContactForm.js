import React from "react"
import { useForm } from 'react-hook-form';

import { post } from '../../../network/apiCalls';

import './contactForm.css';

export default function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async data => {
    try {
      post(data, () => { reset(); });

    } catch (error) {
      console.log('errors....', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} type="POST">
      <h3 className="mb-5">E-MAIL FORM</h3>
      <div className="row">
        <div className="col-sm-6 mb-2">
          <input
            type="text"
            ref={register({
              required: "Required",
            })}
            className={`form-control mb-2 ${errors.name ? ' error' : ''}`}
            placeholder="Name"
            aria-label="Your Name*"
            name="name"
          />
        </div>
        <div className="col-sm-6 mb-2">
          <input
            type="email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
            className={`form-control mb-2 ${errors.emailId ? ' error' : ''}`}
            placeholder="Email"
            aria-label="Your Email Address*"
            name="emailId"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-2">
          <input
            type="text"
            ref={register}
            className="form-control mb-2"
            placeholder="Job Title"
            aria-label="Your Name*"
            name="jobTitle"
          />
        </div>
        <div className="col-sm-6 mb-2">
          <input
            type="text"
            ref={register}
            className="form-control mb-2"
            placeholder="Company Name"
            aria-label="Your Name*"
            name="companyName"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mb-2">
          <input
            type="text"
            ref={register}
            className="form-control mb-2"
            placeholder="Mobile Number"
            aria-label="Your Contact Number"
            name="number"
          />
        </div>
      </div>
      <textarea
        type="textarea"
        ref={register}
        className="form-control mb-2"
        placeholder="Message"
        aria-label="Your Message"
        rows="8"
        name="message"
      />
      <input type="hidden" ref={register} value="2" id="type" name="type" />
      <button type="button " className="btn btn-dark btn-sm btn-block btn-outline-light mt-2 mb-2">Submit</button>
      <div className="row">
        <div className="col-sm-12">
          <div
            id="gcaptcha"
            className="g-recaptcha"
            data-sitekey="6Lczt7oUAAAAAFQdABAcn7ibO9RO5KNWqeIzQ5y9"
          ></div>
        </div>
      </div>
    </form>
  )
}
