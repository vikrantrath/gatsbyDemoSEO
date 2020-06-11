import React from 'react';
import { post } from '../../../network/apiCalls';

export default function ContactForm() {
    return (
        <div class="row pl-4 pr-4 d-flex align-content-around flex-wrap">
            <form method="post" action="http://localhost:5001/api/sendEmail">
                <h6 class="font-weight-bold text-white mt-2 mb-2"><ins>Submit Your Query</ins></h6>
                <input type="text" class="form-control mb-2" placeholder="Your Name*" aria-label="Your Name*" id="name" name="name" />
                <input type="email" class="form-control mb-2" placeholder="Your Email Address*" aria-label="Your Email Address*" id="emailId" name="emailId" />
                <input type="number" class="form-control mb-2" placeholder="Your Contact Number" aria-label="Your Contact Number" id="number" name="number" />
                <input type="text" class="form-control mb-2" placeholder="Your Message" aria-label="Your Message" id="message" name="message" />
                <input type="hidden" value="1" id="type" name="type" />
                <button type="button " class="btn btn-dark btn-sm btn-block btn-outline-light mt-2 mb-2">Submit</button>
            </form>
        </div>
    )
}