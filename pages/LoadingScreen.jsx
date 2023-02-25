import React from "react";
import styles from "../styles/loader.module.css";

const LoadingScreen = () => {
    return (
        <div className={styles.banterloader}>
  <div className={styles.banterloaderbox}></div>
  <div className={styles.banterloaderbox}></div>
  <div className={styles.banterloaderbox}></div>
  <div className={styles.banterloaderbox}></div>
  <div className={styles.banterloaderbox}></div>
  <div className={styles.banterloaderbox}></div>
  <div className={styles.banterloaderbox}></div>
  <div className={styles.banterloaderbox}></div>
  <div className={styles.banterloaderbox}></div>
</div>
    );
  };

export default LoadingScreen;
