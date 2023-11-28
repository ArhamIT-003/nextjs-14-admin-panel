import React from "react";
import styles from "./transaction.module.css";
import Image from "next/image";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImg}
                />{" "}
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td className={styles.date}>14.07.2023</td>
            <td className={styles.amount}>$3.00</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImg}
                />{" "}
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td className={styles.date}>14.07.2023</td>
            <td className={styles.amount}>$6.00</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImg}
                />{" "}
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancel}`}>
                cancel
              </span>
            </td>
            <td className={styles.date}>14.07.2023</td>
            <td className={styles.amount}>$4.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
