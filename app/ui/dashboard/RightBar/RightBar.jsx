import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>🔥Lorem ipsum.</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h3>
          <span className={styles.subTitle}>Lorem ipsum dolor sit amet.</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            harum!
          </p>
          <button className={styles.btn}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
