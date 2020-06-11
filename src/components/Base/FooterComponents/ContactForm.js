import React from 'react';
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
        <div class="row pl-4 pr-4 d-flex align-content-around flex-wrap">
            <form onSubmit={handleSubmit(onSubmit)} type="POST">
                <h6 class="font-weight-bold text-white mt-2 mb-2"><ins>Submit Your Query</ins></h6>
                <input type="text" ref={register} class="form-control mb-2" placeholder="Your Name*" aria-label="Your Name*" id="name" name="name" />
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
                <input type="number" ref={register} className="form-control mb-2" placeholder="Your Contact Number" aria-label="Your Contact Number" id="number" name="number" />
                <input type="text" ref={register} className="form-control mb-2" placeholder="Your Message" aria-label="Your Message" id="message" name="message" />
                <input type="hidden" ref={register} value="1" id="type" name="type" />
                <button type="button " className="btn btn-dark btn-sm btn-block btn-outline-light mt-2 mb-2">Submit</button>
            </form>
        </div>
    )
}