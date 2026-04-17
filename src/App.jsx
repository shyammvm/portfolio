import { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Gallery from './components/Gallery';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  const containerRef = useRef(null);

  // Track the custom container's vertical scroll instead of the window
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="selection:bg-blue-100 bg-slate-50 font-sans h-screen w-full overflow-hidden flex flex-col">
      <Navbar />

      {/* The custom scrollable container with CSS snap */}
      <div
        id="main-scroll-container"
        ref={containerRef}
        className="flex-1 overflow-y-auto snap-y snap-mandatory h-full w-full"
      >
        <div className="relative h-[500vh]">

          {/* Invisible Snap Markers spaced perfectly at each viewport height */}
          <div className="absolute top-0 h-screen w-full snap-start pointer-events-none" />
          <div className="absolute top-[100vh] h-screen w-full snap-start pointer-events-none" />
          <div className="absolute top-[200vh] h-screen w-full snap-start pointer-events-none" />
          <div className="absolute top-[300vh] h-screen w-full snap-start pointer-events-none" />
          <div className="absolute top-[400vh] h-screen w-full snap-start pointer-events-none" />

          {/* Sticky view that slides horizontally */}
          <div className="sticky top-0 flex h-screen items-center overflow-hidden pointer-events-none">
            <motion.div style={{ x }} className="flex w-[500vw] h-screen pointer-events-auto">

              <div className="w-screen h-screen overflow-y-auto no-scrollbar">
                <Hero />
              </div>

              <div className="w-screen h-screen overflow-y-auto bg-white no-scrollbar">
                <Projects />
              </div>

              <div className="w-screen h-screen overflow-y-auto no-scrollbar">
                <Gallery />
              </div>

              <div className="w-screen h-screen overflow-y-auto no-scrollbar">
                <Blog />
              </div>

              <div className="w-screen h-screen overflow-y-auto no-scrollbar">
                <Bio />
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;