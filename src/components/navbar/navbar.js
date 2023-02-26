import React from "react";
import styles from "./navbar.module.css";

const navbar = () => {
  return (
    <header className={styles.main}>
      <div className={styles.navbarWrapper}>
        <a href="/" className={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 515">
            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
          </svg>
          <h2>stackoverflow-clone</h2>
        </a>

        <div className={styles.content}>
          <a href="/login" className={styles.login}>
            Login
          </a>
          <a href="/register" className={styles.register}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default navbar;
