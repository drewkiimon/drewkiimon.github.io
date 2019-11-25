import React from "react"
import { Link } from "gatsby"
import Navigation from "../../../components/navigation/navigation"
import Layout from "../../../components/layout/layout"

const title = "Love Language"

export default () => (
  <div>
    <Navigation></Navigation>
    <Layout>
      <div class="breadcrumb">
        <Link to="/blog">Blog</Link>
        <p>{title}</p>
      </div>
    </Layout>
  </div>
)
