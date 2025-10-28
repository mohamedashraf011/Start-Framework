import React from "react";
import styles from "./About.module.css";


export default function About() {
  return (
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>ABOUT COMPONENT</h1>
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <i className={`fa-solid fa-star ${styles.star}`}></i>
            <div className={styles.line}></div>
          </div>
          <div className={styles.subtitle}>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional<br /> SASS stylesheets for easy customization.</p>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional<br /> SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </section>

  );
}
