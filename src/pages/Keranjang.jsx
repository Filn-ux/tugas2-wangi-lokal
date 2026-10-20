import { useState } from "react";
import { Link } from "react-router-dom";
import Botol from "../components/Botol.jsx";
import { useCart } from "../context/CartContext.jsx";
import { rupiah } from "../utils.js";
import styles from "./Keranjang.module.css";

const BATAS_GRATIS_ONGKIR = 300000;

export default function Keranjang() {
  const {
    items,
    subtotal,
    diskon,
    total,
    kupon,
    ubahQty,
    hapus,
    kosongkan,
    terapkanKupon,
    hapusKupon,
  } = useCart();

  const [inputKupon, setInputKupon] = useState("");
  const [pesanKupon, setPesanKupon] = useState(null);
  const [modalBayarBuka, setModalBayarBuka] = useState(false);
  const [checkoutSelesai, setCheckoutSelesai] = useState(false);
  const [namaPemesan, setNamaPemesan] = useState("Filbert Frederyison");
  const [alamatKirim, setAlamatKirim] = useState("Jl. Kebon Aromatik No. 25, Bandung");
  const [metodeBayar, setMetodeBayar] = useState("qris");

  const selisihGratisOngkir = Math.max(0, BATAS_GRATIS_ONGKIR - (subtotal || 0));
  const persenOngkir = Math.min(100, Math.round(((subtotal || 0) / BATAS_GRATIS_ONGKIR) * 100));

  const handleKuponSubmit = (e) => {
    e.preventDefault();
    if (!inputKupon.trim()) return;
    const hasil = terapkanKupon(inputKupon);
    setPesanKupon(hasil);
    if (hasil.sukses) {
      setInputKupon("");
    }
  };

  const handleProsesBayar = (e) => {
    e.preventDefault();
    setCheckoutSelesai(true);
    setTimeout(() => {
      kosongkan();
    }, 1500);
  };

  // Tampilan ketika keranjang masih kosong
  if (items.length === 0 && !checkoutSelesai) {
    return (
      <section className={styles.kosong}>
        <div className={styles.kosongIlustrasi} aria-hidden="true">
          <Botol warna="#dedad0" ukuran="standar" />
        </div>
        <h1>Keranjang Wewangian Masih Kosong</h1>
        <p className={styles.kosongDeskripsi}>
          Anda belum memilih parfum artisan favorit Anda. Jelajahi delapan wewangian khas nusantara
          yang siap menyertai hari Anda.
        </p>
        <Link to="/koleksi" className={styles.tombol}>
          Eksplorasi Koleksi Parfum →
        </Link>
      </section>
    );
  }

  // Tampilan setelah simulasi pembayaran berhasil
  if (checkoutSelesai) {
    return (
      <section className={styles.selesaiBox}>
        <div className={styles.selesaiIkon}>✓</div>
        <h1>Pesanan Berhasil Dibuat!</h1>
        <p className={styles.selesaiSub}>
          Terima kasih, wewangian pilihan Anda sedang disiapkan oleh atelier peracik lokal kami.
        </p>
        <div className={styles.detailRingkas}>
          <p><strong>Penerima:</strong> {namaPemesan}</p>
          <p><strong>Alamat:</strong> {alamatKirim}</p>
          <p><strong>Metode:</strong> {metodeBayar.toUpperCase()}</p>
          <p><strong>Total Dibayar:</strong> {rupiah(total)}</p>
        </div>
        <div className={styles.selesaiAksi}>
          <Link
            to="/koleksi"
            className={styles.tombol}
            onClick={() => setCheckoutSelesai(false)}
          >
            Kembali Belanja
          </Link>
          <Link to="/" className={styles.tombolGaris}>
            Ke Beranda
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className={styles.wadahKeranjang}>
      <header className={styles.kepalaKeranjang}>
        <h1 className={styles.judul}>Keranjang Belanja</h1>
        <button
          type="button"
          className={styles.kosongkanBtn}
          onClick={kosongkan}
        >
          Kosongkan Keranjang
        </button>
      </header>

      {/* Free Shipping Progress Indicator */}
      <div className={styles.ongkirBox}>
        <div className={styles.ongkirTeks}>
          <span>🚚</span>
          {selisihGratisOngkir === 0 ? (
            <p><strong>Selamat!</strong> Anda berhak mendapatkan <strong>Gratis Pengiriman Se-Indonesia</strong>.</p>
          ) : (
            <p>
              Tambah <strong>{rupiah(selisihGratisOngkir)}</strong> lagi untuk mendapatkan <strong>Gratis Ongkir</strong>!
            </p>
          )}
        </div>
        <div className={styles.ongkirBarWadah}>
          <div
            className={styles.ongkirBar}
            style={{ width: `${persenOngkir}%` }}
          />
        </div>
      </div>

      {/* Dua Kolom Checkout */}
      <div className={styles.layoutDuaKolom}>
        {/* Kolom Kiri: Daftar Barang */}
        <section className={styles.daftarKolom} aria-label="Daftar item parfum">
          <ul className={styles.daftar}>
            {items.map(({ slug, qty, produk }) => (
              <li key={slug} className={styles.baris}>
                <div
                  className={styles.botolThumb}
                  style={{ "--warna": produk.warna }}
                >
                  <Botol warna={produk.warna} nama={produk.nama} ukuran="kecil" />
                </div>

                <div className={styles.itemInfo}>
                  <Link to={`/produk/${slug}`} className={styles.namaItem}>
                    {produk.nama}
                  </Link>
                  <p className={styles.metaItem}>
                    {produk.merek} · {produk.ukuran} ml · {produk.asal}
                  </p>
                  <p className={styles.hargaSatuan}>
                    {rupiah(produk.harga)} / botol
                  </p>
                </div>

                {/* Stepper Jumlah */}
                <div className={styles.stepperBox}>
                  <div className={styles.stepper}>
                    <button
                      type="button"
                      className={styles.stepBtn}
                      onClick={() => ubahQty(slug, qty - 1)}
                      disabled={qty <= 1}
                      aria-label="Kurangi jumlah"
                    >
                      −
                    </button>
                    <span className={styles.stepNum}>{qty}</span>
                    <button
                      type="button"
                      className={styles.stepBtn}
                      onClick={() => ubahQty(slug, qty + 1)}
                      disabled={qty >= 10}
                      aria-label="Tambah jumlah"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className={styles.hapus}
                    onClick={() => hapus(slug)}
                  >
                    Hapus
                  </button>
                </div>

                {/* Subtotal Item */}
                <div className={styles.subtotalItem}>
                  <span className={styles.labelSubtotalItem}>Subtotal:</span>
                  <strong>{rupiah(produk.harga * qty)}</strong>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Kolom Kanan: Ringkasan Belanja & Kupon */}
        <aside className={styles.ringkasanKolom} aria-label="Ringkasan pembayaran">
          <div className={styles.ringkasanCard}>
            <h2 className={styles.ringkasanJudul}>Ringkasan Pesanan</h2>

            {/* Form Kupon Promo */}
            <form onSubmit={handleKuponSubmit} className={styles.formKupon}>
              <label htmlFor="input-kupon" className={styles.labelKupon}>
                Punya Kode Kupon Diskon?
              </label>
              <div className={styles.kuponInputRow}>
                <input
                  id="input-kupon"
                  type="text"
                  placeholder="Coba: NUSANTARA"
                  value={inputKupon}
                  onChange={(e) => setInputKupon(e.target.value)}
                  className={styles.inputKupon}
                />
                <button type="submit" className={styles.tombolKupon}>
                  Pasang
                </button>
              </div>

              {pesanKupon && (
                <p
                  className={
                    pesanKupon.sukses ? styles.kuponSukses : styles.kuponGagal
                  }
                >
                  {pesanKupon.pesan}
                </p>
              )}

              {kupon && (
                <div className={styles.kuponTerpasang}>
                  <div>
                    <strong>{kupon.kode}</strong>
                    <span>{kupon.label}</span>
                  </div>
                  <button
                    type="button"
                    className={styles.lepasKupon}
                    onClick={hapusKupon}
                  >
                    Lepas
                  </button>
                </div>
              )}
            </form>

            {/* Rincian Angka */}
            <dl className={styles.rincianList}>
              <div className={styles.rincianBaris}>
                <dt>Subtotal Produk</dt>
                <dd>{rupiah(subtotal)}</dd>
              </div>

              {diskon > 0 && (
                <div className={styles.rincianDiskon}>
                  <dt>Potongan Kupon ({kupon?.persen}%)</dt>
                  <dd>− {rupiah(diskon)}</dd>
                </div>
              )}

              <div className={styles.rincianBaris}>
                <dt>Biaya Pengiriman</dt>
                <dd>
                  {selisihGratisOngkir === 0 ? (
                    <span className={styles.ongkirGratis}>GRATIS</span>
                  ) : (
                    "Rp 18.000"
                  )}
                </dd>
              </div>

              <div className={styles.rincianTotal}>
                <dt>Total Pembayaran</dt>
                <dd>{rupiah(total)}</dd>
              </div>
            </dl>

            <button
              type="button"
              className={styles.tombolBayar}
              onClick={() => setModalBayarBuka(true)}
            >
              Lanjut ke Pembayaran ({items.reduce((acc, cur) => acc + cur.qty, 0)} Botol)
            </button>

            <div className={styles.garansiAman}>
              <span>🔒 Transaksi Aman & Terenkripsi</span>
              <span>📦 Jaminan Botol Utuh Sampai Tujuan</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Interactive Checkout Modal (Tugas Simulasi) */}
      {modalBayarBuka && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modalKotak}>
            <div className={styles.modalKepala}>
              <h3>Konfirmasi Pembayaran</h3>
              <button
                type="button"
                className={styles.modalTutup}
                onClick={() => setModalBayarBuka(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleProsesBayar} className={styles.modalForm}>
              <label>
                Nama Lengkap Penerima
                <input
                  type="text"
                  required
                  value={namaPemesan}
                  onChange={(e) => setNamaPemesan(e.target.value)}
                />
              </label>

              <label>
                Alamat Pengiriman
                <textarea
                  required
                  rows={2}
                  value={alamatKirim}
                  onChange={(e) => setAlamatKirim(e.target.value)}
                />
              </label>

              <fieldset className={styles.metodeFieldset}>
                <legend>Metode Pembayaran</legend>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="metode"
                    value="qris"
                    checked={metodeBayar === "qris"}
                    onChange={(e) => setMetodeBayar(e.target.value)}
                  />
                  QRIS (GoPay, OVO, BCA, Mandiri)
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="metode"
                    value="bca"
                    checked={metodeBayar === "bca"}
                    onChange={(e) => setMetodeBayar(e.target.value)}
                  />
                  Virtual Account Bank BCA
                </label>
              </fieldset>

              <div className={styles.modalTotal}>
                <span>Total yang Harus Dibayar:</span>
                <strong>{rupiah(total)}</strong>
              </div>

              <div className={styles.modalAksi}>
                <button
                  type="button"
                  className={styles.modalBatal}
                  onClick={() => setModalBayarBuka(false)}
                >
                  Batal
                </button>
                <button type="submit" className={styles.modalKonfirmasi}>
                  Bayar Sekarang ({rupiah(total)})
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
