import React from "react"
import { ContactForm } from "./components/contactForm/contactForm"
import { ContactInfo } from "./components/contactInfo/contactInfo"

export const ContactSection = () => (
  <div className="contact-section-wrapper">
    <div className="contact-section-container">
      <div className="header-container">
        <h2 className="header-text">
          Contact <span>Us</span>
        </h2>
        <p className="body-text">Got a question?</p>
        <p className="body-text">
          {`We'd love to hear from you.\nSend us a message and we'll get back to you as soon as possible.`}
        </p>
      </div>
      <div className="body-wrapper">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  </div>
)
