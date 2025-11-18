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
        // Tempel link GitHub Anda di sini 👇
        href="https://github.com/MochAdriq/WebTimeTrack/releases/download/v1.0.1/app-release.apk"
        className={styles.downloadButton}
        // Hapus atribut 'download' karena browser akan otomatis download dari GitHub
        target="_blank"
        rel="noopener noreferrer"
      >
        Download di sini
      </a>
    </section>
  );
}

export default CTASection;
