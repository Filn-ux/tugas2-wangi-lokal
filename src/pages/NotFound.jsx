import { Link, useLocation } from "react-router-dom";
import { KATEGORI } from "../data/products.js";
import styles from "./NotFound.module.css";

// Dipakai sebagai rute fallback "*" dan juga sebagai tampilan validasi
// ketika parameter URL (kategori / slug) tidak valid di database produk.
export default function NotFound({
  judul = "Halaman Tidak Ditemukan",
  pesan = "Alamat yang Anda tuju tidak tersedia di atelier kami. Periksa kembali ejaan URL atau jelajahi koleksi wewangian kami.",
}) {
  const { pathname } = useLocation();

  return (
    <section className={styles.nf} role="alert">
      <div className={styles.kartuNf}>
        <div className={styles.mistVisual} aria-hidden="true">
          <span className={styles.mistIkon}>🌫️</span>
          <span className={styles.kode}>404</span>
        </div>

        <div className={styles.teksKonten}>
          <span className={styles.lencanaError}>Kesalahan Navigasi</span>
          <h1>{judul}</h1>
          <p className={styles.pesan}>{pesan}</p>

          <div className={styles.pathBox}>
            <span>Alamat yang diakses:</span>
            <code>{pathname}</code>
          </div>

          <div className={styles.saranAroma}>
            <p className={styles.saranLabel}>Atau langsung telusuri berdasarkan aroma:</p>
            <div className={styles.saranPills}>
              {KATEGORI.map((kat) => (
                <Link
                  key={kat.slug}
                  to={`/koleksi/${kat.slug}`}
                  className={styles.saranPill}
                >
                  {kat.nama}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.aksi}>
            <Link to="/" className={styles.utama}>
              ← Kembali ke Beranda
            </Link>
            <Link to="/koleksi" className={styles.sekunder}>
              Buka Katalog Koleksi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
