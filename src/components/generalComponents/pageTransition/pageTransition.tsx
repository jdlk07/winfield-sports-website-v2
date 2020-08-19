import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import React, { useEffect, useState } from "react"
import { animated, SpringConfig, to, useTrail } from "react-spring"
import "./pageTransition.scss"

interface IsProps {
  forceActive?: boolean
  // page: string
}

const config: SpringConfig = {
  mass: 8,
  tension: 1200,
  friction: 150,
  // duration: 500,
}

const activeTransitionStates = ["exiting", "exited"]

const _PageTransition = ({ forceActive }: IsProps) => {
  const state = useTransitionState()
  const { transitionStatus, mount, current, exit, entry } = state

  const [active, setActive] = useState(forceActive)

  const visible =
    activeTransitionStates.includes(transitionStatus) || forceActive

  useEffect(() => {
    const delayTimer = setTimeout(
      () => {
        if (!forceActive) {
          setActive(false)
        }
      },
      !forceActive ? 1500 : 0
    )

    return () => clearTimeout(delayTimer)
  }, [forceActive])

  const trail = useTrail(6, {
    config,
    y: visible ? 0 : 100,
    from: { y: 0 },
  })

  if (transitionStatus === "entered" && !active) {
    return null
  }

  return (
    <div className="page-transition-wrapper">
      {trail.map(({ y }, i) => (
        <animated.div
          key={i}
          style={{
            // transform: y.interpolate(value => `translateY(${value}%)`),
            transform: to([y], y => `translateY(${y}%)`),
          }}
          className="page-transition-column"
        />
      ))}

      {/* {Array(6)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="page-transition-column"></div>
        ))} */}
    </div>
  )
}

export const PageTransition = React.memo(_PageTransition)
