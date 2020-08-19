import { PageTransition } from "components/generalComponents/pageTransition/pageTransition"
import { Home } from "components/home/home"
import React, { useCallback, useEffect, useState } from "react"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

const IndexPage = () => {
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
      <Home onLoad={onLoad} />
    </div>
  )
}

export default IndexPage
