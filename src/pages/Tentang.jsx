import { Link } from "react-router-dom";
import styles from "./Tentang.module.css";

const DAERAH_BAHAN = [
  { kota: "Aceh", bahan: "Minyak Nilam Hitam (Patchouli)", icon: "🌱", desk: "Kualitas nilam terbaik dunia dari tanah vulkanik subur." },
  { kota: "Bandung", bahan: "Melati Sambac & Kenanga", icon: "🌸", desk: "Dipetik fajar sebelum embun menguap untuk aroma murni." },
  { kota: "Yogyakarta", bahan: "Kayu Cendana & Rempah Cengkeh", icon: "🪵", desk: "Warisan wewangian keraton yang berwibawa dan menenangkan." },
  { kota: "Pangalengan", bahan: "Daun Teh Hijau & Rumput Basah", icon: "🍃", desk: "Kesejukan dataran tinggi Jawa Barat seusai diguyur hujan." },
  { kota: "Medan", bahan: "Biji Kopi Mandheling & Gula Aren", icon: "☕", desk: "Aroma gourmand hangat yang memanjakan nostalgia rasa." },
  { kota: "Magetan", bahan: "Jeruk Bali & Jahe Emprit", icon: "🍊", desk: "Kesegaran citrus energetik penyemangat hari tropis." },
];

export default function Tentang() {
  return (
    <div className={styles.wadahTentang}>
      {/* Hero Tentang */}
      <header className={styles.heroTentang}>
        <span className={styles.subTag}>ATELIER KITA</span>
        <h1>Menghidupkan Kembali Kekayaan Aroma Nusantara</h1>
        <p className={styles.lead}>
          Wangi Lokal lahir dari kekaguman mendalam pada kekayaan flora dan rempah Indonesia.
          Kami percaya bahwa wewangian terbaik tidak harus datang dari benua seberang—tanah air kita
          menyimpan sari aroma paling berharga di dunia.
        </p>
      </header>

      {/* Nilai / Prinsip Kami */}
      <section className={styles.prinsipSection}>
        <div className={styles.kartuPrinsip}>
          <span className={styles.prinsipIkon}>🧭</span>
          <h3>Transparansi Piramida Aroma</h3>
          <p>
            Kami mencantumkan secara rinci nada atas, tengah, dan dasar pada setiap botol agar Anda
            memahami perjalanan transformasi aroma di kulit Anda sepanjang hari.
          </p>
        </div>

        <div className={styles.kartuPrinsip}>
          <span className={styles.prinsipIkon}>🌾</span>
          <h3>Kemitraan Petani Lokal</h3>
          <p>
            Minyak atsiri kami disuling langsung dari perkebunan rakyat di Aceh, Jawa Barat,
            Yogyakarta, hingga Sumatera Utara dengan prinsip perdagangan yang adil.
          </p>
        </div>

        <div className={styles.kartuPrinsip}>
          <span className={styles.prinsipIkon}>🔬</span>
          <h3>Artisan Craftsmanship</h3>
          <p>
            Diproduksi dalam batch terbatas oleh peracik aroma independen (independent nose) yang
            menggabungkan kearifan lokal dengan sains formulasi modern.
          </p>
        </div>
      </section>

      {/* Peta Bahan Baku */}
      <section className={styles.petaSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.subTag}>ASAL USUL BOTANIKAL</span>
          <h2>Bahan Baku dari Sabang sampai Merauke</h2>
          <p>Setiap botol adalah perayaan geografi dan keanekaragaman hayati Indonesia.</p>
        </div>

        <div className={styles.gridDaerah}>
          {DAERAH_BAHAN.map((d) => (
            <div key={d.kota} className={styles.daerahCard}>
              <div className={styles.daerahIcon}>{d.icon}</div>
              <div className={styles.daerahInfo}>
                <h4>{d.kota}</h4>
                <strong className={styles.daerahBahan}>{d.bahan}</strong>
                <p>{d.desk}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kartu Informasi Tugas Mahasiswa & Pemenuhan Rubrik */}
      <section className={styles.kartuTugas}>
        <div className={styles.tugasHeader}>
          <span className={styles.lencanaTugas}>KREDIT AKADEMIK &amp; RUBRIK</span>
          <h2>Informasi Mahasiswa &amp; Proyek Tugas</h2>
        </div>

        <div className={styles.tugasData}>
          <div className={styles.barisInfo}>
            <span>Nama Mahasiswa:</span>
            <strong>Filbert Frederyison</strong>
          </div>
          <div className={styles.barisInfo}>
            <span>Nomor Induk Mahasiswa (NIM):</span>
            <strong>251130082</strong>
          </div>
          <div className={styles.barisInfo}>
            <span>Mata Kuliah / Tugas:</span>
            <strong>Tugas 2 (Rancangan Tugas ke-5) Pemrograman Web</strong>
          </div>
          <div className={styles.barisInfo}>
            <span>Teknologi:</span>
            <strong>React 18 + React Router v6 + CSS Modules + Vite</strong>
          </div>
        </div>

        <div className={styles.tabelRubrik}>
          <h4>Cakupan Pemenuhan Rubrik Tugas:</h4>
          <ul>
            <li><strong>Minimal 3 Halaman:</strong> Beranda (/), Koleksi (/koleksi), Detail (/produk/:slug), Keranjang (/keranjang), Tentang (/tentang).</li>
            <li><strong>Parameter URL Dinamis:</strong> /produk/:slug, /koleksi/:kategori, dan query string ?urut=.</li>
            <li><strong>Styling Terenkapsulasi:</strong> CSS Modules (*.module.css) pada tiap komponen &amp; design tokens pada global.css.</li>
            <li><strong>Fallback / 404:</strong> Rute wildcard (*) dan proteksi slug/kategori yang tidak ditemukan menuju halaman NotFound.</li>
            <li><strong>Nilai Tambah:</strong> Keranjang terintegrasi LocalStorage, live search filter wewangian, sistem voucher diskon, dan notifikasi toast.</li>
          </ul>
        </div>

        <p className={styles.disclaimer}>
          Catatan: Seluruh merek wewangian, nama produk, dan cerita di dalam situs ini merupakan fiktif
          yang dikembangkan sebagai sarana edukasi dan pemenuhan tugas perkuliahan.
        </p>

        <Link to="/koleksi" className={styles.tombolKoleksi}>
          Kembali ke Koleksi Parfum →
        </Link>
      </section>
    </div>
  );
}
