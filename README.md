# Wangi Lokal – Atelier E-commerce Parfum Nusantara (Material UI)

**Rancangan Tugas Ke-6 (Minggu ke-7) – Pemrograman Web**  
**Sub-CPMK:** SUBCPMK 12-1-1  
**Topik:** Implementasi Antarmuka Komponen Material UI & Kustomisasi Tema

---

## Identitas Mahasiswa
- **Nama:** Filbert Frederyison
- **NIM:** 251130082
- **Kelas / Semester:** Semester 3 – 2026
- **Mata Kuliah:** Pemrograman Web (Tugas 3 / Rancangan Tugas ke-6)
- **Topik Proyek:** E-commerce Wewangian Botani Artisan Nusantara

---

## Cara Menjalankan Proyek

```bash
# 1. Instalasi dependensi (React, Vite, @mui/material, @emotion/react, @emotion/styled, @mui/icons-material)
npm install

# 2. Menjalankan server pengembangan lokal (http://localhost:5173 atau port aktif)
npm run dev

# 3. Membangun bundle produksi
npm run build

# 4. Preview hasil build produksi
npm run preview
```

> **Catatan Windows PowerShell:** Jika muncul peringatan `PSSecurityException (running scripts is disabled)`, jalankan perintah melalui Command Prompt (`cmd`) atau ketik:
> ```powershell
> cmd /c npm run dev
> ```

---

## Pemenuhan Rubrik & Kriteria Penilaian Dosen

| No | Indikator & Bobot Penilaian | Kriteria Dosen | Implementasi Nyata pada Proyek Wangi Lokal |
|:--:|---|---|---|
| **1** | **Ketepatan Implementasi Komponen Material UI (Bobot 40%)** | Mengganti minimal **tiga elemen antarmuka** pada aplikasi sebelumnya (Tugas 2) dengan komponen resmi Material UI (misal: AppBar, Button, TextField, Card). | **Mengimplementasikan >15 komponen Material UI resmi:**<br>• `AppBar`, `Toolbar`, `Drawer`, `Badge`, `IconButton` (`Navbar.jsx`)<br>• `Card`, `CardActionArea`, `CardContent`, `CardActions`, `Chip`, `Rating`, `Button` (`KartuProduk.jsx`)<br>• `TextField`, `Select`, `MenuItem`, `FormControl`, `InputLabel`, `Tabs`, `Tab`, `Grid`, `InputAdornment` (`Koleksi.jsx`)<br>• `LinearProgress`, `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions`, `Radio`, `RadioGroup`, `FormControlLabel` (`Keranjang.jsx`)<br>• `Breadcrumbs`, `Rating`, `Tabs`, `Tab`, `ButtonGroup` (`DetailProduk.jsx`)<br>• `Snackbar`, `Alert` (`Toast.jsx`) |
| **2** | **Ketepatan Kustomisasi Tema (Bobot 30%)** | Melakukan kustomisasi tema (warna, tipografi) sesuai identitas visual aplikasi. | **Arsitektur Tema Lengkap di `src/theme/theme.js`:**<br>• **Palette Kustom Nusantara:**<br>&nbsp;&nbsp;- *Primary*: Vetiver Nusantara (`#2d4a37`, light `#3f664d`, dark `#1e3325`)<br>&nbsp;&nbsp;- *Secondary*: Nilam Aceh (`#5a2f4c`, light `#7c446b`, dark `#3d1f33`)<br>&nbsp;&nbsp;- *Warning / Aksen*: Emas Cendana (`#b88e3d`, light `#d4af37`)<br>&nbsp;&nbsp;- *Background*: Kertas Kapur Organik (`#f7f6f1`)<br>&nbsp;&nbsp;- *Text*: Tinta Alami (`#141c19`, secondary `#55655e`)<br>• **Tipografi Kustom:** Judul h1–h6 menggunakan *Gloock* serif mewah, body text menggunakan *Instrument Sans* modern.<br>• **Component Overrides:** Kustomisasi bentuk pil radius pada `MuiButton`, border elegan pada `MuiCard`, efek *glassmorphism backdrop-blur* pada `MuiAppBar`, dan *focus ring* pada `MuiTextField`.<br>• Terbungkus rapi melalui `<ThemeProvider theme={theme}><CssBaseline />` di `src/main.jsx`. |
| **3** | **Responsivitas & Kenyamanan Tampilan (Bobot 20%)** | Memastikan tampilan responsif pada berbagai ukuran layar (mobile, tablet, desktop) dan penekanan UX (aksesibilitas, konsistensi visual). | • Menggunakan sistem layout responsif MUI **Grid & Container** dengan breakpoint `xs`, `sm`, `md`, `lg`.<br>• **Mobile Drawer Navigation** adaptif yang otomatis menggantikan menu desktop saat layar < 900px.<br>• Grid katalog produk beradaptasi (1 kolom di smartphone, 2 di tablet, 3–4 di desktop).<br>• Penggunaan `responsiveFontSizes` untuk kenyamanan membaca di layar kecil.<br>• Kontras warna memenuhi standar aksesibilitas WCAG, dilengkapi atribut ARIA pada tombol dan badge notifikasi. |
| **4** | **Kelengkapan Dokumentasi (Bobot 10%)** | Dokumentasi hasil melalui video demo, kompresi berkas/URL repositori, dan riwayat penelusuran/chat AI. | • README terstruktur dengan panduan instalasi, pemetaan rubrik dosen, skenario video rekaman demo, dan catatan riwayat prompt AI.<br>• Kode sumber bersih, terstruktur, dan tervalidasi `npm run build` tanpa error. |

---

## Daftar Komponen Material UI yang Diimplementasikan

| Komponen MUI | Letak Berkas | Fungsi & Peran dalam Aplikasi |
|---|---|---|
| `<AppBar />` & `<Toolbar />` | `src/components/Navbar.jsx` | Header navigasi *sticky glassmorphism* dengan blur latar belakang dan logo atelier. |
| `<Drawer />` & `<List />` | `src/components/Navbar.jsx` | Menu laci samping responsif untuk layar ponsel (*mobile viewport*). |
| `<Badge />` | `src/components/Navbar.jsx` | Indikator jumlah wewangian di keranjang belanja secara real-time. |
| `<IconButton />` | Navbar, Koleksi, Keranjang, Detail | Tombol ikonik untuk toggle drawer, bersihkan pencarian, stepper kuantitas, dan hapus item. |
| `<Card />` & `<CardActionArea />` | `src/components/KartuProduk.jsx` | Wadah kartu produk parfum interaktif dengan efek *elevation lift* dan border emas saat di-hover. |
| `<CardContent />` & `<CardActions />`| `src/components/KartuProduk.jsx` | Pengelompokan informasi harga, aroma notes, ukuran botol, dan tombol aksi beli cepat. |
| `<Chip />` | KartuProduk, Koleksi, Detail, Footer | Lencana kategori aroma, asal daerah bahan botani, kupon aktif, dan status konsentrasi (EDP/Extrait). |
| `<Rating />` | `src/components/KartuProduk.jsx`, `DetailProduk.jsx` | Bintang penilaian produk pelanggan (*read-only*) dengan presisi 0.1 bintang. |
| `<TextField />` | `src/pages/Koleksi.jsx`, `Keranjang.jsx` | Input pencarian *live search* dengan adornment ikon kaca pembesar & input kupon diskon. |
| `<Select />` & `<MenuItem />` | `src/pages/Koleksi.jsx` | Dropdown pengurutan produk wewangian (Termurah, Termahal, Rating Tertinggi). |
| `<Tabs />` & `<Tab />` | `src/pages/Koleksi.jsx`, `DetailProduk.jsx` | Tab scrollable filter kategori aroma dan tab informasi tips pemakaian/keamanan botani. |
| `<LinearProgress />` | `src/pages/Keranjang.jsx` | Bilah progres dinamis persentase menuju pengiriman gratis se-Indonesia (target Rp 300.000). |
| `<Dialog />` & `<DialogContent />` | `src/pages/Keranjang.jsx` | Modal interaktif konfirmasi checkout pembayaran dan pengisian data alamat pembeli. |
| `<RadioGroup />` & `<Radio />` | `src/pages/Keranjang.jsx` | Seleksi metode pembayaran aman (QRIS instant & Virtual Account BCA). |
| `<Breadcrumbs />` | `src/pages/DetailProduk.jsx` | Navigasi jejak rekam halaman dari Beranda → Koleksi → Kategori → Nama Parfum. |
| `<Snackbar />` & `<Alert />` | `src/components/Toast.jsx`, `Keranjang.jsx` | Notifikasi mengambang saat wewangian berhasil dimasukkan ke keranjang dan status validasi kupon. |
| `<Grid />` & `<Container />` | Di seluruh halaman | Tata letak kolom responsif standar Material UI untuk menjaga konsistensi visual. |

---

## Panduan Skenario Demo Video (Durasi 2–3 Menit)

Saat merekam video demo untuk pengumpulan tugas, ikuti alur skenario berikut agar seluruh kriteria penilaian dosen terdemonstrasikan dengan jelas:

1. **Pembukaan & Identitas Mahasiswa (0:00 - 0:20):**
   - Tampilkan diri atau perkenalkan: *"Nama saya Filbert Frederyison, NIM 251130082. Ini adalah demonstrasi Tugas 3 Pemrograman Web mengenai implementasi antarmuka Material UI dan kustomisasi tema pada aplikasi Wangi Lokal."*
   - Buka halaman **Tentang** (`/tentang`) untuk memperlihatkan tabel pemenuhan rubrik nilai dosen dan identitas mahasiswa.

2. **Demonstrasi Kustomisasi Tema & Beranda (0:20 - 0:50):**
   - Tunjukkan elemen tema: palet warna Vetiver Green (`primary`), Nilam Purple (`secondary`), Emas Cendana, dan font serif Gloock.
   - Perlihatkan MUI `AppBar` dengan efek *backdrop blur*, tombol beradius kapsul, serta kartu kategori interaktif.

3. **Demonstrasi Halaman Koleksi & Filter MUI (0:50 - 1:25):**
   - Buka menu **Koleksi Parfum** (`/koleksi`).
   - Tunjukkan komponen MUI `Tabs` untuk berpindah kategori (*Semua*, *Woody*, *Floral*, *Fresh*, *Gourmand*).
   - Ketik kata kunci pada MUI `TextField` pencarian (contoh: ketik `"Cendana"`), amati kartu langsung tersaring secara *real-time*.
   - Ubah opsi pada MUI `Select` pengurutan (contoh: *"Harga: Terendah ke Tertinggi"*).

4. **Demonstrasi Detail Produk & Notifikasi Toast (1:25 - 1:55):**
   - Klik kartu parfum **Cendana Tua** (`/produk/cendana-tua`).
   - Tunjukkan komponen MUI `Breadcrumbs`, MUI `Rating` bintang emas, dan piramida aroma notes.
   - Gunakan tombol stepper kuantitas (+ / -), lalu klik **"+ Tambah ke Keranjang"**.
   - Tunjukkan kemunculan komponen MUI `Snackbar` dan `Alert` mengambang di pojok layar, serta badge keranjang di navbar yang bertambah.

5. **Demonstrasi Keranjang Belanja & Modal Dialog Checkout (1:55 - 2:30):**
   - Buka halaman **Keranjang** (`/keranjang`).
   - Tunjukkan bilah kemajuan MUI `LinearProgress` gratis pengiriman.
   - Masukkan kode kupon `NUSANTARA` ke input textfield, klik **"Terapkan"**, dan tunjukkan potongan diskon 10% berhasil diaplikasikan dengan label MUI `Chip`.
   - Klik tombol **"Lanjut ke Pembayaran"** untuk membuka modal MUI `Dialog`.
   - Isi form nama/alamat singkat dan pilih opsi pembayaran QRIS pada MUI `RadioGroup`, lalu klik *"Bayar Sekarang"*. Tampilkan konfirmasi sukses pesanan.

6. **Demonstrasi Responsivitas Layar (2:30 - 2:50):**
   - Buka mode *Inspect Element* (F12) browser dan ubah tampilan ke ukuran smartphone (375px/412px).
   - Tunjukkan tombol hamburger yang membuka MUI `Drawer` menu samping.
   - Tunjukkan tata letak kartu produk yang otomatis menjadi 1 kolom responsif.

7. **Penutup (2:50 - 3:00):**
   - Buka rute acak seperti `/halaman-ngawur` untuk menunjukkan penanganan 404 fallback yang ramah pengguna.
   - Ucapkan penutup terima kasih.

---

## Riwayat Penelusuran & Interaksi AI (AI Chat Log)

Sesuai ketentuan luaran tugas dosen (*"Dokumentasi riwayat penelusuran/chat dari AI yang digunakan"*):
1. **Analisis Kebutuhan**: Membaca instruksi penugasan 6.6 (Sub-CPMK 12-1-1, bobot penilaian 40% komponen MUI, 30% kustomisasi tema, 20% responsivitas, 10% dokumentasi).
2. **Pemilihan Dependensi**: Menginstal `@mui/material`, `@emotion/react`, `@emotion/styled`, dan `@mui/icons-material` versi kompatibel Vite React 18.
3. **Konfigurasi Tema (`theme.js`)**: Merancang design system terpusat dengan `createTheme` dan `responsiveFontSizes` yang mempertahankan estetika botani Indonesia (*Vetiver*, *Nilam*, *Cendana*).
4. **Refaktorisasi Komponen**: Menggantikan lebih dari 15 komponen manual sebelumnya menjadi komponen resmi Material UI dengan *type-safety* dan aksesibilitas tinggi.
5. **Validasi & Pengujian**: Menjalankan build bundle produksi (`npm run build`) dan pengujian responsivitas lintas resolusi layar.

---

## Struktur Folder Proyek

```
src/
  App.jsx                  # Rute aplikasi dengan React Router v6
  main.jsx                 # ThemeProvider + CssBaseline + CartProvider + BrowserRouter
  global.css               # Utilitas & font Google Web Fonts
  utils.js                 # Helper mata uang Rupiah
  theme/
    theme.js               # Konfigurasi createTheme, palette, typography, & component overrides
  context/
    CartContext.jsx        # State keranjang belanja + LocalStorage + Toast + Kupon
  data/
    products.js            # Basis data 8 produk wewangian nusantara, rating, aroma notes
  components/
    Layout.jsx             # Shell utama halaman
    Navbar.jsx             # MUI AppBar + Toolbar + Drawer + Badge + IconButton
    Footer.jsx             # MUI Footer multi-kolom + Identitas Akademik
    KartuProduk.jsx        # MUI Card + CardActionArea + Chip + Rating + Button
    Botol.jsx              # Ilustrasi botol parfum kristal interaktif berbasis SVG
    Toast.jsx              # MUI Snackbar + Alert notifikasi mengambang
  pages/
    Beranda.jsx            # Hero showcase, pilar botani, kategori aroma, bestseller
    Koleksi.jsx            # MUI Tabs + TextField live search + Select sort + Grid katalog
    DetailProduk.jsx       # MUI Breadcrumbs + Rating + Pyramid Notes + Stepper + Info Tabs
    Keranjang.jsx          # MUI LinearProgress + TextField kupon + Dialog modal checkout
    Tentang.jsx            # Filosofi atelier + Tabel pemenuhan rubrik nilai dosen
    NotFound.jsx           # MUI Fallback 404 + saran kategori
```
