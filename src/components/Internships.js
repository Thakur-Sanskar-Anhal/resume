import React from 'react'

function Internships() {
  return (
    <>
      {/* // <!-- Internships --> */}
      <div className="internships">
            <div className="heading">
                Internship Experiences & Certificates:
            </div>
            <ul className="primary-ul">
                <li>Full Stack Developer Intern at IEEE Bombay section</li>
                <ul className="seccondary-ul">
                    <li>Created UX design for html table generator module.</li>
                    <li>Created front-end in Svelte.</li>
                    <li>Connected the module with firebase.</li>
                    <li>Worked in a team of 10 and collaborated on Slack.</li>
                    <li><a rel="noreferrer" href="https://us-central1-netcredential-22f17.cloudfunctions.net/cred/credential/9pZH65c85d" target="_blank">Letter of recomendation by IEEE</a></li>
                    <li><a rel="noreferrer" href="https://us-central1-netcredential-22f17.cloudfunctions.net/cred/credential/9pZH0c278d" target="_blank">Completion certificate</a></li>
                </ul>
                
                <li>IBM CRSBOX: Data analytics Internship</li>
                <ul className="seccondary-ul">
                    <li>Attended the IBM CRSBOX data analytics Internship program learning about data analytics by IBM mentors.</li>
                    <li>Learnt about trends and patterns recognitions.</li>
                    <li>Demonstrated proficiency in developing data vizualizations and presenting data in a meaningful manner.</li>
                    <li>Learnt and Demonstrated decision making and straterfy formulation based on data.</li>
                </ul>
               
               <li>Google UX design professional certificate</li>
                <ul className="seccondary-ul">
                    <li>Learnt the foundations of UX design.</li>
                    <li>Learnt the design process: Empathize, Define, and Ideate.</li>
                    <li>Conducted UX research and learnt to create design prototypes.</li>
                    <li>Learnt responsive web design.</li>
                </ul> 
                
                <li>IBM AI analyst</li>
                <ul className="seccondary-ul">
                    <li>Completed the AI analyst course offered by IBM.</li>
                    <li>Gained proficiency in programming languages like R and python, utlizing them to implement AI algos.</li>
                    <li>Created multiple projects on IBM cloud such as AI pipeline, healthcare chatbots, data analysis using AI,etc.</li>
                    <li>Acquired hands-on experience in data preprocessing, feature engineering, and data visualization techniques,
                        enhancing data quality and extracting meaningful insights.</li>
                </ul>
            </ul>
        </div>
    </>
  )
}

export default Internships
