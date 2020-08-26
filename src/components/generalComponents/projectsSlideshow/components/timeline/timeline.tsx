import React from "react"

interface TimelineObj {
  timelineHeader: string
  date: string
}

interface IsProps {
  data: TimelineObj[]
  activeIndex: number
  setActiveIndex: (newIndex: number) => void
}

export const Timeline = ({ data, activeIndex, setActiveIndex }: IsProps) => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        {data.map(({ timelineHeader, date }, i) => (
          <div
            key={timelineHeader + date}
            className={`timeline-item-container${
              activeIndex === i ? " active" : ""
            }`}
            onClick={() => setActiveIndex(i)}
          >
            <div className="header-container">
              <h2 className="timeline-header-text">{timelineHeader}</h2>
              <h2 className="timeline-header-text">{date}</h2>
            </div>
            <div className="line-container">
              <div className="line" />
              <div className="dot" />
            </div>
          </div>
        ))}
        <div
          className="line-container active-line-container"
          style={{
            width: `calc(100% / ${data.length})`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        >
          <div className="dot active-dot" />
        </div>
      </div>
    </div>
  )
}
