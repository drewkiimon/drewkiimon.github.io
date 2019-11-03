import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

import("../styles.scss")
import("../../node_modules/font-awesome/css/font-awesome.css")

export default () => (
  <div>
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
    <div className="information">
      <div className="p-rel">
        <div className="vertical-line"></div>
        <div className="section">
          <div className="section-header">Education</div>
          <div className="section-info">
            <div className="section-info-header">
              <h3>B.S. in Computer Engineering</h3>
              <h4>Universify of California, Santa Barbara</h4>
            </div>
            <div className="section-info-dates">
              <span>November 2012 - June 2016</span>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-header">Experience</div>
          <div className="section-info">
            {/* <!-- Reputation --> */}
            <div className="section-info-header">
              <h3>Reputation.com</h3>
              <h4>Software Engineer</h4>
            </div>
            <div className="section-info-dates">
              <span>October 2018 - Present</span>
            </div>
            <ul className="section-info-points">
              <li>
                Member of the Business Listings, Notifications, and Internal
                Actions teams.
              </li>
              <li>
                Establish core foundation of playform-wide components for easy
                reusability
              </li>
              <li>Lead frontend engineer for Internal Actions team.</li>
              <li>
                Collaborate with designers and backend engineers to create
                roadmaps for projects
              </li>
            </ul>
            {/* <!-- Genentech --> */}
            <div className="section-info-header">
              <h3>Genentech</h3>
              <h4>Software Engineer</h4>
            </div>
            <div className="section-info-dates">
              <span>May 2017 - October 2018</span>
            </div>
            <ul className="section-info-points">
              <li>
                Overhauled department’s promotional process by developing a web
                application using React and Redux to automate data retrieval and
                document creation, saving 15 hours per nominee.
              </li>
              <li>
                Scripted applications using Python frameworks (Pandas, Numpy) to
                clean and organize large data sets for data visualization
                platforms.
              </li>
              <li>
                Reconciled financial data for 16 cost centers, reducing
                expenditures by 20% as a result of developing analytics platform
                using JavaScript and Tableau for manager’s decision making.
              </li>
              <li>
                Optimized work-hour allocations for facilities management by
                redesigning application using Bootstrap, CSS3, and HTML5,
                leading to a decrease of underutilized hours.
              </li>
            </ul>
            {/* <!-- Hitachi Data Systems --> */}
            <div className="section-info-header">
              <h3>Hitachi Data Systems</h3>
              <h4>Software QA Engineer</h4>
            </div>
            <div className="section-info-dates">
              <span>January 2017 - April 2017</span>
            </div>
            <ul className="section-info-points">
              <li>
                Facilitated software testing to provide feedback to developers
                as part of the software development cycle.
              </li>
              <li>
                Expanded internal QA libraries with Python scripts that
                identified potential hazards to software deployment.
              </li>
              <li>
                Streamlined the product-to-market pipeline by reproducing bugs
                and implementing preventative measures via Python scripts.
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="section-header">Skills</div>
          <div className="section-info">
            <div className="overview-container">
              <h3 className="overview-header">Languages</h3>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>AngularJS</li>
                <li>ES6</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="overview-container">
              <h3 className="overview-header">Tools</h3>
              <ul>
                <li>Bootstrap</li>
                <li>Tableau</li>
                <li>LESS/SCSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)
