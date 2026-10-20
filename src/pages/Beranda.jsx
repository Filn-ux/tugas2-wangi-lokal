import { Link } from "react-router-dom";
import Botol from "../components/Botol.jsx";
import KartuProduk from "../components/KartuProduk.jsx";
import { KATEGORI, PRODUK } from "../data/products.js";
import styles from "./Beranda.module.css";

export default function Beranda() {
  const unggulan = PRODUK.slice(0, 4);

  return (
    <div className={styles.beranda}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.teks}>
          <div className={styles.lencanaHero}>
            <span className={styles.bintangIkon}>✦</span> ATELIER WEWANGIAN ARTISAN INDONESIA
          </div>
          <h1 className={styles.judulHero}>
            Parfum Mewah dari Tangan Peracik Nusantara.
          </h1>
          <p className={styles.deskripsiHero}>
            Eksplorasi wewangian botani dari empat rumah aroma lokal: keharuman Melati Bandung,
            kedalaman Nilam Aceh, kemewahan Cendana Jawa, hingga kehangatan Kopi Medan.
          </p>
          <div className={styles.tombolGroup}>
            <Link to="/koleksi" className={styles.tombolUtama}>
              Jelajahi Koleksi <span className={styles.panah}>→</span>
            </Link>
            <Link to="/tentang" className={styles.tombolSekunder}>
              Kisah di Balik Aroma
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <strong>8</strong>
              <span>Aroma Eksklusif</span>
            </div>
            <div className={styles.statPemisah} />
            <div className={styles.statItem}>
              <strong>100%</strong>
              <span>Bahan Botani Lokal</span>
            </div>
            <div className={styles.statPemisah} />
            <div className={styles.statItem}>
              <strong>14 Jam</strong>
              <span>Ketahanan Aroma</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.pedestal} />
          <div className={styles.botolan} aria-hidden="true">
            <div className={styles.b1}>
              <Botol warna="#e8e2c9" nama="Melati Subuh" />
            </div>
            <div className={styles.b2}>
              <Botol warna="#8a5a3c" nama="Cendana Tua" ukuran="besar" />
            </div>
            <div className={styles.b3}>
              <Botol warna="#9bb89a" nama="Hujan di Kebun Teh" />
            </div>
          </div>
          <div className={styles.kartuMelayang}>
            <span className={styles.ikonBunga}>🌸</span>
            <div>
              <p className={styles.kmJudul}>Kurasi Terpilih 2026</p>
              <p className={styles.kmSub}>Nilam Aceh & Cendana Tua</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Pillars */}
      <section className={styles.pilarSection} aria-label="Keunggulan kami">
        <div className={styles.pilarGrid}>
          <div className={styles.pilarItem}>
            <div className={styles.pilarIkon}>🌿</div>
            <h3>Bahan Alami Nusantara</h3>
            <p>Disuling langsung dari rempah dan bunga pilihan petani lokal.</p>
          </div>
          <div className={styles.pilarItem}>
            <div className={styles.pilarIkon}>⏳</div>
            <h3>Ekstraksi Tahan Lama</h3>
            <p>Konsentrasi tinggi Eau de Parfum &amp; Extrait de Parfum hingga 14 jam.</p>
          </div>
          <div className={styles.pilarItem}>
            <div className={styles.pilarIkon}>📦</div>
            <h3>Garansi Kemasan Aman</h3>
            <p>Pengiriman seluruh Indonesia bergaransi ganti baru jika rusak di jalan.</p>
          </div>
          <div className={styles.pilarItem}>
            <div className={styles.pilarIkon}>✨</div>
            <h3>Gratis 2 Sampel Vial</h3>
            <p>Setiap pembelian botol penuh mendapatkan bonus 2 tester wewangian lain.</p>
          </div>
        </div>
      </section>

      {/* 3. Category Showcase */}
      <section className={styles.bagian}>
        <div className={styles.bagianHeader}>
          <div>
            <span className={styles.subHeading}>Keluarga Aroma</span>
            <h2>Pilih Berdasarkan Karakter</h2>
          </div>
          <Link to="/koleksi" className={styles.linkSemua}>
            Lihat semua koleksi →
          </Link>
        </div>

        <ul className={styles.kategori}>
          {KATEGORI.map((k) => (
            <li key={k.slug}>
              <Link to={`/koleksi/${k.slug}`} className={styles.kat}>
                <div
                  className={styles.katAksen}
                  style={{ backgroundColor: k.aksenWarna || "var(--vetiver)" }}
                />
                <div className={styles.katIsi}>
                  <strong>{k.nama}</strong>
                  <p className={styles.katDesk}>{k.deskripsi}</p>
                  <span className={styles.katKarakter}>{k.karakter}</span>
                  <span className={styles.katAksi}>Eksplorasi aroma ↗</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Featured Bestsellers */}
      <section className={styles.bagian}>
        <div className={styles.bagianHeader}>
          <div>
            <span className={styles.subHeading}>Favorit Komunitas</span>
            <h2>Paling Sering Dipilih</h2>
          </div>
          <Link to="/koleksi" className={styles.linkSemua}>
            Buka katalog lengkap ({PRODUK.length} parfum) →
          </Link>
        </div>

        <div className={styles.grid}>
          {unggulan.map((p) => (
            <KartuProduk key={p.slug} produk={p} />
          ))}
        </div>
      </section>

      {/* 5. Story Banner */}
      <section className={styles.bannerCerita}>
        <div className={styles.ceritaIsi}>
          <span className={styles.ceritaTag}>Karya Seni & Tradisi</span>
          <h2>"Wewangian bukan sekadar aroma, melainkan cara kita mengingat tanah air."</h2>
          <p>
            Dari perbukitan basah Pangalengan hingga hutan pedalaman Aceh, peracik parfum kami
            mendedikasikan hidup untuk mengabadikan kekayaan botani Indonesia ke dalam setiap tetes botol kristal.
          </p>
          <Link to="/tentang" className={styles.tombolCerita}>
            Pelajari Filosofi Wangi Lokal
          </Link>
        </div>
      </section>
    </div>
  );
}
