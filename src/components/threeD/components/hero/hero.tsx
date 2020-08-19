import { ScrollAnim } from "components/generalComponents/scrollAnim/scrollAnim"
import React from "react"
import heroImg from "../../assets/hero.jpg"

interface IsProps {
  onLoad: () => void
}

export const Hero = ({ onLoad }: IsProps) => (
  <div className="hero-wrapper">
    <div className="image-container">
      <img
        src={heroImg}
        alt="Cricket Match Image"
        className="hero-img"
        onLoad={onLoad}
      />
    </div>
    <div className="scroll-anim-container">
      <ScrollAnim />
    </div>
  </div>
)
