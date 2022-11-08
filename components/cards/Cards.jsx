import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({ icon, desc, title }) => {
  return (
    <div className={styles.Card}>
      <h3>{icon}</h3>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Cards;
