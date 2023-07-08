import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import OurTeam from './components/OurTeam/OurTeam';
import Video from './components/Video/Video';

function App() {
  return (
    <>
    <Navbar/>
    <Video/>
    <About/>
    <OurTeam/>
    <Contact/>
    </>
  );
}

export default App;
