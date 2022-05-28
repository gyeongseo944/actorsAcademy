import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./sections/Home";
import AboutUs from "./sections/AboutUs";
import Teachers from "./sections/Teachers";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import Curriculum from "./sections/Curriculum";
import Footer from "./sections/Footer";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider options={{ smooth: true }} watch={[]} containerRef={containerRef}>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <AboutUs />
              <Teachers />
              <Banner />
              <Curriculum />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
