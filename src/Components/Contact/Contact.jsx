import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { FaStar } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>CONTACT SECTION</h2>
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <FaStar className={styles.star} />
          <span className={styles.line}></span>
        </div>

        <div className={styles.containerForm}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" id="userName" required />
              <label htmlFor="userName">userName</label>
            </div>

            <div className={styles.inputGroup}>
              <input type="number" id="userAge" required />
              <label htmlFor="userAge">userAge</label>
            </div>

            <div className={styles.inputGroup}>
              <input type="email" id="userEmail" required />
              <label htmlFor="userEmail">userEmail</label>
            </div>

            <div className={styles.inputGroup}>
              <input type="password" id="userPassword" required />
              <label htmlFor="userPassword">userPassword</label>
            </div>

            <button className={styles.submitBtn}>send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
