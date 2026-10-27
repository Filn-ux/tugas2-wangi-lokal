import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import PaletteIcon from "@mui/icons-material/Palette";
import DevicesIcon from "@mui/icons-material/Devices";
import MenuBookIcon from "@mui/icons-material/MenuBook";

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
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      {/* Hero Tentang */}
      <Box sx={{ mb: 6, textAlign: { xs: "left", md: "center" } }}>
        <Chip
          label="ATELIER KITA & FILOSOFI BOTANIKAL"
          color="secondary"
          size="small"
          sx={{ mb: 1.5, fontWeight: 700, letterSpacing: "0.06em" }}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: '"Gloock", Georgia, serif',
            fontSize: { xs: "2.3rem", sm: "3.2rem" },
            mb: 2,
            color: "text.primary",
          }}
        >
          Menghidupkan Kembali Kekayaan Aroma Nusantara
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 720,
            mx: { xs: 0, md: "auto" },
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}
        >
          Wangi Lokal lahir dari kekaguman mendalam pada kekayaan flora dan rempah Indonesia.
          Kami percaya bahwa wewangian terbaik tidak harus datang dari benua seberang—tanah air kita
          menyimpan sari aroma paling berharga di dunia.
        </Typography>
      </Box>

      {/* Nilai / Prinsip Kami (MUI Grid & Paper) */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              height: "100%",
              borderRadius: 3.5,
              border: "1px solid #dedad0",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant="h3" sx={{ mb: 1 }}>🧭</Typography>
            <Typography variant="h6" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 1 }}>
              Transparansi Piramida Aroma
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Kami mencantumkan secara rinci nada atas (top), tengah (heart), dan dasar (base) pada
              setiap botol agar Anda memahami perjalanan transformasi aroma di kulit Anda.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              height: "100%",
              borderRadius: 3.5,
              border: "1px solid #dedad0",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant="h3" sx={{ mb: 1 }}>🌾</Typography>
            <Typography variant="h6" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 1 }}>
              Kemitraan Petani Lokal
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Minyak atsiri kami disuling langsung dari perkebunan rakyat di Aceh, Jawa Barat,
              Yogyakarta, hingga Sumatera Utara dengan prinsip etis dan perdagangan yang adil.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              height: "100%",
              borderRadius: 3.5,
              border: "1px solid #dedad0",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant="h3" sx={{ mb: 1 }}>🔬</Typography>
            <Typography variant="h6" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 1 }}>
              Artisan Craftsmanship
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Diproduksi dalam batch terbatas oleh peracik aroma independen (independent nose) yang
              menggabungkan kearifan lokal dengan sains formulasi wewangian modern.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Peta Bahan Baku Nusantara */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ mb: 3.5 }}>
          <Typography variant="caption" sx={{ textTransform: "uppercase", letterSpacing: "0.1em", color: "secondary.main", fontWeight: 700 }}>
            ASAL USUL BOTANIKAL
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontFamily: '"Gloock", Georgia, serif', mt: 0.5 }}>
            Bahan Baku dari Sabang sampai Merauke
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {DAERAH_BAHAN.map((d) => (
            <Grid item key={d.kota} xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  border: "1px solid #eae7de",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h4">{d.icon}</Typography>
                <Box>
                  <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 700, textTransform: "uppercase" }}>
                    {d.kota}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "text.primary" }}>
                    {d.bahan}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.5 }}>
                    {d.desk}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Kartu Informasi Tugas Mahasiswa & Pemenuhan Rubrik Tugas 3 */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3.5, sm: 5 },
          borderRadius: 4,
          border: "2px solid #2d4a37",
          backgroundColor: "#ffffff",
          boxShadow: "0 12px 36px rgba(45, 74, 55, 0.08)",
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
          <SchoolIcon color="primary" />
          <Chip
            label="TUGAS 3 — SUBCPMK 12-1-1 (MINGGU KE-7)"
            color="primary"
            size="small"
            sx={{ fontWeight: 700, letterSpacing: "0.06em" }}
          />
        </Stack>

        <Typography variant="h4" component="h2" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 3 }}>
          Kredit Akademik &amp; Pemenuhan Rubrik Dosen
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="caption" color="text.secondary">Nama Mahasiswa:</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "primary.main" }}>
                Filbert Frederyison
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="caption" color="text.secondary">Nomor Induk Mahasiswa (NIM):</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                251130082
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="caption" color="text.secondary">Penugasan:</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Tugas 3 (Material UI)
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="caption" color="text.secondary">Teknologi Framework:</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                React 18 + Material UI v5/v6
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 2 }}>
          Tabel Pemetaan Indikator, Kriteria &amp; Bobot Penilaian Dosen
        </Typography>

        <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 3, mb: 4 }}>
          <Table aria-label="Tabel Pemenuhan Rubrik Tugas">
            <TableHead sx={{ backgroundColor: "rgba(45, 74, 55, 0.06)" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, width: "25%" }}>Indikator &amp; Bobot</TableCell>
                <TableCell sx={{ fontWeight: 700, width: "35%" }}>Syarat Tugas</TableCell>
                <TableCell sx={{ fontWeight: 700, width: "40%" }}>Implementasi pada Proyek Wangi Lokal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ verticalAlign: "top" }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleIcon color="success" fontSize="small" />
                    <strong>(1) Ketepatan Implementasi Material UI (40%)</strong>
                  </Stack>
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  Mengganti minimal 3 elemen antarmuka pada aplikasi sebelumnya (Tugas 2) dengan komponen Material UI (misal: AppBar, Button, TextField, Card).
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  Mengimplementasikan <strong>lebih dari 15 komponen Material UI resmi</strong>:<br />
                  • <strong>AppBar, Toolbar, Drawer, Badge, IconButton</strong> pada Navbar<br />
                  • <strong>Card, CardActionArea, CardContent, CardActions, Chip, Rating, Button</strong> pada KartuProduk<br />
                  • <strong>TextField, Select, MenuItem, Tabs, Tab, Grid</strong> pada Koleksi<br />
                  • <strong>LinearProgress, Dialog, RadioGroup</strong> pada Keranjang<br />
                  • <strong>Breadcrumbs, Rating, Tabs</strong> pada DetailProduk<br />
                  • <strong>Snackbar &amp; Alert</strong> pada Notifikasi Toast
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ verticalAlign: "top" }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PaletteIcon color="primary" fontSize="small" />
                    <strong>(2) Ketepatan Kustomisasi Tema (30%)</strong>
                  </Stack>
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  Melakukan kustomisasi tema (warna, tipografi) sesuai identitas aplikasi.
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  Menggunakan <code>ThemeProvider</code>, <code>createTheme</code>, dan <code>responsiveFontSizes</code>:<br />
                  • <strong>Palette:</strong> Primary (Vetiver Green <code>#2d4a37</code>), Secondary (Nilam Purple <code>#5a2f4c</code>), Accent (Emas Cendana <code>#b88e3d</code>), Background Kapur (<code>#f7f6f1</code>)<br />
                  • <strong>Tipografi:</strong> Headings dengan font <em>Gloock</em> serif &amp; isi teks dengan font <em>Instrument Sans</em><br />
                  • <strong>Component Overrides:</strong> MuiButton pill radius, MuiCard border halus, MuiAppBar blur backdrop
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ verticalAlign: "top" }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <DevicesIcon color="primary" fontSize="small" />
                    <strong>(3) Responsivitas &amp; Kenyamanan (20%)</strong>
                  </Stack>
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  Memastikan tampilan responsif pada ukuran layar berbeda dan penekanan kenyamanan pengguna.
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  • Tata letak responsif menggunakan MUI <strong>Grid &amp; Container</strong> dengan breakpoint (xs/sm/md/lg)<br />
                  • <strong>Mobile Drawer navigation</strong> otomatis aktif di layar smartphone<br />
                  • Kartu produk adaptif (1 kolom di mobile, 2 di tablet, 3-4 di desktop)<br />
                  • Aksesibilitas ARIA label, keyboard focus state, dan touch target ramah jempol
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ verticalAlign: "top" }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <MenuBookIcon color="primary" fontSize="small" />
                    <strong>(4) Kelengkapan Dokumentasi (10%)</strong>
                  </Stack>
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  Mendokumentasikan hasil melalui video demo, kompresi berkas/repositori Git, dan riwayat chat AI.
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  • README lengkap memuat cara instalasi, pemetaan rubrik, skenario video demo, dan log AI chat<br />
                  • Struktur repositori bersih dan siap dibundel zip/rar atau dipublish ke GitHub
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="text.secondary">
            Catatan: Seluruh merek dan produk bersifat fiktif untuk sarana penilaian tugas akademik.
          </Typography>
          <Button
            component={RouterLink}
            to="/koleksi"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            Lihat Koleksi Parfum Material UI
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
