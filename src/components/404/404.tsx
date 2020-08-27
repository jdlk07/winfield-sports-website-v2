import { PageWrapper } from "components/generalComponents/layout/pageWrapper/pageWrapper"
import SEO from "components/seo"
import React from "react"
import "./404.scss"

export const NotFound = () => (
  <PageWrapper title={"Page not found"}>
    <div className="not-found-wrapper">
      <SEO title={"Winfield Sports"} />
      <div className="not-found-container">
        <div title="404" className="header-text">
          404
        </div>
        <h2 className="subheader-text">That's an error.</h2>
        <p className="body-text">The page you're looking for doesn't exist.</p>
        <div className="shadow"></div>
      </div>
    </div>
  </PageWrapper>
)
