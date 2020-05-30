import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="error highlight-laser">NOT FOUND</h1>
    <p>You seem lost, traveller. Take this <a className="magic-potion" href="/">magic potion</a>, it'll guide you to your destiny...</p>
  </Layout>
)

export default NotFoundPage
