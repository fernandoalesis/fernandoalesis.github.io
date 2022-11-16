import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import styles from "./Projects.module.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Tateti from "../../assets/Images/tateti.png";
import Memotest from "../../assets/Images/memotest.png";
import Logo from "../../assets/Images/logo.png";

const Projects = () => {
  const [Img, setImg] = useState(Logo);

  return (
    <div className={styles.Projects}>
      <Fade left cascade>
        <h2>Projects</h2>
      </Fade>
      <Fade top distance={"3rem"}>
        <div className={styles.tv} style={{ zIndex: "2" }}>
          <div
            className={styles.imgTv}
            style={{ zIndex: "1", backgroundColor: "#1d1d1d" }}
          >
            <Image
              alt="Mountains"
              src={Img}
              layout="fill"
              objectFit="contain"
              zIndex="1"
            />
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className={styles.grid_container}>
          <div
            className={styles.channel}
            onClick={() => {
              setImg(Logo);
            }}
          >
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
          <div
            className={styles.channel}
            onClick={() => {
              setImg(Logo);
            }}
          >
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
          <div
            className={styles.channel}
            onClick={() => {
              setImg(Tateti);
            }}
          >
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
          <div
            className={styles.channel}
            onClick={() => {
              setImg(Memotest);
            }}
          >
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
          <div
            className={styles.channel}
            onClick={() => {
              setImg(Logo);
            }}
          >
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
      </Fade>
    </div>
  );
};

export default Projects;
