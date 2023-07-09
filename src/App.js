import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ImageSlider from './components/Gallery/ImageSlider';
import Navbar from './components/Navbar/Navbar';
import OurTeam from './components/OurTeam/OurTeam';
import Project from './components/Projects/Project';
import Video from './components/Video/Video';

function App() {
  return (
    <>
    <Navbar/>
    <Video/>
    <About/>
    <OurTeam/>
    <Project/>
    <ImageSlider/>
    <Contact/>
    </>
  );
}

export default App;
