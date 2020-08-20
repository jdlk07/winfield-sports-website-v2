import {
  FeatureCard,
  FeatureCardProps,
} from "components/generalComponents/featureCard/featureCard"
import React from "react"
import designPoster from "./assets/design.png"
import implementationPoster from "./assets/implementation.png"
import productionPoster from "./assets/production.png"

const designCard: FeatureCardProps = {
  header: "3D DESIGN",
  body: ["3D Design", "Print Output", "Sign Placement Plans"],
  image: designPoster,
  overlayColor: "rgb(175, 134, 216)",
}

const productionCard: FeatureCardProps = {
  header: "BACKEND PRODUCTION",
  body: [
    "Material Production",
    "Implmentation Guide & Plan",
    "EXW/FOB/CIF Logistics",
  ],
  image: productionPoster,
  overlayColor: "rgb(218, 142, 99)",
}

const implementationCard: FeatureCardProps = {
  header: "TURN-KEY SOLUTIONS",
  body: [
    "Operations & Coordination",
    "On-Field Implementation",
    "Single Point of Contact",
    "Post Event Evaluation & Media",
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
