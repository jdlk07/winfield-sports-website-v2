import React from "react"
import { FeatureDetails, Features } from "./components/features/features"

interface BodyDetails {
  title: string
  body: string
}

export interface ProductData {
  header: string
  image: string
  details: BodyDetails[]
  features: FeatureDetails[]
}

export const Product = ({ header, image, details, features }: ProductData) => (
  <div className="product-wrapper">
    <div className="product-container">
      <h1 className="header-text">{header}</h1>
      <div className="image-container">
        <img src={image} alt={`${header} image`} className="product-image" />
      </div>
      <div className="body-container">
        {/**Consider deleting below once confirmed it will no longer be used. (13 Mar 2020) */}
        {/* {details.map(({ title, body }) => (
          <div key={title} className="body-detail-container">
            <div className="body-title-container">
              <p className="body-title-text">{`${title}:`}</p>
            </div>
            <p className="body-detail-text">{body}</p>
          </div>
        ))} */}
      </div>
    </div>
    <Features data={features} />
  </div>
)
