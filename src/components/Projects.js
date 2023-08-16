import React from 'react'

function Projects() {
  return (
    <>
      {/* <!-- Projects --> */}
      <div className="projects">
            <div className="heading">
                Projects:
            </div>
            <ul className="primary-ul">
                <li>UI/UX design Case Study for an app</li>
                <ul className="seccondary-ul">
                    <li>Designed a custom sandwich ordering app for a trendy sandwich shop.</li>
                    <li>Created user personas, user journey maps and did usability study for the app.</li>
                    <li>Created paper and digital wireframes.</li>
                    <li>Created low-fidelity and high-fidelity designs.</li>
                    <li><a rel="noreferrer" href="https://www.figma.com/file/zB7HoV04AmIRH8IR1kzBYT/sans.wich?type=design&node-id=227%3A777&mode=design&t=TtpA93mEwFhif7zc-1" target="_blank">Link for my wireframes and base design</a></li>
                </ul>

                <li>Tinker.text</li>
                <ul className="seccondary-ul">
                    <li>Created a react app that is used to convert text to required cases and recites it for you.</li>
                    <li>Designed the app and logo for it and made a good user experience.</li>
                    <li>Used react router to control the flow of the web app.</li>
                    <li>Used elements by bootstrap and modified them according to my need.</li>
                    <li>Hosted and deployed the web app on GitHub pages.</li>
                    <li><a rel="noreferrer" href="https://thakur-sanskar-anhal.github.io/tinker-text/" target="_blank">Link for Tinker.text</a></li>
                </ul>

                <li>Created a personal notes application</li>
                <ul className="seccondary-ul">
                    <li>Designed and coded a java application to make and manage notes.</li>
                    <li>Used Android Studio IDE for developing and Realm.io for data handling.</li>
                    <li>Added many features as add, delete, and edit a note.</li>
                    <li><a rel="noreferrer" href="https://github.com/Thakur-Sanskar-Anhal/Personal-Notes-App" target="_blank">Link for the GitHub project</a></li>
                </ul>

                <li>Created a login application</li>
                <ul className="seccondary-ul">
                    <li>Created a login application using firebase.</li>
                    <li>Coded in the android studio IDE.</li>
                    <li>Coded with java language and hosted the application on GitHub.</li>
                    <li><a rel="noreferrer" href="https://github.com/Thakur-Sanskar-Anhal/First-App" target="_blank">Link for the GitHub project</a></li>
                </ul>

                <li>Customer churn prediction using neural networks</li>
                <ul className="seccondary-ul">
                    <li>Created a customer churn prediction model using macgine learning algos.</li>
                    <li>Conducted comprehensive data analysis to identify key predictors of custoomer churn.</li>
                    <li>Achieved accuracy rating of 89%, enabling the company to target and retain customers.</li>
                    <li><a rel="noreferrer" href="https://github.com/Thakur-Sanskar-Anhal/First-App" target="_blank">Link for the GitHub project</a></li>
                </ul>

            </ul>
        </div>
    </>
  )
}

export default Projects
