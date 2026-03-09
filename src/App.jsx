import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Home from './components/Home';
import Gallery from './components/Gallery';
import Bio from './components/Bio';
import Projects from './components/Projects';
import FilmGrain from './components/FilmGrain';

function LandingPage() {
  return (
    <>
      <Hero />
      {/* <Home /> */}
    </>
  );
}

function App() {
  return (
    <Router basename="/portfolio">
      <div className="selection:bg-blue-100 min-h-screen bg-slate-50 font-sans">
        <FilmGrain />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;