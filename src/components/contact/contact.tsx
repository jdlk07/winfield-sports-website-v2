import { PageWrapper } from "components/generalComponents/layout/pageWrapper/pageWrapper"
import React from "react"
import { ContactSection } from "./components/contactSection/contactSection"
import { Hero } from "./components/hero/hero"
import "./contact.scss"

interface IsProps {
  onLoad: () => void
}

export const Contact = ({ onLoad }: IsProps) => (
  <PageWrapper title={"Contact Us"}>
    <div className="contact-wrapper">
      <Hero {...{ onLoad }} />
      <ContactSection />
    </div>
  </PageWrapper>
)
