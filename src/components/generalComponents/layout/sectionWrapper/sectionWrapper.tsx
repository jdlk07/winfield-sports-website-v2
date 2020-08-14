import React, { ReactNode } from "react"
import "./sectionWrapper.scss"

interface TextObj {
  text: string
  alternate?: boolean
}

export type SectionText = TextObj[]

interface IsProps {
  header: SectionText
  subheader: SectionText
  children: ReactNode
  alignRight?: boolean
}

export const SectionWrapper = ({
  header,
  subheader,
  children,
  alignRight,
}: IsProps) => (
  <div className={`section-wrapper${alignRight ? " align-right" : ""}`}>
    <div className="section-container">
      <div className="header-wrapper">
        {alignRight ? <span className="section-seperator"></span> : null}
        <div className="header-container">
          <div className="header-text-container">
            {header.map(({ text, alternate }) => (
              <h1
                className={`section-header${
                  alternate ? " alternate-header" : ""
                }`}
              >
                {text}
              </h1>
            ))}
          </div>
          <div className="subheader-text-container">
            {subheader.map(({ text, alternate }) => (
              <h2
                className={`section-sub-header${
                  alternate ? " alternate-sub-header" : ""
                }`}
              >
                {text}
              </h2>
            ))}
          </div>
        </div>
        {alignRight ? null : <span className="section-seperator"></span>}
      </div>
      <div className="body-container">{children}</div>
    </div>
  </div>
)
