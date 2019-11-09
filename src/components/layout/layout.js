import React from "react"
import containerStyles from "./layout.module.scss"

export default ({ children }) => (
  <div className={containerStyles.blog}>{children}</div>
)
