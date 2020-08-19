import { ScrollAnim } from "components/generalComponents/scrollAnim/scrollAnim"
import React from "react"
import heroVideo from "../../assets/home_hero.mp4"

interface IsProps {
  onLoad: () => void
}
export const Hero = ({ onLoad }: IsProps) => {
  return (
    <div className="hero-wrapper">
      <div className="video-container">
        <video autoPlay muted onCanPlayThrough={onLoad} src={heroVideo}></video>
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
