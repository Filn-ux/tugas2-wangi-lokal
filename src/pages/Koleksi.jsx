import { useState, useMemo } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import KartuProduk from "../components/KartuProduk.jsx";
import NotFound from "./NotFound.jsx";
import { KATEGORI, PRODUK, cariKategori } from "../data/products.js";
import styles from "./Koleksi.module.css";

const URUTAN = {
  terbaru: { label: "Rekomendasi (Default)", fn: () => 0 },
  murah: { label: "Harga: Terendah ke Tertinggi", fn: (a, b) => a.harga - b.harga },
  mahal: { label: "Harga: Tertinggi ke Terendah", fn: (a, b) => b.harga - a.harga },
  rating: { label: "Rating Tertinggi", fn: (a, b) => (b.rating || 0) - (a.rating || 0) },
};

export default function Koleksi() {
  const { kategori } = useParams();
  const [params, setParams] = useSearchParams();
  const [kataKunci, setKataKunci] = useState("");

  const aktif = kategori ? cariKategori(kategori) : null;

  // 1. Validasi rute dinamis: kategori di URL harus terdaftar di data produk
  if (kategori && !aktif) {
    return (
      <NotFound
        judul="Kategori tidak ditemukan"
        pesan={`Tidak ada kategori parfum bernama "${kategori}". Silakan pilih salah satu kategori aroma yang tersedia.`}
      />
    );
  }

  // 2. Validasi query string (?urut=): nilai urutan yang tidak valid otomatis kembali ke default
  const urutParam = params.get("urut");
  const urut = URUTAN[urutParam] ? urutParam : "terbaru";

  const handleUbahUrutan = (e) => {
    const nilaiBaru = e.target.value;
    const nextParams = new URLSearchParams(params);
    if (nilaiBaru === "terbaru") {
      nextParams.delete("urut");
    } else {
      nextParams.set("urut", nilaiBaru);
    }
    setParams(nextParams);
  };

  // 3. Filter data berdasarkan kategori aktif & kata kunci pencarian
  const daftarTersaring = useMemo(() => {
    let list = PRODUK.filter((p) => !aktif || p.kategori === aktif.slug);

    if (kataKunci.trim()) {
      const q = kataKunci.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.nama.toLowerCase().includes(q) ||
          p.merek.toLowerCase().includes(q) ||
          p.asal.toLowerCase().includes(q) ||
          p.deskripsi.toLowerCase().includes(q) ||
          Object.values(p.notes).some((note) => note.toLowerCase().includes(q))
      );
    }

    return [...list].sort(URUTAN[urut].fn);
  }, [aktif, kataKunci, urut]);

  const kelasTab = ({ isActive }) =>
    isActive ? `${styles.tab} ${styles.aktif}` : styles.tab;

  // Hitung jumlah produk per kategori
  const hitungKategori = (slug) =>
    PRODUK.filter((p) => p.kategori === slug).length;

  return (
    <div className={styles.wadahKoleksi}>
      {/* Header Koleksi */}
      <header className={styles.kepala}>
        <div className={styles.kepalaInfo}>
          <span className={styles.lencanaKoleksi}>
            {aktif ? `Keluarga Aroma ${aktif.nama}` : "Katalog Lengkap"}
          </span>
          <h1>{aktif ? aktif.nama : "Koleksi Wewangian Nusantara"}</h1>
          <p className={styles.deskripsiKepala}>
            {aktif
              ? `${aktif.deskripsi} ${aktif.karakter}`
              : "Seluruh mahakarya racikan tangan terampil peracik aroma lokal Indonesia."}
          </p>
        </div>
      </header>

      {/* Toolbar Filter & Pencarian */}
      <div className={styles.toolbar}>
        {/* Tab Kategori */}
        <nav aria-label="Kategori aroma" className={styles.tabs}>
          <NavLink to="/koleksi" end className={kelasTab}>
            Semua
            <span className={styles.hitungBadge}>{PRODUK.length}</span>
          </NavLink>
          {KATEGORI.map((k) => (
            <NavLink key={k.slug} to={`/koleksi/${k.slug}`} className={kelasTab}>
              {k.nama}
              <span className={styles.hitungBadge}>{hitungKategori(k.slug)}</span>
            </NavLink>
          ))}
        </nav>

        {/* Live Search & Sort Control */}
        <div className={styles.kontrolAksi}>
          <div className={styles.pencarianWadah}>
            <span className={styles.ikonCari} aria-hidden="true">🔍</span>
            <input
              type="search"
              className={styles.inputCari}
              placeholder="Cari aroma, bahan, atau kota..."
              value={kataKunci}
              onChange={(e) => setKataKunci(e.target.value)}
              aria-label="Cari produk wewangian"
            />
            {kataKunci && (
              <button
                type="button"
                className={styles.resetCari}
                onClick={() => setKataKunci("")}
                aria-label="Bersihkan pencarian"
              >
                ✕
              </button>
            )}
          </div>

          <label className={styles.urut}>
            <span className={styles.urutLabel}>Urutkan:</span>
            <select
              value={urut}
              onChange={handleUbahUrutan}
              className={styles.selectUrut}
            >
              {Object.entries(URUTAN).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* Status Bar Jumlah Produk */}
      <div className={styles.statusBar}>
        <p className={styles.jumlahHasil}>
          Menampilkan <strong>{daftarTersaring.length}</strong> wewangian
          {kataKunci && <span> untuk kata kunci "<em>{kataKunci}</em>"</span>}
          {aktif && <span> dalam kategori <strong>{aktif.nama}</strong></span>}
        </p>

        {kataKunci && (
          <button
            type="button"
            className={styles.bersihkanFilter}
            onClick={() => setKataKunci("")}
          >
            Hapus filter kata kunci
          </button>
        )}
      </div>

      {/* Grid Produk atau Status Kosong */}
      {daftarTersaring.length > 0 ? (
        <div className={styles.grid}>
          {daftarTersaring.map((p) => (
            <KartuProduk key={p.slug} produk={p} />
          ))}
        </div>
      ) : (
        <div className={styles.kosong}>
          <span className={styles.kosongIkon}>🌿</span>
          <h3>Tidak ada wewangian yang cocok</h3>
          <p>
            Coba gunakan kata kunci pencarian yang lain atau jelajahi kategori aroma lainnya.
          </p>
          <button
            type="button"
            className={styles.tombolReset}
            onClick={() => setKataKunci("")}
          >
            Tampilkan Semua Parfum
          </button>
        </div>
      )}
    </div>
  );
}
