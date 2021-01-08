import React from "react"
const Resume = require("./Resume.json")

export default function information() {
  console.log(Resume)
  return (
    <div className="information">
      <div className="p-rel">
        <div className="vertical-line"></div>
        <div className="section">
          <div className="section-header">Education</div>
          <div className="section-info">
            <div className="section-info-header">
              <h3>{Resume.education.degree}</h3>
              <h4>{Resume.education.school}</h4>
            </div>
            <div className="section-info-dates">
              <span>
                {Resume.education.startDate} - {Resume.education.endDate}
              </span>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-header">Experience</div>
          <div className="section-info">
            {Resume.experience.jobs.map(job => (
              <>
                <div className="section-info-header">
                  <h3>{job.company}</h3>
                  <h4>{job.title}</h4>
                </div>
                <div className="section-info-dates">
                  <span>
                    {job.startDate} - {job.endDate}
                  </span>
                </div>
                <ul className="section-info-points">
                  {job.details.map(detail => (
                    <li>{detail}</li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="section-header">Skills</div>
          <div className="section-info">
            <div className="overview-container">
              <h3 className="overview-header">Languages</h3>
              <ul>
                {Resume.skills.languages.map(language => (
                  <li>{language}</li>
                ))}
              </ul>
            </div>
            <div className="overview-container">
              <h3 className="overview-header">Tools / Tools</h3>
              <ul>
                {Resume.skills.frameworksTools.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
