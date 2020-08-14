import {
  FeatureCard,
  FeatureCardProps,
} from "components/generalComponents/featureCard/featureCard"
import React from "react"
import tdPoster from "./assets/3d_poster.png"
import brandingPoster from "./assets/branding_poster.png"
import vrPoster from "./assets/vr_poster.png"

const vrCard: FeatureCardProps = {
  header: "3D\nVR SIGNS",
  body:
    "Add life & experience multiple options for your sports digital media with the latest platform of 3D VR ad space in sporting events.",
  image: vrPoster,
  overlayColor: "rgb(165, 184, 210)",
}

const tdCard: FeatureCardProps = {
  header: "3D\nON-FIELD",
  body:
    "High quality & durable 3D on field signage product options. 100% brand capitalization & vibrancy guaranteed.",
  image: tdPoster,
  overlayColor: "rgb(95, 174, 1)",
}

const brandingCard: FeatureCardProps = {
  header: "IN-STADIA\nBRANDING",
  body:
    "Enhance your event look & feel with our vast array of total stadia & event branding options.",
  image: brandingPoster,
  overlayColor: "rgb(87, 158, 211)",
}

const cardData = [vrCard, tdCard, brandingCard]

export const Products = () => (
  <div className="products-wrapper">
    <div className="products-container">
      {cardData.map(cardData => (
        <FeatureCard key={cardData.header} {...cardData} alignTopLeft />
      ))}
    </div>
  </div>
)
