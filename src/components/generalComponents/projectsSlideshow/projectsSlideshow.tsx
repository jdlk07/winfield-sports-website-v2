import React, { useMemo, useState } from "react"
import { Body } from "./components/body/body"
import { Timeline } from "./components/timeline/timeline"
import "./projectsSlideshow.scss"

interface DetailObj {
  title: string
  body: string
}

export interface ProjectObj {
  timelineHeader: string
  header: string
  date: string
  description: string
  detailsHeader: string
  details: DetailObj[]
  images: string[]
}

interface IsProps {
  data: ProjectObj[]
}

export const ProjectsSlideshow = ({ data }: IsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const timelineData = useMemo(
    () => data.map(({ timelineHeader, date }) => ({ timelineHeader, date })),
    []
  )

  return (
    <div className="projects-slideshow-wrapper">
      <div className="projects-slideshow-container">
        <div className="projects-main-header">
          <h1 className="projects-main-header-text">PROJECTS</h1>
        </div>
        <Timeline
          data={timelineData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Body data={data} activeIndex={activeIndex} />
      </div>
    </div>
  )
}
