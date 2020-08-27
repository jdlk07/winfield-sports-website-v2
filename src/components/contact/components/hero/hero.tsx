import React, { useEffect } from "react"
import heroImg from "./assets/hero.png"

interface IsProps {
  onLoad: () => void
}

export const Hero = ({ onLoad }: IsProps) => {
  const backgroundImg = new Image()
  // backgroundImg.onload = () => onLoad()
  backgroundImg.src = heroImg

  useEffect(() => {
    if (backgroundImg.complete) {
      onLoad()
    }
  }, [backgroundImg.complete])

  return (
    <div className="hero-wrapper">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${backgroundImg.src})` }}
      >
        <div className="text-container">
          <h2 className="hero-text">{`We'd love to hear from you`}</h2>
          <h3 className="hero-subtext">{`Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is\nready to answer all your questions`}</h3>
        </div>
        {/* <h2 className="world-carousel">
          <span>Have a </span>
          <div className="text-list-container">
            <ul>
              <li>question?</li>
              <li>project?</li>
              <li>inquiry?</li>
              <li>idea?</li>
            </ul>
          </div>
        </h2>
        <h2 className="hero-text">Get in touch with us!</h2> */}
      </div>
    </div>
  )
}
