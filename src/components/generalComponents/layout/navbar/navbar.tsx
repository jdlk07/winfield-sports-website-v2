import { Link } from "gatsby"
import { wsLogo } from "images/"
import React from "react"
import "./navbar.scss"

const links = [
  { name: "HOME", to: "/" },
  { name: "3D ON-FIELD", to: "/3d" },
]

export const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <div className="left-container">
          <img
            src={wsLogo}
            alt="Winfield Sports Logo"
            className="navbar-logo"
          />
        </div>
        <div className="right-container">
          {links.map(({ name, to }) => (
            <div className="link-container">
              <Link
                className="link-button"
                activeClassName="link-active"
                to={to}
              >
                {name}
                <div className="link-line" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
