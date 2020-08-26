import { arrowIcon } from "images/"
import React from "react"

const NavigationArrow = ({
  left,
  onClick,
}: {
  left?: boolean
  onClick: () => void
}) => (
  <div
    onClick={onClick}
    className={`navigation-arrow-wrapper ${left ? "left" : "right"}`}
  >
    <img
      src={arrowIcon}
      alt="Navigation Arrow"
      className={`navigation-arrow`}
    />
  </div>
)

const defaultContainerStyle = {
  transitionTime: 500,
  x: 100,
}

interface ImageProps {
  image: string
  projectHeader: string
  totalImages: number
  active: boolean
}

const Image = ({ image, projectHeader, totalImages, active }: ImageProps) => (
  <div
    style={{
      width: `calc(100% / ${totalImages})`,
    }}
    className="image-wrapper"
  >
    <div className={`image-container${active ? " active" : ""}`}>
      <img
        src={image}
        alt={`${projectHeader} large image`}
        className="large-image"
      />
    </div>
  </div>
)

interface IsProps {
  images: string[]
  activeImageIndex: number
  projectHeader: string
  goToNextImaage: () => void
  goToPrevImaage: () => void
}

export const LargeImage = ({
  images,
  projectHeader,
  activeImageIndex,
  goToNextImaage,
  goToPrevImaage,
}: IsProps) => {
  let totalImages = images.length
  return (
    <div className="large-image-container">
      <NavigationArrow onClick={goToPrevImaage} left />
      <div
        style={{
          width: `${100 * totalImages}%`,
          transition: `500ms`,
          transform: `translateX(${activeImageIndex * -100}%)`,
        }}
        className="image-slider"
      >
        {images.map((image, i) => (
          <Image
            key={i}
            active={i === activeImageIndex}
            {...{ image, projectHeader, totalImages }}
          />
        ))}
      </div>
      <NavigationArrow onClick={goToNextImaage} />
    </div>
  )
}
