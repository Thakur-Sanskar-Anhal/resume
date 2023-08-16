import React from 'react'

function Education() {
  return (
    <>
      {/* <!-- Eduation and skil --> */}
      <div className="education">
            <div className="heading">
                Education and Skills:
            </div>
            <ul className="primary-ul">
                <li>Bachelors in Technology</li>
                <ul className="seccondary-ul">
                    <li>Perusing B. tech. In Computer Software in association with IBM</li>
                    <li>Specialization in Data science and artificial intelligence.</li>
                </ul>

                <li>Programming languages</li>
                <ul className="seccondary-ul">
                    <li>JavaScript, Java, C++, CSS, HTML, C, SQL, Python, R</li>
                </ul>

                <li>Tech stack</li>
                <ul className="seccondary-ul">
                    <li>Android studio, React, Firebase, Figma, Adobe suite, VS code, GitHub, BootStrap</li>
                </ul>

                <li>Skills</li>
                <ul className="seccondary-ul">
                    <li>Design thinking, DevOps, Data Analysis, Team leading, Arts & craft</li>
                </ul>
            </ul>
        </div>
    </>
  )
}

export default Education
