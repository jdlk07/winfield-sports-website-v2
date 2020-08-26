import { PageWrapper } from "components/generalComponents/layout/pageWrapper/pageWrapper"
import React from "react"
import { Hero } from "./components/hero/hero"
import { Mission } from "./components/mission/mission"
import { Products } from "./components/products/products"
import { ServicesSection } from "./components/servicesSection/servicesSection"
import "./threeD.scss"

interface IsProps {
  onLoad: () => void
}

const _ThreeD = ({ onLoad }: IsProps) => {
  return (
    <PageWrapper title={"3D ON-Field"}>
      <div className="three-d-wrapper">
        <Hero onLoad={onLoad} />
        <Mission />
        <Products />
        <ServicesSection />
        {/* <PastProjects /> */}
      </div>
    </PageWrapper>
  )
}

export const ThreeD = React.memo(_ThreeD)
