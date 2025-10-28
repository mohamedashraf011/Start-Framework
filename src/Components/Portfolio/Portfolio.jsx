import React from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Portfolio.module.css";
import img1 from "../../assets/img/imgi_1_poert1.png";
import img2 from "../../assets/img/imgi_2_port2.png";
import img3 from "../../assets/img/imgi_3_port3.png";

export default function Portfolio() {
  const images = [img1, img2, img3, img1, img2, img3];

  const openModal = (src) => {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    modalImg.src = src;
    modal.style.display = "flex";
  };

  const closeModal = (e) => {
    if (e.target.id === "imgModal") {
      e.target.style.display = "none";
    }
  };

  return (
    <section className="container text-center">
      <h2 className={styles.title}>PORTFOLIO COMPONENT</h2>
      <div className={styles.divider}>
        <span className={styles.line}></span>
        <FaStar className={styles.star} />
        <span className={styles.line}></span>
      </div>

      <div className="row">
        {images.map((src, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-xs-12"
            style={{ marginBottom: "30px" }}
          >
            <div className={styles.card} onClick={() => openModal(src)}>
              <img
                src={src}
                alt={`Portfolio ${index}`}
                className="img-responsive"
              />
              <div className={styles.overlay}>
                <FaPlus className={styles.plus} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="imgModal" className={styles.modal} onClick={closeModal}>
        <img className={styles.modalContent} id="modalImg" alt="Modal" />
      </div>
    </section>
  );
}
