import React, { ReactNode, useRef } from "react"
import { useIsVisible } from "react-is-visible"
import "./sectionWrapper.scss"

interface TextObj {
  text: string
  alternate?: boolean
}

type TextArray = TextObj[]

export type SectionText = TextArray[]

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
          {header.map((textArray, i) => (
            <div key={i} className="header-subcontainer">
              {textArray.map(({ text, alternate }, i) => (
                <h1
                  key={i}
                  className={`section-header${
                    alternate ? " alternate-text" : ""
                  }`}
                >
                  {text}
                </h1>
              ))}
            </div>
          ))}
        </div>
        <div className="subheader-text-container">
          {subheader.map((textArray, i) => (
            <div key={i} className="subheader-subcontainer">
              {textArray.map(({ text, alternate }, i) => (
                <h2
                  key={i}
                  className={`section-sub-header${
                    alternate ? " alternate-text" : ""
                  }`}
                >
                  {text}
                </h2>
              ))}
            </div>
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
}: IsProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(nodeRef, { once: true })

  return (
    <div
      ref={nodeRef}
      className={`section-wrapper ${isVisible ? "visible" : "hidden"}${
        alignRight ? " align-right" : ""
      }`}
    >
      <div className="section-container">
        <SectionHeader {...{ header, subheader, alignRight }} />
        <div className="body-container">{children}</div>
      </div>
    </div>
  )
}
