import React, { ReactChild } from "react"
import { Navbar } from "../navbar/navbar"
import "./pageWrapper.scss"

interface IsProps {
  children: ReactChild
}

export const PageWrapper = ({ children }: IsProps) => (
  <div className="page-wrapper">
    <Navbar />
    {children}
  </div>
)
