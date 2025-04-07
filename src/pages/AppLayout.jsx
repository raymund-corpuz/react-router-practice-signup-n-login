import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default AppLayout;
