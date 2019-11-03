import React from "react"

const ListItem = props => (
  <li>
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <i className={props.class}></i>
    </a>
  </li>
)

export default () => (
  <footer>
    <div className="details">
      <div className="name">Andrew Pagan</div>
      <div className="chat">
        <span>
          Let's chat. --
          <a href="mailto:andrew.r.pagan@gmail.com">andrew.r.pagan@gmail.com</a>
        </span>
      </div>
      <div className="copyright">
        <span>©2019 Andrew Pagan</span>
      </div>
    </div>
    <div className="social-media-links">
      <ul>
        <ListItem url="https://github.com/drewkiimon" class="fa fa-github" />
        <ListItem
          url="https://www.linkedin.com/in/andrewpagan/"
          class="fa fa-linkedin"
        />
        <ListItem
          url="https://soundcloud.com/drewkiimon"
          class="fa fa-soundcloud"
        />
      </ul>
    </div>
  </footer>
)
