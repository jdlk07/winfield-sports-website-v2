import React, { useRef } from "react"
import { useIsVisible } from "react-is-visible"
import ecoIcon from "./assets/eco.png"
import labourIcon from "./assets/labour.png"
import sizeIcon from "./assets/size.png"
import timeIcon from "./assets/time.png"
import weatherIcon from "./assets/weather.png"

export const advantages = [
  {
    header: "TIME",
    logo: timeIcon,
    description:
      "Sponsor logos can be confirmed even after a match has started.",
  },
  {
    header: "SIZE",
    logo: sizeIcon,
    description:
      "Break past size restrictions such as those caused by boundaries and line markings.",
  },
  {
    header: "ECO",
    logo: ecoIcon,
    description: "No physical signage means no grass scorching or turf damage.",
  },
  {
    header: "LABOUR",
    logo: labourIcon,
    description:
      "VR setups require smaller teams due to less labour intensive tasks.",
  },
  {
    header: "WEATHER",
    logo: weatherIcon,
    description: "Immune to adverse weather conditions.",
  },
]

export const Advantages = () => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(nodeRef)

  return (
    <div
      ref={nodeRef}
      className={`advantages-wrapper ${isVisible ? "visible" : "hidden"}`}
    >
      <div className="advantages-container">
        {advantages.map(({ header, logo, description }) => (
          <div key={header} className="advantage-wrapper">
            <h2 className="advantage-header-text">{header}</h2>
            <div className="advantage-container">
              <div className="icon-container">
                <img src={logo} alt={`${header} icon`} className="icon" />
              </div>
              <div className="seperator-line" />
              <div className="body-text-container">
                <p className="body-text">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
