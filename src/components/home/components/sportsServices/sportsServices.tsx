import {
  FeatureCard,
  FeatureCardProps,
} from "components/generalComponents/featureCard/featureCard"
import React from "react"
import cricketPoster from "./assets/cricket_poster.png"
import footballPoster from "./assets/football_poster.png"
import rugbyPoster from "./assets/rugby_poster.png"

const cricketCard: FeatureCardProps = {
  header: "Cricket",
  body: [
    "20+ Years of Experience",
    "In Stadia Branding",
    "3D Pitch Mats",
    "3D Grass Signs",
  ],
  image: cricketPoster,
  overlayColor: "rgb(242, 148, 54)",
}

const footballCard: FeatureCardProps = {
  header: "Football",
  body: [
    "3D Turf Mats",
    "3D Grass Signs",
    "Perimeter Branding",
    "Post Branding",
    "Presentations",
  ],
  image: footballPoster,
  overlayColor: "rgb(172, 106, 113)",
}

const rugbyCard: FeatureCardProps = {
  header: "Rugby",
  body: [
    "3D Grass Signs",
    "Perimeter Branding",
    "Presentations",
    "Post & Marker Branding",
    "Tier Branding",
  ],
  image: rugbyPoster,
  overlayColor: "rgb(190, 95, 167)",
}

const cardData = [cricketCard, footballCard, rugbyCard]

export const SportsServices = () => (
  <div className="sports-services-wrapper">
    <div className="sports-services-header-container">
      <h1 className="header-top">Let us take care of your</h1>
      <h1 className="header-bottom">Brand</h1>
    </div>
    <div className="sports-services-container">
      {cardData.map(cardData => (
        <FeatureCard key={cardData.header} {...cardData} />
      ))}
    </div>
  </div>
)
