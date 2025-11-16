// src/components/Footer.jsx

import React from "react";
import styles from "./Footer.module.css";
// Import ikon untuk email dan telepon
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear(); // Otomatis dapat tahun sekarang

  return (
    <footer id="kontak" className={styles.footerContainer}>
      {/* Bagian Atas: Info Kontak */}
      <div className={styles.contactInfo}>
        <a
          href="mailto:storytimetrack@gmail.com"
          className={styles.contactItem}
        >
          <FaEnvelope className={styles.icon} />
          <span>storytimetrack@gmail.com</span>
        </a>
        <div className={styles.contactItem}>
          <FaPhoneAlt className={styles.icon} />
          <span>+62 855-9858-143</span>
        </div>
      </div>

      {/* Bagian Tengah: Info Legal */}
      <div className={styles.legalLinks}>
        <a href="/privacy">Kebijakan Privasi</a>
      </div>

      {/* Bagian Bawah: Copyright */}
      <div className={styles.copyright}>
        © {currentYear} TimeTrack. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
