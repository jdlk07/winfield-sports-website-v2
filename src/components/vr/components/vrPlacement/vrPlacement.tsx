import { BackgroundParallax } from "components/generalComponents/backgroundParallax/backgroundParallax"
import * as backgroundHexagon from "images/background/hexagon.png"
import React, { useRef } from "react"
import { useIsVisible } from "react-is-visible"

const bodyText = `Using an accuracy & precision based camera movement tracking protocol, coupled with real-time video layering software we brought forward a Virtual 3D Signage Solution.

We integrate our system seamlessly between the camera raw feed & final broadcast, where we overlay signage without delays to the overall system.`

export const VrPlacement = () => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(nodeRef, { once: true })

  return (
    <div className={`vr-placement-wrapper ${isVisible ? "visible" : "hidden"}`}>
      <BackgroundParallax backgroundImage={backgroundHexagon} />
      <div ref={nodeRef} className="vr-placement-container">
        <div className="header-wrapper">
          <div className="header-container">
            <h1 className="header-text">Virtual </h1>
            <h1 className="header-text alternate-text">Placement</h1>
          </div>
          <div className="subheader-container">
            <h2 className="subheader-text">The Future Of</h2>
            <h2 className="subheader-text">
              {`3D `}
              <span className="subheader-text alternate-text">
                Sports Signage
              </span>
            </h2>
          </div>
        </div>
        <div className="seperator-line" />
        <div className="body-wrapper">
          <p className="body-text">{bodyText}</p>
        </div>
      </div>
    </div>
  )
}
