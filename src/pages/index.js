import React from "react"
import Navigation from "../components/navigation"
import Information from "../components/information"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

import("../styles.scss")
import("../../node_modules/font-awesome/css/font-awesome.css")

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Andrew Pagan's portfolio website" />
      <meta
        name="keywords"
        content="Andrew,Pagan,portfolio,frontend,engineer,software"
      />
      <meta name="author" content="Andrew Pagan" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Andrew Pagan</title>
      <link rel="canonical" href="http://andrewpagan.me" />
      <html lang="en" />
    </Helmet>
    <Navigation />

    <div className="header">
      <h1>Hello, I'm Andrew.</h1>
      <h1>I am a front-end developer.</h1>
    </div>
    <div className="about-me">
      <h2>About</h2>
      <p>
        Hey there! I'm Andrew Pagan. A 26 year-old cat owner and active
        financial learner that works as a front-end developer in the Bay Area.
        My goal in life is to teach young adults and high school students what
        it means to "adult" through teaching basic financial practices such as
        the difference between a Roth IRA and 401k, and the power of compound
        interest.
        <br />
        <br />I live by the motto "never stop growing". A motto that reminds me
        that your education doesn't stop after college and that investing in
        yourself is invaluable.
      </p>
    </div>

    <Information />
    <Footer />
  </div>
)
