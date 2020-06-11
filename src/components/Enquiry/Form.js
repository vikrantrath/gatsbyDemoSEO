

import React from "react"
import { useForm } from 'react-hook-form';

import { post } from '../../network/apiCalls';

import './form.css';

export default function Form({ slug, headingText }) {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async data => {
    try {
      post(data, () => { reset(); });

    } catch (error) {
      console.log('errors....', error);
    }
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit(onSubmit)} type="POST">
        <h3 className="mb-5">Please fill the below form to get the {headingText} for {slug.replace('-21', '').split('-').join(' ')}</h3>
        <div className="row">
          <div className="col-sm-6 mb-2">
            <input type="text" ref={register} class="form-control mb-2" placeholder="Your Name*" aria-label="Your Name*"
              id="name"
              name="name" />
          </div>
          <div className="col-sm-6 mb-2">
            <input type="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })}
              className={`form-control mb-2 ${errors.emailId ? ' error' : ''}`} placeholder="Your Email Address*" aria-label="Your Email Address*"
              id="emailId" name="emailId"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-2">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Job Title"
              aria-label="Job Title*"
              ref={register}
              name="jobTitle"
            />
          </div>
          <div className="col-sm-6 mb-2">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Company Name"
              aria-label="Your Name*"
              ref={register}
              name="companyName"
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
              ref={register}
              name="number"
            />
          </div>
        </div>
        <textarea
          type="textarea"
          className="form-control mb-2"
          placeholder="Message"
          aria-label="Your Message"
          rows="8"
          ref={register}
          name="message"
        />
        <input type="hidden" ref={register} value="2" id="type" name="type" />
        <input type="hidden" ref={register} value={slug} id="report" name="report" />
        <button type="button " className="btn btn-dark btn-sm btn-block btn-outline-light mt-2 mb-2">Submit</button>
      </form>
    </div>
  )
}
