import React from "react"
import logo from "../../static/AP.png"
import { Link } from "gatsby"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

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
      <li>
      <Link to="">About</Link>
      </li>
      {/* <li>Projects</li> */}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {/* <li>Contact</li> */}
    </ul>
  </nav>
)
