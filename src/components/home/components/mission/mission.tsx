import { BackgroundParallax } from "components/generalComponents/backgroundParallax/backgroundParallax"
import {
  SectionText,
  SectionWrapper,
} from "components/generalComponents/layout/sectionWrapper/sectionWrapper"
import backgroundPolygon from "images/background/polygon.png"
import React from "react"

const headerData: SectionText = [
  {
    text: "Total",
  },
  {
    text: "Sports",
    alternate: true,
  },
  {
    text: "Signage",
    alternate: true,
  },
  {
    text: "Solutions",
  },
]

const subheaderData: SectionText = [
  {
    text: "Since",
  },
  {
    text: "2000",
    alternate: true,
  },
]

const bodyText = `Winfield was established in 1999 in Sri Lanka as a BTL (below-the-line) company, that grew steadily and diversified horizontally in the field of Outdoor Advertising. And later became the single specialized company in Sports branding and Signage.

In 2000, we embarked on a journey to become a committed outfit to handle all Sporting events in Rugby, Football, Athletics, Cricket, Water Sports, Golf etc. Committed to a vision of excelling to achieve the mission to make brands “Stand Out” - On & Off the Field.

As a specialized Sports branding and Signage company, Winfield with strategic partnerships has implemented total ground branding for bi-lateral tours in the last 5 years in The West Indies, Zimbabwe, UAE, India, Bangladesh, Ireland and Sri Lanka.`

export const Mission = () => (
  <div className="home-mission-wrapper">
    <BackgroundParallax backgroundImage={backgroundPolygon} />
    <div className="home-mission-container">
      <SectionWrapper header={headerData} subheader={subheaderData}>
        <div className="mission-body-container">
          <p className="body-text">{bodyText}</p>
        </div>
      </SectionWrapper>
    </div>
  </div>
)
