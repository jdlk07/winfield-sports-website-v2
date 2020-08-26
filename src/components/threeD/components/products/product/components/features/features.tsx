import React from "react"

export interface FeatureDetails {
  header: string
  image: string
  body: string
}

interface IsProps {
  data: FeatureDetails[]
}

export const Features = ({ data }: IsProps) => (
  <div className="features-wrapper">
    {data.map(({ header, image, body }) => (
      <div key={header} className="feature-container">
        <div className="feature-header-container">
          <h2 className="feature-header-text">{header}</h2>
        </div>
        <div className="feature-body-container">
          <div className="feature-image-container">
            <img
              src={image}
              alt={`${header} image`}
              className="feature-image"
            />
          </div>
          {/* <div className="seperator-line" />
          <div className="feature-body-text-container">
            <p className="feature-body-text">{body}</p>
          </div> */}
        </div>
      </div>
    ))}
  </div>
)
