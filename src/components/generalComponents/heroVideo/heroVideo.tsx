import React from "react"
import { ScrollAnim } from "../scrollAnim/scrollAnim"
import "./heroVideo.scss"

interface IsProps {
  onLoad: () => void
  video: string
}

export const HeroVideo = ({ onLoad, video }: IsProps) => (
  <div className="hero-video-wrapper">
    <div className="video-container">
      <video autoPlay loop muted onCanPlayThrough={onLoad} src={video}></video>
    </div>
    <div className="scroll-anim-container">
      <ScrollAnim />
    </div>
  </div>
)
