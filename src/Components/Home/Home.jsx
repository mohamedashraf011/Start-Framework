import React from "react";
import styles from "./Home.module.css";
import avatar from "../../assets/img/home.svg"

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <div className={styles.container}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <h1 className={styles.title}>START FRAMEWORK</h1>
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <i className={`fa-solid fa-star ${styles.star}`}></i>
          <div className={styles.line}></div>
        </div>
        <p className={styles.subtitle}>
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}
