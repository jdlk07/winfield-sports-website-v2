import { wsLogoBW } from "images/"
import facebookIcon from "images/socialMedia/facebook.png"
import instagramIcon from "images/socialMedia/instagram.png"
import linkedinIcon from "images/socialMedia/linkedin.png"
import youtubeIcon from "images/socialMedia/youtube.png"
import React from "react"
import Arrows from "./assets/arrows.png"
import "./footer.scss"

interface SocialMediaDataObj {
  link: string
  icon: string
  alt: string
}

const socialMediaData: SocialMediaDataObj[] = [
  {
    link: "#",
    icon: facebookIcon,
    alt: "Facebook Icon",
  },
  {
    link: "https://www.instagram.com/winfield.sports/",
    icon: instagramIcon,
    alt: "Instagram Icon",
  },
  {
    link: "https://www.linkedin.com/in/winfield-sports-754b9b187/",
    icon: linkedinIcon,
    alt: "Linkedin Icon",
  },
  {
    link: "https://www.youtube.com/channel/UCtujIjlY7oXnRymaeRG8AMA",
    icon: youtubeIcon,
    alt: "Youtube Icon",
  },
]

const countryData: CountryDetailsProps[] = [
  {
    header: "CMB",
    subheader: "Design & Production",
    body: [
      "9/1, 1st Lane, Lake Rd",
      "Boralesgamuwa 10290",
      "Colombo, Sri Lanka",
    ],
  },
  {
    header: "DXB",
    subheader: "Operation & Distribution",
    body: ["Saif Plus, RU", "36A, P.O. Box 123525", "Sharjah, U.A.E"],
  },
]

interface BorderProps {
  children: React.ReactChild
}

const Border = ({ children }: BorderProps) => (
  <div className="border-container">
    <div className="border-body-container">{children}</div>
  </div>
)

interface CountryDetailsProps {
  header: string
  subheader: string
  body: string[]
}

const CountryDetails = ({ header, subheader, body }: CountryDetailsProps) => (
  <div className="country-details-wrapper section-container">
    <div className="country-header-container">
      <h2 className="country-header-text">{header}</h2>
    </div>
    <p className="footer-body-text country-subheader-text">{subheader}</p>
    {body.map(bodyDetail => (
      <p key={bodyDetail} className="footer-body-text">
        {bodyDetail}
      </p>
    ))}
  </div>
)

const _PageFooter = () => {
  return (
    <div className="page-footer-wrapper">
      <Border>
        <img src={wsLogoBW} alt="Winfield Sports Logo" className="ws-logo" />
      </Border>
      <div className="page-footer-body-wrapper">
        <div className="sub-container">
          {countryData.map(({ header, ...countryDetails }) => (
            <CountryDetails key={header} {...countryDetails} header={header} />
          ))}
        </div>
        <span className="body-seperator-line"></span>
        <div className="sub-container">
          <div className="section-container">
            <div className="country-header-container">
              <p className="contact-message-text">{`We're currently taking on new Projects.\nWould you like to discuss yours?`}</p>
            </div>
            <p className="footer-body-text country-subheader-text">
              New Business
            </p>
            <p className="footer-body-text">T : +94 11 7 397 541</p>
            <p className="footer-body-text">M : +94 77 99 777 99</p>
            <p className="footer-body-text">E : connect@winfieldsports.net</p>.
          </div>
          <div className="section-container">
            <div className="country-header-container">
              <div className="mail-to-link-container">
                <a
                  className="mail-to-link"
                  href={`mailto:connect@winfieldsports.net`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GET IN TOUCH
                </a>
                <img src={Arrows} alt="Arrows" />
              </div>
            </div>
            <div className="social-media-section">
              <p className="social-media-text">Follow us on</p>
              <div className="links-container">
                {socialMediaData.map(({ link, icon, alt }) => (
                  <a
                    key={alt}
                    href={link}
                    className="social-media-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={icon} alt={alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Border>
        <p className="footer-copyright">
          &copy;{` 2019 | Winfield Sports | All Rights Reserved`}
        </p>
      </Border>
    </div>
  )
}

export const PageFooter = React.memo(_PageFooter)
