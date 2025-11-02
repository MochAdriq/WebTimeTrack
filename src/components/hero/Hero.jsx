// src/components/Hero.jsx

import React from "react";
import styles from "./Hero.module.css";

import heroBackground from "../../assets/images/hero/hero-backgroundpng.png";
import heroGif from "../../assets/images/hero/hero-gif.gif";
import dualPhones from "../../assets/images/hero/dual-phonespng.png";

function Hero() {
  return (
    // 1. Container utama, sekarang jadi "panggung"
    <section id="hero" className={styles.heroContainer}>
      {/* 2. Kolom Kiri (GIF & Tombol) */}
      <div className={styles.leftColumn}>
        <img
          src={heroGif}
          alt="Time Track animation"
          className={styles.heroGif}
        />
        <a
          href="../../../public/app/app-release.apk" // <-- INI LINK KE FOLDER PUBLIC
          download="app-release.apk" // <-- Atribut ini "memaksa" download
          className={styles.downloadButton}
        >
          Download
        </a>
      </div>

      {/* 3. Gambar Background Hero (sekarang jadi <img>) */}
      <img
        src={heroBackground}
        alt="Hero Background"
        className={styles.heroBgImage}
      />

      {/* 4. Gambar Dual Phone (paling depan) */}
      <img
        src={dualPhones}
        alt="Time Track App Screens"
        className={styles.dualPhonesImage}
      />
    </section>
  );
}

export default Hero;
