import { BackgroundParallax } from "components/generalComponents/backgroundParallax/backgroundParallax"
import {
  SectionText,
  SectionWrapper,
} from "components/generalComponents/layout/sectionWrapper/sectionWrapper"
import * as backgroundSwirl from "images/background/swirl.png"
import React from "react"

const headerData: SectionText = [
  [
    {
      text: "Set the",
    },
  ],
  [
    {
      text: "Stage",
      alternate: true,
    },
  ],
]

const subheaderData: SectionText = [
  [
    {
      text: "For the",
    },
  ],
  [
    {
      //Added spaces to force a link break.
      text: "Future",
      alternate: true,
    },
  ],
]

const bodyText = `Using our proprietary 3D – On Field Design software, we have managed to deliver unparalleled and unmatched sports advertising opportunities to many clients across many sporting events. Using our point projection software, we manage to utilize flat ad-space to resemble free standing advertising for our on-screen viewers.

Our clients have the unique opportunity of showcasing their brands at the heart of all the action, optimizing and extrapolating their branding avenues. We offer a variety of branding and production options depending on our clients preferences or for the stage of advertising.`

export const Mission = () => (
  <div className="three-d-mission-wrapper">
    <BackgroundParallax backgroundImage={backgroundSwirl} />
    <div className="three-d-mission-container">
      <SectionWrapper header={headerData} subheader={subheaderData}>
        <div className="mission-body-container">
          <p className="body-text">{bodyText}</p>
        </div>
      </SectionWrapper>
    </div>
  </div>
)
