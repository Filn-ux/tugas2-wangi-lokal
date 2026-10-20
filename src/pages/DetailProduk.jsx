import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Botol from "../components/Botol.jsx";
import KartuProduk from "../components/KartuProduk.jsx";
import NotFound from "./NotFound.jsx";
import { useCart } from "../context/CartContext.jsx";
import { PRODUK, cariProduk, cariKategori } from "../data/products.js";
import { rupiah } from "../utils.js";
import styles from "./DetailProduk.module.css";

export default function DetailProduk() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { tambah } = useCart();
  const [qty, setQty] = useState(1);
  const [tabAktif, setTabAktif] = useState("tips");

  const produk = cariProduk(slug);

  // 1. Validasi rute dinamis: jika slug produk tidak ada di data, tampilkan fallback 404
  if (!produk) {
    return (
      <NotFound
        judul="Produk tidak ditemukan"
        pesan={`Produk dengan pengenal "${slug}" tidak ada atau sudah tidak dijual di atelier kami.`}
      />
    );
  }

  const kategori = cariKategori(produk.kategori);
  const terkait = PRODUK.filter(
    (p) => p.kategori === produk.kategori && p.slug !== produk.slug
  );

  const handleBeliSekarang = () => {
    tambah(produk.slug, qty);
    navigate("/keranjang");
  };

  const handleTambahKeranjang = () => {
    tambah(produk.slug, qty);
  };

  const kurangiQty = () => {
    setQty((prev) => Math.max(1, prev - 1));
  };

  const tambahQty = () => {
    setQty((prev) => Math.min(10, prev + 1));
  };

  return (
    <div className={styles.halamanDetail}>
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className={styles.crumb}>
        <Link to="/">Beranda</Link>
        <span className={styles.pemisah}>/</span>
        <Link to="/koleksi">Koleksi</Link>
        <span className={styles.pemisah}>/</span>
        <Link to={`/koleksi/${kategori.slug}`}>{kategori.nama}</Link>
        <span className={styles.pemisah}>/</span>
        <span className={styles.crumbAktif}>{produk.nama}</span>
      </nav>

      {/* Main Product Showcase Article */}
      <article className={styles.detail}>
        {/* Kolom Kiri: Visual Showcase Botol Parfum */}
        <div className={styles.visualKolom}>
          <div
            className={styles.gambar}
            style={{ "--warna": produk.warna }}
          >
            <div className={styles.lencanaKonsentrasi}>
              {produk.konsentrasi || "Eau de Parfum"}
            </div>

            <div className={styles.botolWrapper}>
              <Botol warna={produk.warna} nama={produk.nama} ukuran="besar" />
            </div>

            <div className={styles.glowAura} />
          </div>

          <div className={styles.fiturCepat}>
            <div className={styles.fiturItem}>
              <span>✨</span>
              <p>100% Ekstrak Alami</p>
            </div>
            <div className={styles.fiturItem}>
              <span>🛡️</span>
              <p>Garansi Botol Pecah</p>
            </div>
            <div className={styles.fiturItem}>
              <span>🎁</span>
              <p>Gratis 2 Vial Tester</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Informasi & Aksi Pembelian */}
        <div className={styles.info}>
          <div className={styles.headerInfo}>
            <div className={styles.merekAsal}>
              <span className={styles.merek}>{produk.merek}</span>
              <span className={styles.titik}>•</span>
              <span className={styles.asal}>Asal: {produk.asal}</span>
            </div>
            <div className={styles.ratingBox}>
              <span className={styles.bintang}>★ {produk.rating || 4.9}</span>
              <span className={styles.ulasanCount}>
                ({produk.ulasanCount || 48} ulasan terverifikasi)
              </span>
            </div>
          </div>

          <h1 className={styles.nama}>{produk.nama}</h1>

          <div className={styles.hargaWadah}>
            <p className={styles.harga}>{rupiah(produk.harga)}</p>
            <span className={styles.ukuran}>Isi Bersih: {produk.ukuran} ml</span>
          </div>

          <p className={styles.deskripsi}>{produk.deskripsi}</p>

          {produk.cerita && (
            <div className={styles.ceritaBox}>
              <p className={styles.ceritaTeks}>"{produk.cerita}"</p>
            </div>
          )}

          {/* Piramida Aroma (Fragrance Notes Hierarchy) */}
          <section className={styles.piramidaSection}>
            <h3 className={styles.piramidaJudul}>Piramida Aroma (Fragrance Notes)</h3>
            <dl className={styles.notes}>
              <div className={styles.noteRow}>
                <dt>
                  <span className={styles.noteLevel}>Top Notes</span>
                  <span className={styles.noteWaktu}>15 Menit Pertama</span>
                </dt>
                <dd>{produk.notes.atas}</dd>
              </div>
              <div className={styles.noteRow}>
                <dt>
                  <span className={styles.noteLevel}>Heart Notes</span>
                  <span className={styles.noteWaktu}>2 - 4 Jam Inti</span>
                </dt>
                <dd>{produk.notes.tengah}</dd>
              </div>
              <div className={styles.noteRow}>
                <dt>
                  <span className={styles.noteLevel}>Base Notes</span>
                  <span className={styles.noteWaktu}>6 - 14 Jam Jejak</span>
                </dt>
                <dd>{produk.notes.dasar}</dd>
              </div>
            </dl>
          </section>

          {/* Karakteristik Ketahanan & Sillage */}
          <div className={styles.spesifikasi}>
            <div className={styles.spekItem}>
              <span className={styles.spekLabel}>Ketahanan</span>
              <strong className={styles.spekVal}>{produk.ketahanan || "8 - 12 Jam"}</strong>
            </div>
            <div className={styles.spekItem}>
              <span className={styles.spekLabel}>Proyeksi / Sillage</span>
              <strong className={styles.spekVal}>{produk.sillage || "Moderate"}</strong>
            </div>
            <div className={styles.spekItem}>
              <span className={styles.spekLabel}>Waktu Pemakaian</span>
              <strong className={styles.spekVal}>{produk.waktu || "Segala Suasana"}</strong>
            </div>
          </div>

          {/* Tombol Aksi Pembelian & Stepper Jumlah */}
          <div className={styles.beliSection}>
            <div className={styles.stepperWrapper}>
              <span className={styles.labelQty}>Jumlah</span>
              <div className={styles.stepper}>
                <button
                  type="button"
                  className={styles.stepBtn}
                  onClick={kurangiQty}
                  disabled={qty <= 1}
                  aria-label="Kurangi kuantitas"
                >
                  −
                </button>
                <span className={styles.stepValue}>{qty}</span>
                <button
                  type="button"
                  className={styles.stepBtn}
                  onClick={tambahQty}
                  disabled={qty >= 10}
                  aria-label="Tambah kuantitas"
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.tombolAksi}>
              <button
                type="button"
                className={styles.utama}
                onClick={handleBeliSekarang}
              >
                Beli Sekarang (Langsung Bayar)
              </button>
              <button
                type="button"
                className={styles.sekunder}
                onClick={handleTambahKeranjang}
              >
                + Tambah ke Keranjang
              </button>
            </div>
          </div>

          {/* Informasi Tambahan Tab */}
          <div className={styles.infoTabs}>
            <div className={styles.tabButtons}>
              <button
                type="button"
                className={tabAktif === "tips" ? styles.tabAktifBtn : styles.tabBtn}
                onClick={() => setTabAktif("tips")}
              >
                Tips Pemakaian
              </button>
              <button
                type="button"
                className={tabAktif === "bahan" ? styles.tabAktifBtn : styles.tabBtn}
                onClick={() => setTabAktif("bahan")}
              >
                Bahan & Keamanan
              </button>
              <button
                type="button"
                className={tabAktif === "kirim" ? styles.tabAktifBtn : styles.tabBtn}
                onClick={() => setTabAktif("kirim")}
              >
                Pengiriman
              </button>
            </div>

            <div className={styles.tabKonten}>
              {tabAktif === "tips" && (
                <p>
                  Semprotkan parfum pada titik-titik nadi seperti pergelangan tangan bagian dalam,
                  leher, dan belakang telinga dari jarak 15-20 cm. Jangan digosok agar molekul aroma
                  tidak rusak.
                </p>
              )}
              {tabAktif === "bahan" && (
                <p>
                  Menggunakan pelarut alkohol nabati dari tebu Indonesia (food-grade). 100% bebas
                  paraben, bebas phthalate, dan tidak pernah diuji pada hewan (cruelty-free).
                </p>
              )}
              {tabAktif === "kirim" && (
                <p>
                  Dikirim dalam kotak proteksi khusus berlapis honeycomb paper. Pesanan sebelum
                  pukul 15:00 WIB dikirim pada hari yang sama dari gudang kami di Jakarta &amp; Bandung.
                </p>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Bagian Produk Terkait Berdasarkan Kategori */}
      {terkait.length > 0 && (
        <section className={styles.terkait}>
          <div className={styles.terkaitHeader}>
            <div>
              <span className={styles.terkaitSub}>Eksplorasi Lanjutan</span>
              <h2>Aroma {kategori.nama.toLowerCase()} lainnya yang mungkin Anda sukai</h2>
            </div>
            <Link to={`/koleksi/${kategori.slug}`} className={styles.linkKategori}>
              Lihat kategori {kategori.nama} selengkapnya →
            </Link>
          </div>
          <div className={styles.grid}>
            {terkait.map((p) => (
              <KartuProduk key={p.slug} produk={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
