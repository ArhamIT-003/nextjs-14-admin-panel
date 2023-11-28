import React from "react";
import Card from "../ui/dashboard/Card/Card";
import styles from "../ui/dashboard/dashboard.module.css";
import Transaction from "../ui/dashboard/Transaction/Transaction";
import Chart from "../ui/dashboard/Charts/Chart";
import RightBar from "../ui/dashboard/RightBar/RightBar";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.rightBar}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
