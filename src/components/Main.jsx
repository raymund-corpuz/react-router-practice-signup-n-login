import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.welcomeMessage}>Welcome to Your Dashboard</h1>
        <p className={styles.subtitle}>
          Here's an overview of your current status.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>Attendance</h3>
          <p>95% this month</p>
        </div>
        <div className={styles.card}>
          <h3>Overtime</h3>
          <p>12 hours</p>
        </div>
        <div className={styles.card}>
          <h3>Leave</h3>
          <p>2 days taken</p>
        </div>
        <div className={styles.card}>
          <h3>Change Shift</h3>
          <p>Next: Morning</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
