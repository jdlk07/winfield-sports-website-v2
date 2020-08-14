import { ScrollAnim } from "components/generalComponents/scrollAnim/scrollAnim"
import React from "react"
import heroVideo from "../../assets/home_hero.mp4"

export const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="video-container">
        <video autoPlay muted src={heroVideo}></video>
        <div className="attribution-container">
          <p className="attribution-text">Stock footage provided by Videvo</p>
        </div>
      </div>
      <div className="scroll-anim-container">
        <ScrollAnim />
      </div>
    </div>
  )
}
