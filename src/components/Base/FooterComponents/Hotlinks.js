import React from 'react';
import './Hotlinks.css'

export default function HotLinks() {
    return (
        <div class="row pl-4 pr-4">
            <h6 class="font-weight-bold text-white mt-2 mb-2"><ins>Hot Links</ins></h6>
            <ul class="list-unstyled text-white col-md-12 pl-0">
                <li className="cool-link">Career</li>
                <li className="cool-link">Contact Us</li>
                <li className="cool-link">Disclaimer</li>
                <li className="cool-link">Terms of Use</li>
                <li className="cool-link">Privacy Policy</li>
                <li className="cool-link">Press Release</li>
            </ul>
        </div>
    )
}