import { SectionWrapper } from "components/generalComponents/layout/sectionWrapper/sectionWrapper"
import React, { useRef } from "react"
import { useIsVisible } from "react-is-visible"
import mapBase from "./assets/map_base.png"
import mapPaths from "./assets/map_paths.svg"
import mapPoint from "./assets/map_point.svg"

const header = [
  { text: "Strategic" },
  { text: "Global", alternate: true },
  { text: "Positioning" },
]

const subheader = [
  {
    text: "easy",
  },
  {
    text: "access",
    alternate: true,
  },
  {
    text: "&",
  },
  {
    text: "opeartion",
    alternate: true,
  },
]

const countires = ["Dubai", "India", "Sri Lanka", "Malaysia"]

export const GlobalPresence = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)
  console.log(isVisible)
  console.log("hello")
  return (
    <div ref={nodeRef} className="global-presence-wrapper">
      <SectionWrapper header={header} subheader={subheader} alignRight>
        <div className="global-presence-body-container">
          <div className={`map-container${isVisible ? "" : " hidden"}`}>
            <img src={mapBase} alt="map-base" className="map-base" />
            <img src={mapPaths} alt="map-paths" className="map-paths" />
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <img
                  key={i}
                  src={mapPoint}
                  alt="map-point"
                  className={`map-point point-${i}`}
                />
              ))}
            {countires.map((country, i) => (
              <h2 key={country} className={`map-label label-${i}`}>
                {country}
              </h2>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
