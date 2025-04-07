import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <h2>Welcome Back</h2>

        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Log In</button>

        <p className={styles.signupLink}>
          Don't have an account?
          <Link to="/signup">
            <a href="#"> Sign up</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
