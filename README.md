# Wangi Lokal – Atelier E-commerce Parfum Lokal (React Router + CSS Modules)

Tugas 2 (Rancangan Tugas ke-5): Aplikasi React multi-halaman dengan React Router v6 dan CSS Modules terenkapsulasi.

**Identitas Mahasiswa:**
- Nama: **Filbert Frederyison**
- NIM: **251130082**
- Topik: E-commerce Wewangian Botani Artisan Nusantara

---

## Cara Menjalankan

```bash
# Instalasi dependensi
npm install

# Menjalankan server pengembangan (buka http://localhost:5173 atau port yang tersedia)
npm run dev

# Membangun bundle produksi
npm run build
```

> **Catatan Windows PowerShell:** Jika muncul peringatan `PSSecurityException (running scripts is disabled)`, jalankan melalui Command Prompt atau ketik:
> ```powershell
> cmd /c npm run dev
> ```

---

## Pemetaan ke Rubrik Tugas

| No | Langkah Tugas | Implementasi Proyek |
|---|---|---|
| 1 | **Minimal 3 Halaman** | Memiliki **5 halaman lengkap**: Beranda (`/`), Koleksi (`/koleksi`), Detail Produk (`/produk/:slug`), Keranjang (`/keranjang`), dan Tentang (`/tentang`). |
| 2 | **Parameter URL Dinamis** | - `useParams`: `/produk/:slug` dan `/koleksi/:kategori`<br>- `useSearchParams`: Query string sorting `?urut=murah` & `?urut=mahal` |
| 3 | **Styling Terenkapsulasi** | Setiap halaman dan komponen memiliki file `*.module.css` mandiri; token warna, font, dan shadow didefinisikan secara modular di `global.css`. |
| 4 | **Fallback / 404** | Catch-all route `path="*"` mengarah ke komponen `NotFound`. Validasi internal untuk slug dan kategori yang tidak ada juga menampilkan tampilan `NotFound` terintegrasi. |
| 5 | **Fitur Nilai Tambah (Plus)** | - Keranjang belanja persisten dengan **LocalStorage**.<br>- **Live search filter** pada katalog koleksi wewangian.<br>- Komponen **Toast Notifikasi** mengambang saat menambah barang.<br>- Sistem **Kupon Diskon** (contoh: `NUSANTARA` atau `WANGI10`).<br>- Indikator progress bar gratis ongkir & simulasi modal checkout.<br>- Ilustrasi botol parfum SVG mewah dengan refleksi kaca kristal. |

---

## Skenario Demo Video (±2 Menit)

1. **Beranda:** Tunjukkan hero banner atelier parfum dan klik kategori "Woody" (`/koleksi/woody`).
2. **Koleksi & Query Param:** Ubah urutan harga menjadi terendah (`?urut=murah`), coba fitur pencarian live search, lalu pindah antar tab kategori.
3. **Detail Produk:** Buka produk *Cendana Tua* (`/produk/cendana-tua`), jelajahi Piramida Aroma (Top, Heart, Base Notes), pilih jumlah, lalu klik "+ Tambah ke Keranjang" (amati munculnya notifikasi Toast) atau "Beli Sekarang".
4. **Keranjang:** Buka halaman Keranjang (`/keranjang`), sesuaikan kuantitas produk menggunakan stepper, masukkan kupon `NUSANTARA`, lalu buka konfirmasi pembayaran.
5. **Validasi 404 Fallback:**
   - Ketik URL produk tidak ada: `/produk/xyz` → Tampil "Produk tidak ditemukan".
   - Ketik kategori tidak ada: `/koleksi/abc` → Tampil "Kategori tidak ditemukan".
   - Ketik sembarang rute: `/halaman-ngawur` → Tampil 404 lengkap dengan tombol kembali ke beranda.

---

## Struktur Folder Proyek

```
src/
  App.jsx                  # Definisi rute React Router
  main.jsx                 # BrowserRouter + CartProvider
  global.css               # Design tokens & utilitas global
  utils.js                 # Helper mata uang Rupiah
  context/
    CartContext.jsx        # State keranjang belanja + LocalStorage + Toast + Voucher
  data/
    products.js            # Basis data wewangian, aroma notes, rating & kategori
  components/
    Layout.jsx             # Shell utama dengan Navbar, Footer, & Toast
    Navbar.jsx             # Navigasi sticky glassmorphism + badge + mobile drawer
    Footer.jsx             # Footer multi-kolom + identitas mahasiswa
    KartuProduk.jsx        # Kartu produk dengan preview aroma & quick-add
    Botol.jsx              # Ilustrasi botol parfum kaca kristal berbasis SVG
    Toast.jsx              # Notifikasi mengambang saat aksi keranjang
  pages/
    Beranda.jsx            # Hero banner, keunggulan wewangian, showcase kategori
    Koleksi.jsx            # Katalog wewangian + live search + filter kategori + sorting
    DetailProduk.jsx       # Visual botol besar, piramida aroma, spesifikasi, tabs
    Keranjang.jsx          # Dua kolom checkout, kupon diskon, meter gratis ongkir, modal
    Tentang.jsx            # Filosofi peracik, peta bahan botani nusantara, info tugas
    NotFound.jsx           # Tampilan 404 estetik + tautan saran kategori
```

