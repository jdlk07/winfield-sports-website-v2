import React from "react"

interface ImageProps {
  image: string
  projectHeader: string
  active: boolean
  setActiveImage: (newIndex: number) => void
  i: number
}

const Image = ({ image, projectHeader, active, i, setActiveImage }: ImageProps) => (
  <div onClick={() => setActiveImage(i)} className="thumbnail-container">
    <div className={`image-container${active ? " active" : ""}`}>
      <img src={image} alt={`${projectHeader} image`} className={`image`} />
    </div>
  </div>
)

interface IsProps {
  images: string[]
  activeImageIndex: number
  projectHeader: string
  setActiveImage: (newIndex: number) => void
}

export const Thumbnails = ({
  images,
  activeImageIndex,
  projectHeader,
  setActiveImage
}: IsProps) => {
  return (
    <div className="thumbnails-container">
      {images.map((image, i) => (
        <Image
          key={image}
          active={activeImageIndex === i}
          {...{image, projectHeader, setActiveImage, i}}
        />
      ))}
    </div>
  )
}
