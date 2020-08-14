import { PageWrapper } from "components/generalComponents/layout/pageWrapper/pageWrapper"
import SEO from "components/seo"
import React from "react"
import { GlobalPresence } from "./components/globalPresence/globalPresence"
import { Hero } from "./components/hero/hero"
import { Mission } from "./components/mission/mission"
import { Products } from "./components/products/products"
import { SportsServices } from "./components/sportsServices/sportsServices"
import "./sass/home.scss"

export const Home = () => {
  return (
    <PageWrapper>
      <div className="home-wrapper">
        <SEO title={"Winfield Sports"} />
        <Hero />
        <Mission />
        <SportsServices />
        <GlobalPresence />
        <Products />
      </div>
    </PageWrapper>
  )
}
