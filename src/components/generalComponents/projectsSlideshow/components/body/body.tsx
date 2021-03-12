import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import { ProjectObj } from "../../projectsSlideshow"
import { LargeImage } from "./components/largeImage/largeImage"
import { Thumbnails } from "./components/thumbnails/thumbnails"

interface IsProps {
  data: ProjectObj[]
  activeIndex: number
}

export const Body = ({ data, activeIndex }: IsProps) => {
  const didMount = useRef(false)

  const [currentProjectIndex, setCurrentProjectIndex] = useState(activeIndex)

  const {
    header,
    date,
    description,
    images,
    detailsHeader,
    details,
  } = useMemo(() => data[currentProjectIndex], [currentProjectIndex])

  const [activeImageIndex, setActiveImageIndex] = useState(1)

  const goToNextIndex = useCallback(
    () => setActiveImageIndex(s => (s === images.length - 1 ? 0 : s + 1)),
    []
  )

  const goToPreviousIndex = useCallback(
    () => setActiveImageIndex(s => (s === 0 ? images.length - 1 : s - 1)),
    []
  )

  const setNewImageIndex = useCallback(
    (newIndex: number) => setActiveImageIndex(newIndex),
    []
  )

  // const [springTrail, setSpringTrail, stopSpringTrail] = useTrail(6, () => ({
  //   opacity: 1,
  // }))

  const [animProps, setAnimProps, stopAnim] = useSpring(() => ({ opacity: 1 }))

  useEffect(() => {
    if (didMount.current) {
      const callback = () => setCurrentProjectIndex(activeIndex)
      setAnimProps({ opacity: 0, onRest: callback })
    } else {
      didMount.current = true
    }
  }, [activeIndex])

  useEffect(() => {
    setAnimProps({ opacity: 1 })
  }, [currentProjectIndex])

  // const [spring1, spring2, spring3, spring4, spring5, spring6] = springTrail

  return (
    <div className="body-wrapper">
      <div className="information-wrapper">
        <animated.div style={animProps} className="header-container">
          <h2 className="header-text">{header}</h2>
          <h3 className="date-text">{date}</h3>
        </animated.div>
        <animated.div style={animProps} className="description-container">
          <p className="description-text">{description}</p>
        </animated.div>
        <animated.div style={animProps} className="thumbnails-wrapper">
          <Thumbnails
            images={images}
            activeImageIndex={activeImageIndex}
            projectHeader={header}
            setActiveImage={setNewImageIndex}
          />
        </animated.div>
        <animated.div style={animProps} className="details-header-container">
          <h3 className="details-header-text">{detailsHeader}</h3>
        </animated.div>
        <animated.div style={animProps} className="details-wrapper">
          {details.map(({ title, body }) => (
            <div key={title} className="detail-container">
              <div className="title-container">
                <p className="detail-text">{title}</p>
                <p className="detail-text">:</p>
              </div>
              <p className="detail-text">{body}</p>
            </div>
          ))}
        </animated.div>
      </div>
      <animated.div style={animProps} className="large-image-wrapper">
        <LargeImage
          images={images}
          activeImageIndex={activeImageIndex}
          projectHeader={header}
          goToNextImaage={goToNextIndex}
          goToPrevImaage={goToPreviousIndex}
        />
      </animated.div>
    </div>
  )
}
