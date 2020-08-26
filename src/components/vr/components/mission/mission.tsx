import { BackgroundParallax } from "components/generalComponents/backgroundParallax/backgroundParallax"
import {
  SectionText,
  SectionWrapper,
} from "components/generalComponents/layout/sectionWrapper/sectionWrapper"
import * as backgroundHexagon from "images/background/hexagon.png"
import React from "react"

const headerData: SectionText = [
  [
    {
      text: "Striding",
    },
  ],
  [
    {
      text: "Into The",
    },
  ],
  [
    {
      text: "Future",
      alternate: true,
    },
  ],
]

const subheaderData: SectionText = [
  [
    {
      text: "Fully",
    },
  ],
  [
    {
      text: "Loaded",
      alternate: true,
    },
  ],
]

const bodyText = `Capitalizing on modern day technology, we ventured into developing the future of 3D carpets and 3D ground signs. Three years of research and development led us to successfully showcasing 3D VR Signage and its multitude of advantages during the Hero Nidahas Trophy 2018. A first in the industry of Cricket 3D Signage and Broadcast.

Our dedicated team is equipped with the latest technology, to provide a more present day and innovative solution for 3D Sports Advertising across various sporting events. Ensuring each brand reaches a broader targeted audience worldwide.`

export const Mission = () => (
  <div className="vr-mission-wrapper">
    <BackgroundParallax backgroundImage={backgroundHexagon} />
    <div className="vr-mission-container">
      <SectionWrapper header={headerData} subheader={subheaderData}>
        <div className="mission-body-container">
          <p className="body-text">{bodyText}</p>
        </div>
      </SectionWrapper>
    </div>
  </div>
)
