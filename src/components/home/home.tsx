import { PageWrapper } from "components/generalComponents/layout/pageWrapper/pageWrapper"
import SEO from "components/seo"
import React from "react"
import { ClientLogos } from "./components/clientLogos/clientLogos"
import { GlobalPresence } from "./components/globalPresence/globalPresence"
import { Hero } from "./components/hero/hero"
import { Mission } from "./components/mission/mission"
import { Products } from "./components/products/products"
import { SportsServices } from "./components/sportsServices/sportsServices"
import "./home.scss"

interface IsProps {
  onLoad: () => void
}

const _Home = ({ onLoad }: IsProps) => {
  return (
    <PageWrapper>
      <div className="home-wrapper">
        <SEO title={"Winfield Sports"} />
        <Hero onLoad={onLoad} />
        <Mission />
        <SportsServices />
        <GlobalPresence />
        <Products />
        <ClientLogos />
      </div>
    </PageWrapper>
  )
}

export const Home = React.memo(_Home)
