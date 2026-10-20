import { Link } from "react-router-dom";
import Botol from "./Botol.jsx";
import { rupiah } from "../utils.js";
import { useCart } from "../context/CartContext.jsx";
import styles from "./KartuProduk.module.css";

export default function KartuProduk({ produk }) {
  const { tambah } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    tambah(produk.slug, 1);
  };

  return (
    <article className={styles.wadah}>
      <Link to={`/produk/${produk.slug}`} className={styles.kartu}>
        <div
          className={styles.gambar}
          style={{ "--warna": produk.warna }}
        >
          <div className={styles.lencanaAtas}>
            <span className={styles.asal}>{produk.asal}</span>
            {produk.konsentrasi && (
              <span className={styles.konsentrasi}>{produk.konsentrasi}</span>
            )}
          </div>

          <div className={styles.botolWrapper}>
            <Botol warna={produk.warna} nama={produk.nama} />
          </div>

          <button
            type="button"
            className={styles.tombolCepat}
            onClick={handleQuickAdd}
            aria-label={`Tambah ${produk.nama} ke keranjang`}
          >
            <span className={styles.tambahIkon}>+</span> Tambah ke Keranjang
          </button>
        </div>

        <div className={styles.info}>
          <div className={styles.metaRow}>
            <span className={styles.merek}>{produk.merek}</span>
            <span className={styles.rating}>★ {produk.rating || 4.9}</span>
          </div>

          <h3 className={styles.nama}>{produk.nama}</h3>

          <p className={styles.karakterSingkat}>
            {produk.karakter?.slice(0, 3).join(" · ") || produk.kategori}
          </p>

          <div className={styles.hargaRow}>
            <p className={styles.harga}>
              {rupiah(produk.harga)}
              <span className={styles.ukuran}> / {produk.ukuran} ml</span>
            </p>
            <span className={styles.ketahanan}>{produk.ketahanan || "Tahan Lama"}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
