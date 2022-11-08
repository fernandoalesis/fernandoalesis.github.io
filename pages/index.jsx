/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState, useRef } from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";
import Projects from "../components/projects/Projects";
import Mars from "../components/mars/Mars";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  // const [MarsScale, setMarsScale] = useState(1);
  // const [MarsTranslateX, setMarsTranslateX] = useState(10);

  // const MarsRef = useRef();
  // const EarthRef = useRef();

  // const handleScroll = () => {
  //   // console.log(count);
  //   const altoTotal = window.screen.height;
  //   const { top } = MarsRef.current.getBoundingClientRect();
  //   const heightRelative = top / altoTotal;
  //   console.log(heightRelative);
  //   // console.log(top);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });
  // const parallax = useRef();
  return (
    <main>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>=
        </div>
        {/*Objects animation */}

        {/* <ParallaxLayer
              offset={0.5}
              factor={1}
              speed={2}
              style={{
                margin: "30% auto",
                transform: `scale(${MarsScale})`,
                transform: `translateX(${MarsTranslateX})`,
              }}
            >
              <section ref={MarsRef}>
                <Mars />
              </section>
            </ParallaxLayer> */}
        <section className="Home">
          <Intro />
        </section>
        <section className="About Container" id="About">
          <About />
        </section>
        <section className="Projects Container" id="Projects">
          <Projects />
        </section>
        <section className="Footer">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
