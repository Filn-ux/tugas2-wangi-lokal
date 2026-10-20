import styles from "./Botol.module.css";

/**
 * Komponen Ilustrasi Botol Parfum Kaca Mewah (Bespoke Glass Flacon)
 * Menggunakan SVG dengan gradien refleksi kaca, cairan bergradasi warna produk,
 * leher botol beraksen emas/metalik, dan label artisan minimalis.
 */
export default function Botol({ warna = "#e8e2c9", nama = "", ukuran = "standar" }) {
  // Dukungan prop lama: jika ukuran === "kecil" atau boolean kecil
  const isKecil = ukuran === "kecil" || ukuran === true;
  const isBesar = ukuran === "besar";

  const kelasBotol = isKecil
    ? styles.kecil
    : isBesar
    ? styles.besar
    : styles.standar;

  // Buat ID unik untuk gradient agar tidak konflik saat banyak botol ditampilkan
  const idGrad = "cair-" + warna.replace("#", "");

  return (
    <div className={styles.wadah}>
      <svg
        className={kelasBotol}
        viewBox="0 0 140 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Botol parfum mewah ${nama}`}
      >
        <defs>
          {/* Bayangan Dasar Botol */}
          <radialGradient id="bayang" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#141c19" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#141c19" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#141c19" stopOpacity="0" />
          </radialGradient>

          {/* Gradien Tutup Botol Hitam Obsidian Mewah */}
          <linearGradient id="tutupGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1c2623" />
            <stop offset="35%" stopColor="#2e3b37" />
            <stop offset="70%" stopColor="#1a2421" />
            <stop offset="100%" stopColor="#0f1614" />
          </linearGradient>

          {/* Gradien Aksen Leher Kuningan / Emas Elegan */}
          <linearGradient id="emasLeher" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a37a2c" />
            <stop offset="40%" stopColor="#e5c87e" />
            <stop offset="70%" stopColor="#c49b4c" />
            <stop offset="100%" stopColor="#8c621d" />
          </linearGradient>

          {/* Gradien Kaca Kristal Bening */}
          <linearGradient id="kacaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="15%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
          </linearGradient>

          {/* Gradien Cairan Parfum Sesuai Warna Produk */}
          <linearGradient id={idGrad} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={warna} stopOpacity="0.75" />
            <stop offset="50%" stopColor={warna} stopOpacity="0.95" />
            <stop offset="100%" stopColor={warna} stopOpacity="0.9" />
          </linearGradient>

          {/* Refleksi Cahaya Garis Putih Vertikal Kaca */}
          <linearGradient id="kilau" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Bayangan Ambient Bawah */}
        <ellipse cx="70" cy="188" rx="46" ry="6" fill="url(#bayang)" />

        {/* 2. Tutup Botol Minimalis Mewah (Bakelite / Obsidian Cap) */}
        <rect x="52" y="10" width="36" height="32" rx="4" fill="url(#tutupGrad)" />
        <line x1="53" y1="12" x2="87" y2="12" stroke="#445550" strokeWidth="1" />
        <rect x="54" y="24" width="32" height="2" fill="#141c19" opacity="0.4" />

        {/* 3. Leher Botol Beraksen Kuningan / Gold Ring */}
        <rect x="60" y="42" width="20" height="12" rx="1.5" fill="url(#emasLeher)" />
        <line x1="60" y1="46" x2="80" y2="46" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" />

        {/* 4. Badan Botol Kaca Tebal (Solid Heavy Crystal Base) */}
        <rect
          x="22"
          y="54"
          width="96"
          height="126"
          rx="16"
          fill="#fbfcf9"
          stroke="#202c28"
          strokeWidth="1.8"
        />

        {/* 5. Cairan Parfum Di Dalam Botol */}
        <rect
          x="28"
          y="90"
          width="84"
          height="82"
          rx="10"
          fill={`url(#${idGrad})`}
        />

        {/* Efek Meniskus Cairan (Lengkungan Permukaan Parfum) */}
        <path
          d="M 28 94 Q 70 88 112 94 L 112 102 Q 70 96 28 102 Z"
          fill={warna}
          opacity="0.5"
        />

        {/* Dasar Kaca Tebal (Heavy Base Refraction) */}
        <rect
          x="28"
          y="166"
          width="84"
          height="10"
          rx="4"
          fill="#ffffff"
          opacity="0.65"
        />

        {/* 6. Refleksi & Kilau Cahaya Kaca Kristal */}
        <rect
          x="24"
          y="56"
          width="92"
          height="122"
          rx="14"
          fill="url(#kacaGrad)"
        />

        {/* Kilau Vertikal di Sisi Kiri Botol */}
        <rect
          x="32"
          y="62"
          width="5"
          height="108"
          rx="2.5"
          fill="url(#kilau)"
        />

        {/* 7. Label Artisan Mewah (Textured Paper Emblem) */}
        <rect
          x="41"
          y="108"
          width="58"
          height="42"
          rx="3"
          fill="#ffffff"
          stroke="#dcd8cc"
          strokeWidth="1"
        />
        <rect
          x="44"
          y="111"
          width="52"
          height="36"
          rx="2"
          fill="#fdfdfb"
          stroke="#b88e3d"
          strokeWidth="0.6"
          strokeDasharray="2 1.5"
        />

        {/* Tipografi Label Botol */}
        <line x1="50" y1="120" x2="90" y2="120" stroke="#141c19" strokeWidth="1.6" />
        <line x1="54" y1="127" x2="86" y2="127" stroke="#5a2f4c" strokeWidth="1" />
        <circle cx="70" cy="135" r="2" fill="#b88e3d" />
        <line x1="58" y1="139" x2="82" y2="139" stroke="#72827a" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
