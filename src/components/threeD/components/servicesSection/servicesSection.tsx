import {
  FeatureCard,
  FeatureCardProps,
} from "components/generalComponents/featureCard/featureCard"
import React from "react"
import designPoster from "./assets/design.png"
import implementationPoster from "./assets/implementation.png"
import productionPoster from "./assets/production.png"

const designCard: FeatureCardProps = {
  header: "DESIGN\n& RENDER",
  body: [
    "20+ Years of Experience",
    "In Stadia Branding",
    "3D Pitch Mats",
    "3D Grass Signs",
  ],
  image: designPoster,
  overlayColor: "rgb(175, 134, 216)",
}

const productionCard: FeatureCardProps = {
  header: "PRODUCTION\n& SHIPPING",
  body: [
    "3D Turf Mats",
    "3D Grass Signs",
    "Perimeter Branding",
    "Post Branding",
    "Presentations",
  ],
  image: productionPoster,
  overlayColor: "rgb(218, 142, 99)",
}

const implementationCard: FeatureCardProps = {
  header: "ON-FIELD IMPLEMENTATION",
  body: [
    "3D Grass Signs",
    "Perimeter Branding",
    "Presentations",
    "Post & Marker Branding",
    "Tier Branding",
  ],
  image: implementationPoster,
  overlayColor: "rgb(179, 47, 40)",
}

const cardData = [designCard, productionCard, implementationCard]

export const ServicesSection = () => (
  <div className="services-section-wrapper">
    <div className="services-section-container">
      {cardData.map(cardData => (
        <FeatureCard key={cardData.header} {...cardData} />
      ))}
    </div>
  </div>
)
