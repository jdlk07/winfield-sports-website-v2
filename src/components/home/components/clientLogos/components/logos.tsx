import React from "react"
import { animated, to, useTrail } from "react-spring"

interface IsProps {
  logos: string[]
  active: boolean
}

const config = { mass: 8, tension: 1500, friction: 200 }

const _Logos = ({ logos, active }: IsProps) => {
  const trail = useTrail(logos.length, {
    config,
    opacity: active ? 1 : 0,
    x: active ? 0 : 40,
    delay: active ? 1200 : 0,
    from: { opacity: 0, x: 30, height: 0 },
  })

  return (
    <div className="logos-wrapper">
      {trail.map(({ x, height, ...rest }, i) => (
        <animated.div
          key={logos[i]}
          style={{
            ...rest,
            transform: to([x], x => `translate3d(0,${x}px,0)`),
          }}
          className="logo-container"
        >
          <img src={logos[i]} alt="Client Logo" className="client-logo" />
        </animated.div>
      ))}
    </div>
  )
}

export const Logos = React.memo(_Logos)
