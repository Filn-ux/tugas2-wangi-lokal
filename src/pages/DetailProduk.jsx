import { useState } from "react";
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  IconButton,
  Rating,
  Chip,
  Paper,
  Tabs,
  Tab,
  Stack,
  Divider,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SecurityIcon from "@mui/icons-material/Security";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Botol from "../components/Botol.jsx";
import KartuProduk from "../components/KartuProduk.jsx";
import NotFound from "./NotFound.jsx";
import { useCart } from "../context/CartContext.jsx";
import { PRODUK, cariProduk, cariKategori } from "../data/products.js";
import { rupiah } from "../utils.js";

export default function DetailProduk() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { tambah } = useCart();
  const [qty, setQty] = useState(1);
  const [tabAktif, setTabAktif] = useState(0);

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
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      {/* Breadcrumb Navigation (MUI Breadcrumbs) */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="Navigasi Jejak Halaman"
        sx={{ mb: 4, fontSize: "0.9rem" }}
      >
        <Link component={RouterLink} to="/" color="inherit" underline="hover">
          Beranda
        </Link>
        <Link component={RouterLink} to="/koleksi" color="inherit" underline="hover">
          Koleksi
        </Link>
        <Link
          component={RouterLink}
          to={`/koleksi/${kategori.slug}`}
          color="inherit"
          underline="hover"
        >
          {kategori.nama}
        </Link>
        <Typography color="text.primary" sx={{ fontWeight: 600 }}>
          {produk.nama}
        </Typography>
      </Breadcrumbs>

      {/* Main Product Showcase Article */}
      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 8 }}>
        {/* Kolom Kiri: Visual Showcase Botol Parfum */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              minHeight: { xs: 340, sm: 440, md: 480 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
              border: "1px solid #dedad0",
              background: `radial-gradient(circle at 50% 40%, #ffffff 0%, ${produk.warna}25 65%, ${produk.warna}45 100%)`,
              p: 4,
              overflow: "hidden",
            }}
          >
            <Chip
              label={produk.konsentrasi || "Eau de Parfum"}
              color="primary"
              size="small"
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                transform: { xs: "scale(1.1)", sm: "scale(1.25)", md: "scale(1.3)" },
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: { xs: "scale(1.15)", sm: "scale(1.3)", md: "scale(1.35)" },
                },
              }}
            >
              <Botol warna={produk.warna} nama={produk.nama} ukuran="besar" />
            </Box>
          </Paper>

          {/* Fitur Jaminan Cepat */}
          <Grid container spacing={1.5} sx={{ mt: 2 }}>
            <Grid item xs={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: 3,
                  border: "1px solid #eae7de",
                  backgroundColor: "#ffffff",
                }}
              >
                <AutoAwesomeIcon color="primary" fontSize="small" sx={{ mb: 0.5 }} />
                <Typography variant="caption" display="block" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                  100% Ekstrak Alami
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: 3,
                  border: "1px solid #eae7de",
                  backgroundColor: "#ffffff",
                }}
              >
                <SecurityIcon color="primary" fontSize="small" sx={{ mb: 0.5 }} />
                <Typography variant="caption" display="block" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                  Garansi Botol Pecah
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: 3,
                  border: "1px solid #eae7de",
                  backgroundColor: "#ffffff",
                }}
              >
                <CardGiftcardIcon color="primary" fontSize="small" sx={{ mb: 0.5 }} />
                <Typography variant="caption" display="block" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                  Gratis 2 Vial Tester
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Kolom Kanan: Informasi & Aksi Pembelian */}
        <Grid item xs={12} md={7}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Chip
                label={produk.merek}
                size="small"
                sx={{
                  backgroundColor: "rgba(90, 47, 76, 0.1)",
                  color: "secondary.main",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              />
              <Typography variant="body2" color="text.secondary">
                • Asal: {produk.asal}
              </Typography>
            </Stack>

            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontFamily: '"Gloock", Georgia, serif',
                fontSize: { xs: "2.2rem", sm: "2.8rem" },
                mb: 1.5,
                color: "text.primary",
              }}
            >
              {produk.nama}
            </Typography>

            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
              <Rating
                value={produk.rating || 4.9}
                precision={0.1}
                readOnly
                sx={{ color: "#b88e3d" }}
              />
              <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary" }}>
                {produk.rating || 4.9}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ({produk.ulasanCount || 48} ulasan pelanggan terverifikasi)
              </Typography>
            </Stack>

            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 1.5,
                p: 2,
                borderRadius: 3,
                backgroundColor: "#ffffff",
                border: "1px solid #dedad0",
                mb: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  fontFamily: '"Gloock", Georgia, serif',
                }}
              >
                {rupiah(produk.harga)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Isi Bersih: <strong>{produk.ukuran} ml</strong> (Botol Kaca Kristal Artisan)
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5 }}>
              {produk.deskripsi}
            </Typography>

            {produk.cerita && (
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  mb: 3,
                  backgroundColor: "rgba(184, 142, 61, 0.08)",
                  borderLeft: "4px solid #b88e3d",
                  borderRadius: "0 12px 12px 0",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", color: "text.primary", lineHeight: 1.6 }}
                >
                  "{produk.cerita}"
                </Typography>
              </Paper>
            )}

            {/* Piramida Aroma (Fragrance Notes Hierarchy) */}
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid #dedad0",
                backgroundColor: "#ffffff",
                mb: 3,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 2,
                }}
              >
                Piramida Aroma (Fragrance Notes)
              </Typography>

              <Stack spacing={1.5} divider={<Divider />}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      Top Notes
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      15 Menit Pertama
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600 }}>
                    {produk.notes.atas}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      Heart Notes
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      2 - 4 Jam Inti
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "secondary.main", fontWeight: 600 }}>
                    {produk.notes.tengah}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      Base Notes
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      6 - 14 Jam Jejak
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    {produk.notes.dasar}
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            {/* Spesifikasi Ketahanan & Sillage */}
            <Grid container spacing={2} sx={{ mb: 3.5 }}>
              <Grid item xs={4}>
                <Box sx={{ p: 1.5, border: "1px solid #eae7de", borderRadius: 2, textAlign: "center" }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Ketahanan
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5 }}>
                    {produk.ketahanan || "8 - 12 Jam"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 1.5, border: "1px solid #eae7de", borderRadius: 2, textAlign: "center" }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Sillage / Jejak
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5 }}>
                    {produk.sillage || "Moderate"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ p: 1.5, border: "1px solid #eae7de", borderRadius: 2, textAlign: "center" }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Waktu Pakai
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5 }}>
                    {produk.waktu || "Segala Suasana"}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Stepper Jumlah & Tombol Beli */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", sm: "center" }}
              sx={{ mb: 4 }}
            >
              {/* Stepper Quantity (MUI Paper & IconButton) */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #dedad0",
                  borderRadius: 9999,
                  px: 1,
                  py: 0.5,
                  backgroundColor: "#ffffff",
                  minWidth: 130,
                }}
              >
                <IconButton
                  size="small"
                  onClick={kurangiQty}
                  disabled={qty <= 1}
                  aria-label="Kurangi kuantitas"
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ fontWeight: 700, px: 2 }}>{qty}</Typography>
                <IconButton
                  size="small"
                  onClick={tambahQty}
                  disabled={qty >= 10}
                  aria-label="Tambah kuantitas"
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Action Buttons (MUI Buttons) */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<FlashOnIcon />}
                onClick={handleBeliSekarang}
                sx={{ py: 1.4, flex: 1 }}
              >
                Beli Sekarang
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<ShoppingBagOutlinedIcon />}
                onClick={handleTambahKeranjang}
                sx={{ py: 1.4, flex: 1 }}
              >
                + Keranjang
              </Button>
            </Stack>

            {/* Tabs Informasi Tambahan (MUI Tabs & Tab) */}
            <Paper elevation={0} sx={{ border: "1px solid #dedad0", borderRadius: 3, p: 2.5 }}>
              <Tabs
                value={tabAktif}
                onChange={(e, val) => setTabAktif(val)}
                textColor="primary"
                indicatorColor="primary"
                sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}
              >
                <Tab label="Tips Pemakaian" sx={{ textTransform: "none", fontWeight: 600 }} />
                <Tab label="Bahan & Keamanan" sx={{ textTransform: "none", fontWeight: 600 }} />
                <Tab label="Pengiriman" sx={{ textTransform: "none", fontWeight: 600 }} />
              </Tabs>

              <Box sx={{ minHeight: 60 }}>
                {tabAktif === 0 && (
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Semprotkan parfum pada titik-titik nadi seperti pergelangan tangan bagian dalam,
                    leher, dan belakang telinga dari jarak 15-20 cm. Jangan digosok agar molekul aroma
                    tidak terpecah.
                  </Typography>
                )}
                {tabAktif === 1 && (
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Menggunakan pelarut alkohol nabati dari tebu Indonesia (food-grade). 100% bebas
                    paraben, bebas phthalate, dan tidak pernah diuji pada hewan (cruelty-free).
                  </Typography>
                )}
                {tabAktif === 2 && (
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Dikirim dalam kotak proteksi khusus berlapis honeycomb paper tebal. Pesanan sebelum
                    pukul 15:00 WIB dikirim pada hari yang sama dari gudang kami di Jakarta &amp; Bandung.
                  </Typography>
                )}
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      {/* Bagian Produk Terkait Berdasarkan Kategori */}
      {terkait.length > 0 && (
        <Box sx={{ mt: 6, pt: 6, borderTop: "1px solid #dedad0" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            sx={{ mb: 4 }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "secondary.main",
                  fontWeight: 700,
                }}
              >
                Eksplorasi Lanjutan
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontFamily: '"Gloock", Georgia, serif', mt: 0.5 }}
              >
                Aroma {kategori.nama.toLowerCase()} lainnya yang mungkin Anda sukai
              </Typography>
            </Box>

            <Button
              component={RouterLink}
              to={`/koleksi/${kategori.slug}`}
              endIcon={<ArrowForwardIcon />}
              color="primary"
              sx={{ mt: { xs: 1.5, sm: 0 } }}
            >
              Lihat kategori {kategori.nama}
            </Button>
          </Stack>

          <Grid container spacing={3}>
            {terkait.map((p) => (
              <Grid item key={p.slug} xs={12} sm={6} md={4} lg={3}>
                <KartuProduk produk={p} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}
