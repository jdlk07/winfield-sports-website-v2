import { PageWrapper } from "components/generalComponents/layout/pageWrapper/pageWrapper"
import React from "react"
import { Advantages } from "./components/advantages/advantages"
import { Features } from "./components/features/features"
import { Hero } from "./components/hero/hero"
import { Mission } from "./components/mission/mission"
import { PastProjects } from "./components/pastProjects/pastProjects"
import { VrPlacement } from "./components/vrPlacement/vrPlacement"
import "./vr.scss"

interface IsProps {
  onLoad: () => void
}

const _Vr = ({ onLoad }: IsProps) => {
  return (
    <PageWrapper title={"3D VR"}>
      <div className="vr-wrapper">
        <Hero {...{ onLoad }} />
        <Mission />
        <Advantages />
        <VrPlacement />
        <Features />
        <PastProjects />
      </div>
    </PageWrapper>
  )
}

export const Vr = React.memo(_Vr)
