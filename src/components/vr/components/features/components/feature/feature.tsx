import React, { useRef } from "react"
import { useIsVisible } from "react-is-visible"

interface IsProps {
  header: string
  image: string
  body: string
}

export const Feature = ({ header, image, body }: IsProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(nodeRef, { once: true })

  return (
    <div
      ref={nodeRef}
      className={`feature-wrapper ${isVisible ? "visible" : "hidden"}`}
    >
      <div className="feature-header-container">
        <h3 className="header-text">{header}</h3>
      </div>
      <div className="image-container">
        <img src={image} alt={`${header} image`} />
      </div>
      <div className="feature-body-text-container">
        <p className="body-text">{body}</p>
      </div>
    </div>
  )
}
