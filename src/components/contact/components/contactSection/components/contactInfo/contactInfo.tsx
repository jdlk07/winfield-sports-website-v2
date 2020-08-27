import React from "react"
import locationImg from "./assets/location.png"

const mapLink = `https://www.google.com/maps/@6.867548,79.882185,19.81z`

export const ContactInfo = () => {
  return (
    <div className="contact-info-wrapper">
      <div className="info-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={mapLink}
          className="image-container"
        >
          <img
            src={locationImg}
            alt="SL office map location"
            className="location-image"
          />
        </a>
        <div className="header-container">
          <h2 className="header-text">{`CMB (HQ)`}</h2>
          <h3 className="subheader-text">{`Design, Production\nand Control`}</h3>
        </div>
        <div className="body-container">
          <p className="body-text">7A, Madilay's Avenue</p>
          <p className="body-text">Kohuwela 10350</p>
          <p className="body-text">Colombo, Sri Lanka</p>
          <p className="body-text">+94 77 99 777 99</p>
        </div>
      </div>
    </div>
  )
}
