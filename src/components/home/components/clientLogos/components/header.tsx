import React from "react"
import { animated, useSpring } from "react-spring"

const headerConfig = { mass: 10, tension: 1000, friction: 200 }

interface IsProps {
  header: string
  active: boolean
}

const _Header = ({ header, active }: IsProps) => {
  const headerProps = useSpring({
    config: headerConfig,
    opacity: active ? 1 : 0,
    transform: active ? `translateY(0)` : `translateY(-20%)`,
    delay: active ? 800 : 0,
  })

  return (
    <animated.div style={headerProps} className="header-container">
      <h2 className="header-text">{header}</h2>
    </animated.div>
  )
}

export const Header = React.memo(_Header)
