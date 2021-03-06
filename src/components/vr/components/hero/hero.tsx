import { HeroVideo } from "components/generalComponents/heroVideo/heroVideo"
import React from "react"
import heroVideo from "./assets/hero.mp4"

interface IsProps {
  onLoad: () => void
}

export const Hero = ({ onLoad }: IsProps) => (
  <div className="hero-wrapper">
    <HeroVideo onLoad={onLoad} video={heroVideo} />
  </div>
)
