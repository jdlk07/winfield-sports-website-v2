import React, { ReactNode } from "react"
import "./sectionWrapper.scss"

interface TextObj {
  text: string
  alternate?: boolean
}

export type SectionText = TextObj[]

interface SectionHeaderProps {
  header: SectionText
  subheader: SectionText
  alignRight?: boolean
}

const SectionHeader = React.memo(
  ({ header, subheader, alignRight }: SectionHeaderProps) => (
    <div className="header-wrapper">
      {alignRight ? <span className="section-seperator"></span> : null}
      <div className="header-container">
        <div className="header-text-container">
          {header.map(({ text, alternate }, i) => (
            <h1
              key={i}
              className={`section-header${
                alternate ? " alternate-header" : ""
              }`}
            >
              {text}
            </h1>
          ))}
        </div>
        <div className="subheader-text-container">
          {subheader.map(({ text, alternate }, i) => (
            <h2
              key={i}
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
  )
)

interface IsProps extends SectionHeaderProps {
  children: ReactNode
}

export const SectionWrapper = ({
  header,
  subheader,
  children,
  alignRight,
}: IsProps) => (
  <div className={`section-wrapper${alignRight ? " align-right" : ""}`}>
    <div className="section-container">
      <SectionHeader {...{ header, subheader, alignRight }} />
      <div className="body-container">{children}</div>
    </div>
  </div>
)
