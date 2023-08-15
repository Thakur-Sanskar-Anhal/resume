import './App.css';

function App() {
  return (
    <div className="container">

        {/* <!-- heading name --> */}
        <div className="name">
            Sanskar Anhal
        </div>

        {/* <!-- description --> */}
        <div className="description flex">
            <div className="desc-item">
                <i className="fa-solid fa-envelope"></i>
                <a rel="noreferrer" href="mailto: thakursanskaranhal@gmail.com" target="_blank">thakursanskaranhal@gmail.com</a>
            </div>
            <div className="desc-item">
                <i className="fa-solid fa-phone"></i>
                8586873826
            </div>
            <div className="desc-item">
                <i className="fa-solid fa-location-dot"></i>
                Delhi,India
            </div>
            <div className="desc-item">
                <i className="fa-solid fa-briefcase"></i>
                Student
            </div>
        </div>

        <hr/>

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

        <hr/>

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

        <hr/>

        {/* // <!-- Internships --> */}
        <div className="internships">
            <div className="heading">
                Internship Experiences / Certificates:
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
    </div>
  );
}

export default App;
