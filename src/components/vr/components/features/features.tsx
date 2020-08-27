import React, { useRef } from "react"
import { useIsVisible } from "react-is-visible"
import headerImage from "./assets/header-icon.png"
import interchangeImage from "./assets/interchange.png"
import multiWorldImage from "./assets/multi-world.png"
import trueLifeImage from "./assets/true-life.png"
import { Feature } from "./components/feature/feature"

const features = [
  {
    header: "MULTI WORLD\nFEEDS",
    image: multiWorldImage,
    body:
      "Laboris exercitation cupidatat culpa exercitation. Incididunt voluptate et est dolore laboris. Est nostrud sunt sit consequat reprehenderit dolor et. Mollit ut sit velit enim irure nisi anim pariatur anim.",
  },
  {
    header: "TRUE-LIFE\nLOGOS",
    image: trueLifeImage,
    body:
      "Sint aute duis cupidatat aliquip ipsum aliquip reprehenderit duis aliqua excepteur. Cupidatat sunt deserunt pariatur ad voluptate dolor deserunt cillum velit laborum pariatur. Laboris ipsum excepteur voluptate aute lab.",
  },
  {
    header: "INTERCHANGE\nLOGO SCHEMES",
    image: interchangeImage,
    body:
      "Cillum aliquip officia ullamco minim excepteur incididunt elit nulla ipsum deserunt proident laboris pariatur. Nulla nulla adipisicing non culpa dolor consectetur est consectetur ullamco duis ullamco dolor. Id tempor elit est cillum ex velit.",
  },
]

export const Features = () => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(nodeRef, { once: true })

  return (
    <div className="features-wrapper">
      <div className="features-container">
        <div
          ref={nodeRef}
          className={`header-wrapper ${isVisible ? "visible" : "hidden"}`}
        >
          <div className="header-container">
            <div className="header-subcontainer">
              <h1 className="header-text">3D </h1>
              <h1 className="header-text alternate-text">VR</h1>
              <div className="header-icon-container">
                <img
                  src={headerImage}
                  alt="VR Plus Icon"
                  className="header-icon"
                />
              </div>
            </div>
            <div className="header-subcontainer">
              <h2 className="subheader-text">Optimize </h2>
              <h2 className="subheader-text alternate-text">Now </h2>
              <h2 className="subheader-text">!</h2>
            </div>
          </div>
          <div className="header-line" />
        </div>
        <div className="body-container">
          {features.map(({ ...featureData }, i) => (
            <Feature key={i} {...{ ...featureData }} />
          ))}
        </div>
      </div>
    </div>
  )
}
