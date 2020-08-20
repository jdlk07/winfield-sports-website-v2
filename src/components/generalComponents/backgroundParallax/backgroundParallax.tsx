import React, { useEffect, useRef } from "react"
import { animated, to, useSpring } from "react-spring"
import "./backgroundParallax.scss"

const calc = (o: number) => `translateY(${o * 0.08}px)`

interface IsProps {
  backgroundImage: string
}

const _BackgroundParallax = ({ backgroundImage }: IsProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  const handleScroll = () => {
    const posY = ref.current!.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div ref={ref} className="background-parallax-wrapper">
      <animated.div
        style={{
          transform: to([offset], calc),
        }}
        className="parallax-image-container"
      >
        <img
          src={backgroundImage}
          alt="Background Image"
          className="parallax-background-image"
        />
      </animated.div>
    </div>
  )
}

export const BackgroundParallax = React.memo(_BackgroundParallax)
