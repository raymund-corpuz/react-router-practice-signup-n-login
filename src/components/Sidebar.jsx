import React from "react";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <h2 className={styles.sidebarTitle}>Dashboard</h2>
      <ul className={styles.menu}>
        <li>
          <a href="#">Attendance</a>
        </li>
        <li>
          <a href="#">Overtime</a>
        </li>
        <li>
          <a href="#">Leave</a>
        </li>
        <li>
          <a href="#">Change Shift</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
