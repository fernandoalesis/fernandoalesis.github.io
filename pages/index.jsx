/* eslint-disable @next/next/no-html-link-for-pages */
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";
import Projects from "../components/projects/Projects";

const Home = () => {
  return (
    <main>
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
    </main>
  );
};

export default Home;
