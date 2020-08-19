// import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import { wsLogo } from "images/"
import React from "react"
import "./navbar.scss"

const transitionExit = {
  length: 1.5,
}

const transitionEnter = {
  delay: 1.5,
  length: 1.5,
}

const links = [
  { name: "HOME", to: "/" },
  { name: "3D ON-FIELD", to: "/3D" },
]

const _Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <TransitionLink
          className="logo-container"
          to={"/"}
          exit={transitionExit}
          entry={transitionEnter}
        >
          <img
            src={wsLogo}
            alt="Winfield Sports Logo"
            className="navbar-logo"
          />
        </TransitionLink>
        <div className="right-container">
          {links.map(({ name, to }) => (
            <div key={name} className="link-container">
              <TransitionLink
                className="link-button"
                activeClassName="link-active"
                to={to}
                exit={transitionExit}
                entry={transitionEnter}
              >
                {name}
                <div className="link-line" />
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export const Navbar = React.memo(_Navbar)
