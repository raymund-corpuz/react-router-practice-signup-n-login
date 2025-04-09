import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>HR Services Dashboard</h1>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Employee Info
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Leave Requests
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Payroll
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.employeeInfo}>
          <h2 className={styles.sectionTitle}>Employee Info</h2>
          <p className={styles.sectionDescription}>
            Manage employee details and records.
          </p>
        </section>

        <section className={styles.leaveRequests}>
          <h2 className={styles.sectionTitle}>Leave Requests</h2>
          <p className={styles.sectioDescription}>
            View and approve leave requests.
          </p>
        </section>

        <section className={styles.payroll}>
          <h2 className={styles.sectionTitle}>Payroll</h2>
          <p className={styles.sectionDescription}>
            Manage employee salaries and payments.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 HR Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Main;
