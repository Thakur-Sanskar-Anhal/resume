import './App.css';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Desc from './components/Desc';
import Hero from './components/Hero';

function App() {
  return (
    <div className="container">

        <Hero/>

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
