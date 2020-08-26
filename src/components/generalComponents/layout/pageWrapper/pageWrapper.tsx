import SEO from "components/seo"
import React, { ReactChild } from "react"
import { PageFooter } from "../footer/footer"
import { Navbar } from "../navbar/navbar"
import "./pageWrapper.scss"

interface IsProps {
  title: string
  children: ReactChild
}

export const PageWrapper = ({ title, children }: IsProps) => (
  <div className="page-layout-wrapper">
    <Navbar />
    <SEO title={title} />
    {children}
    <PageFooter />
  </div>
)
