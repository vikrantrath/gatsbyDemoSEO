import React from 'react'

import ContactInfo from './FooterComponents/ContactInfo'
import NewsLetter from './FooterComponents/NewsLetter'
import ContactForm from './FooterComponents/ContactForm'
import Hotlinks from './FooterComponents/Hotlinks'


export default function Header() {
    return (
        <footer className="page-footer bg-info font-small" >
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