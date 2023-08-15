import './App.css';

function App() {
  return (
    <div class="container">

        {/* <!-- heading name --> */}
        <div class="name">
            Sanskar Anhal
        </div>

        {/* <!-- description --> */}
        <div class="description flex">
            <div class="desc-item">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto: thakursanskaranhal@gmail.com">thakursanskaranhal@gmail.com</a>
            </div>
            <div class="desc-item">
                <i class="fa-solid fa-phone"></i>
                8586873826
            </div>
            <div class="desc-item">
                <i class="fa-solid fa-location-dot"></i>
                Delhi,India
            </div>
            <div class="desc-item">
                <i class="fa-solid fa-briefcase"></i>
                Student
            </div>
        </div>

        <hr/>

        {/* <!-- Eduation and skil --> */}
        <div class="education">
            <div class="heading">
                Education and Skills:
            </div>
            <ul class="primary-ul">
                <li>Bachelors in Technology</li>
                <ul class="seccondary-ul">
                    <li>Perusing B. tech. In Computer Software in association with IBM</li>
                    <li>Specialization in Data science and artificial intelligence.</li>
                </ul>

                <li>Programming languages</li>
                <ul class="seccondary-ul">
                    <li>JavaScript, Java, C++, CSS, HTML, C, SQL, Python, R</li>
                </ul>

                <li>Tech stack</li>
                <ul class="seccondary-ul">
                    <li>Android studio, React, Firebase, Figma, Adobe suite, VS code, GitHub, BootStrap</li>
                </ul>

                <li>Skills</li>
                <ul class="seccondary-ul">
                    <li>Design thinking, DevOps, Team leading, Arts & craft</li>
                </ul>
            </ul>
        </div>

        <hr/>

        {/* <!-- Projects --> */}
        <div class="projects">
            <div class="heading">
                Projects:
            </div>
            <ul class="primary-ul">
                <li>UI/UX design Case Study for an app</li>
                <ul class="seccondary-ul">
                    <li>Designed a custom sandwich ordering app for a trendy sandwich shop.</li>
                    <li>Created user personas, user journey maps and did usability study for the app.</li>
                    <li>Created paper and digital wireframes.</li>
                    <li>Created low-fidelity and high-fidelity designs.</li>
                    <a href="https://www.figma.com/file/zB7HoV04AmIRH8IR1kzBYT/sans.wich?type=design&node-id=0-1&mode=design" >Link for my wireframes and base design</a>
                </ul>

                <li>Tinker.text</li>
                <ul class="seccondary-ul">
                    <li>Created a react app that is used to convert text to required cases and recites it for you.</li>
                    <li>Designed the app and logo for it and made a good user experience.</li>
                    <li>Used react router to control the flow of the web app.</li>
                    <li>Used elements by bootstrap and modified them according to my need.</li>
                    <li>Hosted and deployed the web app on GitHub pages.</li>
                    <a href="https://thakur-sanskar-anhal.github.io/tinker-text/">Link for Tinker.text</a>
                </ul>

                <li>Created a personal notes application</li>
                <ul class="seccondary-ul">
                    <li>Designed and coded a java application to make and manage notes.</li>
                    <li>Used Android Studio IDE for developing and Realm.io for data handling.</li>
                    <li>Added many features as add, delete, and edit a note.</li>
                    <a href="https://github.com/Thakur-Sanskar-Anhal/Personal-Notes-App">Link for the GitHub project</a>
                </ul>

                <li>Created a login application</li>
                <ul class="seccondary-ul">
                    <li>Created a login application using firebase.</li>
                    <li>Coded in the android studio IDE.</li>
                    <li>Coded with java language and hosted the application on GitHub.</li>
                    <a href="https://github.com/Thakur-Sanskar-Anhal/First-App">Link for the GitHub project</a>
                </ul>

            </ul>
        </div>

        <hr/>

        {/* // <!-- Internships --> */}
        <div class="internships">
            <div class="heading">
                Internship Experiences / Certificates:
            </div>
            <ul class="primary-ul">
                <li>Google UX design professional certificate</li>
                <ul class="seccondary-ul">
                    <li>Learnt the foundations of UX design.</li>
                    <li>Learnt the design process: Empathize, Define, and Ideate.</li>
                    <li>Conducted UX research and learnt to create design prototypes.</li>
                    <li>Learnt responsive web design.</li>
                </ul>

                <li>Full Stack Developer Intern at IEEE Bombay section</li>
                <ul class="seccondary-ul">
                    <li>Created UX design for html table generator module.</li>
                    <li>Created front-end in Svelte.</li>
                    <li>Connected the module with firebase.</li>
                    <li>Worked in a team of 10 and collaborated on Slack.</li>
                </ul>
            </ul>
        </div>
    </div>
  );
}

export default App;
