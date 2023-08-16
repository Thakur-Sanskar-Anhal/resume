import './App.css';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Desc from './components/Desc';

function App() {
  return (
    <div className="container">

        {/* <!-- heading name --> */}
        <div className="name">
            Sanskar Anhal
        </div>

        <Desc/>

        <hr/>

        <Education/>

        <hr/>

        <Projects/>

        <hr/>

        <Internships/>
    </div>
  );
}

export default App;
