import { tickIcon } from "images/"
import React from "react"
import "./featureCard.scss"

const BodyList = ({ data }: { data: string[] }) => (
  <ul className="list-container">
    {data.map(listItem => (
      <div className="list-item-container">
        <li className="list-item">{listItem}</li>
        <img src={tickIcon} className="list-item-tick" alt="Tick Icon" />
      </div>
    ))}
  </ul>
)

export interface FeatureCardProps {
  header: string
  body: string | string[]
  image: string
  overlayColor: string
  alignTopLeft?: boolean
}

export const FeatureCard = ({
  header,
  body,
  image,
  overlayColor,
  alignTopLeft,
}: FeatureCardProps) => (
  <div
    className={`feature-card-wrapper${alignTopLeft ? " align-top-left" : ""}`}
  >
    <div className="feature-card-container">
      <div
        className="image-background"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* <img src={image} alt={imageAlt} className="feature-card-image" /> */}
      <div
        className="overlay-color-container"
        style={{
          backgroundImage: `linear-gradient(-30deg, rgba(0,0,0,1), ${overlayColor} 69%)`,
        }}
      />
      <div className="text-container">
        <div className="header-container">
          <h1 className="header-text">{header}</h1>
        </div>
        <div className="body-container">
          {typeof body === "string" ? (
            <p className="body-text">{body}</p>
          ) : (
            <BodyList data={body} />
          )}
        </div>
      </div>
    </div>
  </div>
)
