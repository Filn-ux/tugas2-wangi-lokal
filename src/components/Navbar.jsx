import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import styles from "./Navbar.module.css";

const menu = [
  { to: "/", label: "Beranda", end: true },
  { to: "/koleksi", label: "Koleksi Parfum" },
  { to: "/tentang", label: "Tentang Kami" },
];

export default function Navbar() {
  const { jumlah } = useCart();
  const [mobileMenuBuka, setMobileMenuBuka] = useState(false);

  const kelasLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.aktif}` : styles.link;

  const kelasMobileLink = ({ isActive }) =>
    isActive ? `${styles.mobileLink} ${styles.mobileAktif}` : styles.mobileLink;

  return (
    <header className={styles.header}>
      {/* Top Announcement Bar */}
      <div className={styles.topbar}>
        <div className={styles.topbarIsi}>
          <span className={styles.topbarPesan}>
            ✦ Gratis Pengiriman Se-Indonesia di atas Rp 300.000 ✦ Gunakan Kode Kupon <strong>NUSANTARA</strong> untuk Diskon 10%
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.bar}>
        <Link to="/" className={styles.logoWadah} onClick={() => setMobileMenuBuka(false)}>
          <span className={styles.logoTeks}>Wangi Lokal</span>
          <span className={styles.subLogo}>ATELIER WEWANGIAN INDONESIA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi utama" className={styles.nav}>
          {menu.map((m) => (
            <NavLink key={m.to} to={m.to} end={m.end} className={kelasLink}>
              {m.label}
            </NavLink>
          ))}

          <NavLink to="/keranjang" className={kelasLink}>
            <span className={styles.keranjangLabel}>Keranjang</span>
            <span className={styles.badge} aria-label={`${jumlah} barang`}>
              {jumlah}
            </span>
          </NavLink>
        </nav>

        {/* Mobile Toggle Button */}
        <div className={styles.mobileAksi}>
          <NavLink to="/keranjang" className={styles.mobileCartBtn} aria-label="Buka Keranjang">
            🛒
            <span className={styles.badge}>{jumlah}</span>
          </NavLink>
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMobileMenuBuka(!mobileMenuBuka)}
            aria-expanded={mobileMenuBuka}
            aria-label="Toggle menu navigasi"
          >
            <span className={mobileMenuBuka ? styles.garisSilang1 : styles.garisNormal} />
            <span className={mobileMenuBuka ? styles.garisSilang2 : styles.garisNormal} />
            <span className={mobileMenuBuka ? styles.garisHilang : styles.garisNormal} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuBuka && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            {menu.map((m) => (
              <NavLink
                key={m.to}
                to={m.to}
                end={m.end}
                className={kelasMobileLink}
                onClick={() => setMobileMenuBuka(false)}
              >
                {m.label}
              </NavLink>
            ))}
            <NavLink
              to="/keranjang"
              className={kelasMobileLink}
              onClick={() => setMobileMenuBuka(false)}
            >
              <span>Keranjang Belanja</span>
              <span className={styles.badge}>{jumlah}</span>
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
