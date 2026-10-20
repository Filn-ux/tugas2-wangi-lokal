import { Link } from "react-router-dom";
import { KATEGORI } from "../data/products.js";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.isi}>
        <div className={styles.kolomBrand}>
          <Link to="/" className={styles.brandTitle}>Wangi Lokal</Link>
          <p className={styles.brandDeskripsi}>
            Atelier wewangian artisan nusantara yang meracik kekayaan bahan alami lokal—mulai dari
            melati Bandung, nilam Aceh, cendana Yogyakarta, hingga kenanga lereng Gunung Lawu.
          </p>
          <div className={styles.lencanaKoleksi}>
            <span>100% Bahan Alami Nusantara</span>
            <span>Ethically Sourced</span>
          </div>
        </div>

        <div className={styles.kolom}>
          <h4>Eksplorasi</h4>
          <ul className={styles.linkList}>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/koleksi">Semua Koleksi</Link></li>
            <li><Link to="/keranjang">Keranjang Belanja</Link></li>
            <li><Link to="/tentang">Tentang Proyek</Link></li>
          </ul>
        </div>

        <div className={styles.kolom}>
          <h4>Kategori Aroma</h4>
          <ul className={styles.linkList}>
            {KATEGORI.map((kat) => (
              <li key={kat.slug}>
                <Link to={`/koleksi/${kat.slug}`}>{kat.nama}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.kolom}>
          <h4>Informasi Akademik</h4>
          <div className={styles.identitas}>
            <p className={styles.namaMhs}>Filbert Frederyison</p>
            <p className={styles.nim}>NIM: 251130082</p>
            <p className={styles.matkul}>Tugas 2: Multi-Page React Router & CSS Modules</p>
            <p className={styles.semester}>Semester 3 - 2026</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomIsi}>
          <p>&copy; {new Date().getFullYear()} Wangi Lokal. Dibuat dengan React Router, Context API &amp; CSS Modules.</p>
          <p className={styles.subtext}>Merek dan produk bersifat fiktif untuk keperluan edukasi dan penilaian tugas kuliah.</p>
        </div>
      </div>
    </footer>
  );
}
