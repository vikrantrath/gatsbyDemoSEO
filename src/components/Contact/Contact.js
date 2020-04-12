import React from "react"
import MapContent from "./ContactComponents/MapContent"
import ContactForm from "./ContactComponents/ContactForm"
import CompanyInfo from "./ContactComponents/CompanyInfo"

export default function Contact() {
  return (
    <section id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8 col-xs-12">
            <ContactForm />
          </div>
          <div className="col">
            <CompanyInfo />
          </div>
        </div>
        <div className="row">
          <MapContent />
        </div>
      </div>
    </section>
  )
}
