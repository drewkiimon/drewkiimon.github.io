import React from "react"
import Navigation from "../../components/navigation/navigation"
import Layout from "../../components/layout/layout"
import("./blog.scss")

export default () => (
  <div>
    <Navigation></Navigation>
    <Layout>
      <h1 className="title">Blog</h1>
      <div className="blog">
        <h2 className="blog-title">Title of Blog Article</h2>
        <p className="blog-details">I am some random details</p>
      </div>
    </Layout>
  </div>
)
