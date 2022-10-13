import React from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.Container}>
      <h3>Hi, welcome to my portfolio</h3>
      <h1>Fernando Gil</h1>
      <navbar className={styles.slide}>
        <a href="#About">
          <span>
            <h2>Frontend</h2>
          </span>
          <span>
            <h2>About</h2>
          </span>
        </a>
        <a href="#0">
          <span>
            <h2>Developer</h2>
          </span>
          <span>
            <h2>Projects</h2>
          </span>
        </a>
      </navbar>
    </div>
  );
};

export default Intro;
