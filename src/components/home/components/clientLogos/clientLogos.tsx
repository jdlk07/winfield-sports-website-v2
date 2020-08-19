import React, { useEffect, useState } from "react"
import broadcastLogo1 from "./assets/broadcastLogos/1.png"
import broadcastLogo2 from "./assets/broadcastLogos/2.png"
import broadcastLogo3 from "./assets/broadcastLogos/3.png"
import broadcastLogo4 from "./assets/broadcastLogos/4.png"
import broadcastLogo5 from "./assets/broadcastLogos/5.png"
import broadcastLogo6 from "./assets/broadcastLogos/6.png"
import cricketBodyLogo1 from "./assets/cricketBodiesLogos/1.png"
import cricketBodyLogo2 from "./assets/cricketBodiesLogos/2.png"
import cricketBodyLogo3 from "./assets/cricketBodiesLogos/3.png"
import cricketBodyLogo4 from "./assets/cricketBodiesLogos/4.png"
import cricketBodyLogo5 from "./assets/cricketBodiesLogos/5.png"
import cricketBodyLogo6 from "./assets/cricketBodiesLogos/6.png"
import mainEventsLogo1 from "./assets/eventsLogos/1.png"
import mainEventsLogo2 from "./assets/eventsLogos/2.png"
import mainEventsLogo3 from "./assets/eventsLogos/3.png"
import mainEventsLogo4 from "./assets/eventsLogos/4.png"
import mainEventsLogo5 from "./assets/eventsLogos/5.png"
import mainEventsLogo6 from "./assets/eventsLogos/6.png"
import sponsorshipLogo1 from "./assets/sponsorshipLogos/1.png"
import sponsorshipLogo2 from "./assets/sponsorshipLogos/2.png"
import sponsorshipLogo3 from "./assets/sponsorshipLogos/3.png"
import sponsorshipLogo4 from "./assets/sponsorshipLogos/4.png"
import { Header } from "./components/header"
import { Logos } from "./components/logos"

const cricket = {
  title: "International Cricket Bodies",
  logos: [
    cricketBodyLogo1,
    cricketBodyLogo2,
    cricketBodyLogo3,
    cricketBodyLogo4,
    cricketBodyLogo5,
    cricketBodyLogo6,
  ],
}

const broadcast = {
  title: "Broadcast & Production",
  logos: [
    broadcastLogo1,
    broadcastLogo2,
    broadcastLogo3,
    broadcastLogo4,
    broadcastLogo5,
    broadcastLogo6,
  ],
}

const events = {
  title: "Main Events & Leagues",
  logos: [
    mainEventsLogo1,
    mainEventsLogo2,
    mainEventsLogo3,
    mainEventsLogo4,
    mainEventsLogo5,
    mainEventsLogo6,
  ],
}

const sponsorship = {
  title: "Sponsorship Management",
  logos: [
    sponsorshipLogo1,
    sponsorshipLogo2,
    sponsorshipLogo3,
    sponsorshipLogo4,
  ],
}

const categories = [cricket, broadcast, events, sponsorship]

export const ClientLogos = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  useEffect(() => {
    const timeoutRef = setInterval(
      () =>
        setActiveCategoryIndex(i => (i === categories.length - 1 ? 0 : i + 1)),
      6000
    )

    return () => {
      clearInterval(timeoutRef)
    }
  }, [])

  return (
    <div className="client-logos-wrapper">
      <div className="client-logos-container">
        <div className="header-wrapper">
          {/* <div className="fancy-line-container"> */}
          <div className="fancy-line"></div>
          <div className="header-background">
            {categories.map(({ title }, i) => (
              <Header
                key={title}
                header={title}
                active={i === activeCategoryIndex}
              />
            ))}
          </div>
          <div className="fancy-line fancy-line-2"></div>
          {/* </div> */}
        </div>
        <div className="body-container">
          {categories.map(({ title, logos }, i) => (
            <Logos
              key={title}
              {...{ logos }}
              active={i === activeCategoryIndex}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
