import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styles from "./About.module.scss";
import Image from "next/image";
import Foto from "../../assets/Images/frente.jpg";
import Button from "../button/Button";
import Cards from "../cards/Cards";
import { FaLaptopCode, FaMobileAlt, FaBong } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div className={styles.About}>
      <h2>
        <Fade left cascade>
          About
        </Fade>
      </h2>
      <div className={styles.grid_container}>
        <div>
          <Fade bottom>
            <h3>ME</h3>
          </Fade>
          <Fade left cascade></Fade>
          <Fade left cascade>
            <p>
              Hello everyone! My name is Fernando Gil, I'm from Argentina and I
              like to create things for the internet. I started my studies in
              2018 to be a frontend developer. I like to learn new things and I
              am currently studying backend development to be able to offer
              fullstack services. I am looking for a job, so I can continue
              learning about this exciting industry. These are the technologies
              I use to make websites:
            </p>
          </Fade>
          <Fade top>
            <ul>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                ReactJS
              </li>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                Javascript
              </li>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                Html5
              </li>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                CSS3
              </li>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                SASS
              </li>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                NextJS
              </li>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                MongoDB
              </li>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                NodeJs
              </li>
              <li>
                <span>
                  <MdArrowRight />
                </span>
                ReactSpring
              </li>
            </ul>
          </Fade>
        </div>

        <div>
          <Fade bottom>
            <div className={styles.img}>
              <Image
                src={Foto}
                alt="Foto"
                width="580px"
                height="772px"
                layout="responsive"
                priority
              />
            </div>
          </Fade>

          <Fade bottom>
            <a
              href="/CVFernando+Gil.pdf"
              target="blank"
              rel="noopener noreferrer"
            >
              <Button>Resume &darr;</Button>
            </a>
          </Fade>
        </div>
      </div>

      <div className={styles.card_container}>
        <Fade bottom>
          <Cards
            title="Web development"
            desc="I dedicate myself to the development and design of web pages for all types of projects, with dynamic or static content."
            icon={<FaLaptopCode />}
          />

          <Cards
            title="Responsive design"
            desc="The web pages that I make are completely usable on all types of devices, as long as they have a browser."
            icon={<FaMobileAlt />}
          />

          <Cards
            title="And more"
            desc="As a developer I love challenges, learning new things and looking for effective and creative solutions."
            icon={<FaBong />}
          />
        </Fade>
      </div>
    </div>
  );
};

export default About;
