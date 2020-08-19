import React, { ReactChild } from "react"
import { PageFooter } from "../footer/footer"
import { Navbar } from "../navbar/navbar"
import "./pageWrapper.scss"

interface IsProps {
  children: ReactChild
}

export const PageWrapper = ({ children }: IsProps) => (
  <div className="page-layout-wrapper">
    <Navbar />
    {children}
    <PageFooter />
  </div>
)
