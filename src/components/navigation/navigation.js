import React from "react"
import logo from "../../../static/AP.png"
import { Link } from "gatsby"

import("./navigation.module.scss")

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.text}</Link>
  </li>
)

export default () => (
  <nav>
    <img
      className="icon"
      src={logo}
      height="72"
      width="72"
      alt="Andrew Pagan the Third logo"
    />
    <ul>
      <ListLink to="" text="About"></ListLink>
      {/* <ListLink to="" text="Projects"></ListLink> */}
      <ListLink to="/blog" text="Blog"></ListLink>
      {/* <ListLink to="" text="Contacts"></ListLink> */}
    </ul>
  </nav>
)
