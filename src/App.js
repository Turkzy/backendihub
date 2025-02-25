import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Vision from './Components/Vision';
import About from './Components/About';
import StoryHub from './Components/hub';
import Events from './Components/Events';
import Partnership from './Components/Partnership';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Vision />
      <About />
      <StoryHub />
      <Events />
      <Partnership />
      <Team />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
