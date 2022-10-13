import React from "react";
import styles from "./Projects.module.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Tateti from "../../assets/Images/tateti.png";
import Memotest from "../../assets/Images/memotest.png";
const Projects = () => {
  return (
    <div className={styles.Projects}>
      <h2>Projects</h2>
      <div className={styles.tv} style={{ zIndex: "2" }}>
        <div
          className={styles.imgTv}
          style={{ zIndex: "1", backgroundColor: "#222" }}
        >
          <Image
            alt="Mountains"
            src={Tateti}
            layout="fill"
            objectFit="contain"
            zIndex="1"
          />
        </div>
      </div>
      <div className={styles.grid_container}>
        <div className={styles.channel}>
          <h3>Ecommerce</h3>
          <p>in procces</p>
          <div className="links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className={styles.channel}>
          <h3>Reportify</h3>
          <p>Reports of Spotify using our API</p>
          <div className="links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className={styles.channel}>
          <h3>TA TE TI</h3>
          <p>A tipycal tictactoe game with Javascript</p>
          <div className="links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className={styles.channel}>
          <h3>Memotest</h3>
          <p>Memo game with Javascript</p>
          <div className="links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className={styles.channel}>
          <h3>Art Gallery</h3>
          <p>Gallery of best artist pics</p>
          <div className="links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
