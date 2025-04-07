import React from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className={styles.container}>
      <form className={styles.signupForm}>
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />

        <button type="submit">Sign Up</button>

        <p className={styles.loginLink}>
          Already have an account?{" "}
          <Link to="/login">
            <a href="#"> Log in</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
