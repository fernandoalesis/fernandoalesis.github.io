import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.Container}>
      <Fade top cascade delay={800}>
        <h3>Hi, welcome to my portfolio</h3>
      </Fade>
      <Fade top>
        <h1>Fernando Gil</h1>
      </Fade>

      <Fade left cascade distance={"3rem"} delay={1600}>
        <navbar className={styles.slide}>
          <a href="#About">
            <span>
              <h2>Frontend</h2>
            </span>
            <span>
              <h2>About</h2>
            </span>
          </a>

          <a href="#Projects">
            <span>
              <h2>Developer</h2>
            </span>
            <span>
              <h2>Projects</h2>
            </span>
          </a>
        </navbar>
      </Fade>
    </div>
  );
};

export default Intro;
