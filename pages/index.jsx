/* eslint-disable @next/next/no-html-link-for-pages */

import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";
import Projects from "../components/projects/Projects";

const Home = () => {
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
