import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={styles.texts}>
        <span className="totalUser">Total Users</span>
        <span className="totalNumber">102.90</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12% </span>
          <span>more than previous week</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
