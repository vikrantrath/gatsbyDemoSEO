import React from 'react';

export default function NewsLetter() {
    return (
        <div class="row pl-4 pr-4">
            <h6 class="font-weight-bold text-white mt-2 mb-2"><ins>Stay Informed</ins></h6>
            <input type="text" class="form-control" placeholder="Your Email" aria-label="Your Email" />
            <button type="button " class="btn btn-dark btn-sm btn-block btn-outline-light mt-2 mb-2">Submit</button>
        </div>
    )
}