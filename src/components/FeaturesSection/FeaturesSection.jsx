import React, { useState } from "react";
import Slider from "react-slick"; // Import slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FeaturesSection.module.css";

// 2. Import Aset Anda (ASUMSI NAMA FILE - GANTI SESUAI KEBUTUHAN)
import Slide1 from "../../assets/images/feature/slide1.png";
import Slide2 from "../../assets/images/feature/slide2.png";
import Slide3 from "../../assets/images/feature/slide3.png";
import ArrowLeft from "../../assets/images/feature/arrow-left.svg";
import ArrowRight from "../../assets/images/feature/arrow-right.svg";

// 3. Data untuk konten kiri
const featureData = [
  {
    id: "home",
    title: "Home",
    description:
      "Tampilan Halaman utama Dengan icon-icon fitur agar memudahkan akses ke berbagai fitur.",
  },
  {
    id: "quiz",
    title: "Quiz",
    description:
      "Tantang pengetahuan Anda dengan kuis sejarah interaktif yang seru dan mendidik.",
  },
  {
    id: "discussion",
    title: "Group Discussion",
    description:
      "Bergabunglah dalam diskusi grup untuk membahas topik-topik menarik dengan pengguna lain.",
  },
  {
    id: "explore",
    title: "Jelajahi Waktu",
    description:
      "Temukan peristiwa-peristiwa penting di masa lalu melalui timeline interaktif kami.",
  },
];

// 4. Data untuk slider (sesuaikan gambarnya)
const sliderData = [
  { id: 1, image: Slide1, alt: "Daftar Kuis" },
  { id: 2, image: Slide2, alt: "Halaman Utama Aplikasi" },
  { id: 3, image: Slide3, alt: "Halaman Kuis" },
];

// --- Komponen Panah Kustom ---
// Ini adalah komponen React kecil di dalam file yang sama
function CustomNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickArrow} ${styles.slickNext}`}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="Next" />
    </div>
  );
}

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickArrow} ${styles.slickPrev}`}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="Previous" />
    </div>
  );
}
// --- ---

// --- Komponen Utama ---
function FeaturesSection() {
  // 5. State untuk melacak fitur yang aktif (default 'home')
  const [activeFeatureId, setActiveFeatureId] = useState("home");

  // 6. Pengaturan untuk Slider
  const sliderSettings = {
    dots: false, // Tidak pakai titik-titik
    infinite: true, // Loop tak terbatas
    speed: 500,
    slidesToShow: 1, // Tampilkan 1 slide
    slidesToScroll: 1,
    // --- INI PERBAIKANNYA ---
    nextArrow: <CustomNextArrow />, // Panah kustom kita
    prevArrow: <CustomPrevArrow />, // Panah kustom kita
  };

  // 7. Cari data fitur yang sedang aktif
  const activeFeature = featureData.find((f) => f.id === activeFeatureId);

  return (
    <section id="fitur" className={styles.featuresContainer}>
      {/* Kolom Kiri - Konten Fitur */}
      <div className={styles.leftColumn}>
        <h2>Fitur Time Track</h2>

        <ul className={styles.featureList}>
          {featureData.map((feature) => (
            <li
              key={feature.id}
              className={feature.id === activeFeatureId ? styles.active : ""}
              onClick={() => setActiveFeatureId(feature.id)}
            >
              {feature.title}
            </li>
          ))}
        </ul>

        {/* Deskripsi yang berubah-ubah */}
        {activeFeature && (
          <div className={styles.descriptionBox}>
            <p>{activeFeature.description}</p>
          </div>
        )}
      </div>

      {/* Kolom Kanan - Slider */}
      <div className={styles.rightColumn}>
        <Slider {...sliderSettings}>
          {sliderData.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <img
                src={slide.image}
                alt={slide.alt}
                /* Beri kelas unik berdasarkan ID slide */
                className={
                  slide.id === 1
                    ? styles.slideStyle1
                    : slide.id === 2
                    ? styles.slideStyle2
                    : slide.id === 3
                    ? styles.slideStyle3
                    : ""
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default FeaturesSection;
