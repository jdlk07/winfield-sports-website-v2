import { PageTransition } from "components/generalComponents/pageTransition/pageTransition"
import { ThreeD } from "components/threeD/threeD"
import React, { useCallback, useEffect, useState } from "react"

const ThreeDPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //Just incase the onLoad function is not called for whatever reason after 5 secs the page transition is hidden
    const loadingTimeout = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(loadingTimeout)
  }, [])

  const onLoad = useCallback(() => setLoading(false), [])

  return (
    <div className="page-wrapper">
      <PageTransition forceActive={loading} />
      <ThreeD onLoad={onLoad} />
    </div>
  )
}

export default ThreeDPage
