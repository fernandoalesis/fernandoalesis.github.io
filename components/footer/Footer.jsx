import React from "react";
import styles from "./Footer.module.scss";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h2>Contact</h2>
      <div className={styles.grid_container}>
        <div>
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/fernando-alesis-gil-8ba48751/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="http://instagram/archupipon">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://github.com/fernandoalesis">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Send me a mail</h3>
          <form
            action="https://formsubmit.co/8f5a2924df88b52866826489e43d52cf"
            method="POST"
          >
            <input type="text" name="name" id="name" placeholder="Name" />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your E-Mail"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              name="textarea"
              cols="15"
              rows="10"
              id="Message"
              placeholder="Comment"
            ></textarea>
            <Button type="submit">
              Send Mail <RiMailSendLine />
            </Button>
            ,
            <input
              type="hidden"
              name="_next"
              value="https://fernandoalesis.github.io/"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </div>
      </div>
      <h4>Buenos Aires, Argentina - 2022</h4>
      <h4>Created by Fernando Gil</h4>
    </div>
  );
};

export default Footer;
