// src/components/CTASection.jsx

import React from "react";
import styles from "./CTASection.module.css";

function CTASection() {
  return (
    <section id="download" className={styles.ctaContainer}>
      {/* Teks sesuai desain */}
      <h2 className={styles.ctaTitle}>Dapatkan aplikasinya Sekarang</h2>

      {/* Tombol yang diubah */}
      <a
        href="../../../public/app/app-release.apk" // <-- INI LINK KE FOLDER PUBLIC
        download="app-release.apk" // <-- Atribut ini "memaksa" download
        className={styles.downloadButton}
      >
        Download di sini
      </a>
    </section>
  );
}

export default CTASection;
