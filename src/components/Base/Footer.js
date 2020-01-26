import React from 'react'

import ContactInfo from '../Base/FooterComponents/ContactInfo'
import NewsLetter from '../Base/FooterComponents/NewsLetter'
import ContactForm from '../Base/FooterComponents/ContactForm'
import Hotlinks from '../Base/FooterComponents/Hotlinks'


export default function Header() {
    return (
        <footer className="page-footer font-small" style={{ backgroundColor: "#0f0f7a" }}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-3">
                        <ContactInfo />
                    </div>
                    <div className="col-md-3">
                        <NewsLetter />
                    </div>
                    <div className="col-md-3">
                        <ContactForm />
                    </div>
                    <div className="col-md-3">
                        <Hotlinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}