import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Botol from "../components/Botol.jsx";
import KartuProduk from "../components/KartuProduk.jsx";
import { KATEGORI, PRODUK } from "../data/products.js";

const PILAR = [
  {
    icon: <SpaOutlinedIcon sx={{ fontSize: 32 }} />,
    judul: "Bahan Alami Nusantara",
    desk: "Disuling langsung dari rempah dan bunga pilihan petani lokal Indonesia.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
    judul: "Ekstraksi Tahan Lama",
    desk: "Konsentrasi tinggi Eau de Parfum & Extrait de Parfum hingga 14 jam.",
  },
  {
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 32 }} />,
    judul: "Garansi Kemasan Aman",
    desk: "Pengiriman seluruh Indonesia bergaransi ganti baru jika rusak di jalan.",
  },
  {
    icon: <CardGiftcardIcon sx={{ fontSize: 32 }} />,
    judul: "Gratis 2 Sampel Vial",
    desk: "Setiap pembelian botol penuh mendapatkan bonus 2 tester wewangian lain.",
  },
];

export default function Beranda() {
  const unggulan = PRODUK.slice(0, 4);

  return (
    <Box sx={{ pb: 8 }}>
      {/* 1. Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(180deg, rgba(235, 232, 222, 0.4) 0%, rgba(247, 246, 241, 1) 100%)",
          pt: { xs: 5, md: 8 },
          pb: { xs: 7, md: 10 },
          borderBottom: "1px solid #dedad0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
            {/* Hero Left Content */}
            <Grid item xs={12} md={7}>
              <Chip
                icon={<AutoAwesomeIcon sx={{ fontSize: "1rem !important", color: "#b88e3d !important" }} />}
                label="ATELIER WEWANGIAN ARTISAN INDONESIA"
                size="small"
                sx={{
                  mb: 2.5,
                  backgroundColor: "rgba(184, 142, 61, 0.12)",
                  color: "#8c6721",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  fontSize: "0.74rem",
                  py: 0.5,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Gloock", Georgia, serif',
                  fontSize: { xs: "2.6rem", sm: "3.4rem", md: "3.9rem" },
                  lineHeight: 1.15,
                  mb: 2.5,
                  color: "text.primary",
                }}
              >
                Parfum Mewah dari Tangan Peracik Nusantara.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 600,
                }}
              >
                Eksplorasi wewangian botani dari empat rumah aroma lokal: keharuman Melati Bandung,
                kedalaman Nilam Aceh, kemewahan Cendana Jawa, hingga kehangatan Kopi Medan.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 5 }}>
                <Button
                  component={RouterLink}
                  to="/koleksi"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 3.5, py: 1.4 }}
                >
                  Jelajahi Koleksi
                </Button>
                <Button
                  component={RouterLink}
                  to="/tentang"
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ px: 3.5, py: 1.4 }}
                >
                  Kisah di Balik Aroma
                </Button>
              </Stack>

              {/* Quick Metrics */}
              <Stack
                direction="row"
                spacing={{ xs: 2.5, sm: 4 }}
                sx={{
                  pt: 3,
                  borderTop: "1px solid #dedad0",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main" }}>
                    8
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Aroma Eksklusif
                  </Typography>
                </Box>
                <Box sx={{ width: "1px", backgroundColor: "#dedad0" }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main" }}>
                    100%
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Botani Lokal
                  </Typography>
                </Box>
                <Box sx={{ width: "1px", backgroundColor: "#dedad0" }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main" }}>
                    14 Jam
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Daya Tahan Aroma
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            {/* Hero Right Visual Bottles Showcase */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  minHeight: { xs: 360, sm: 420 },
                  borderRadius: 5,
                  backgroundColor: "#ffffff",
                  border: "1px solid #dedad0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0 20px 48px rgba(20, 28, 25, 0.08)",
                  background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #ebe8de 100%)",
                }}
              >
                {/* 3 Bottle Presentation */}
                <Box sx={{ display: "flex", alignItems: "flex-end", gap: { xs: 1, sm: 2 }, zIndex: 1, pb: 2 }}>
                  <Box sx={{ transform: "scale(0.85) translateY(12px)", opacity: 0.85 }}>
                    <Botol warna="#e8e2c9" nama="Melati Subuh" />
                  </Box>
                  <Box sx={{ transform: "scale(1.15) translateY(-8px)", zIndex: 2 }}>
                    <Botol warna="#8a5a3c" nama="Cendana Tua" ukuran="besar" />
                  </Box>
                  <Box sx={{ transform: "scale(0.85) translateY(12px)", opacity: 0.85 }}>
                    <Botol warna="#9bb89a" nama="Hujan di Kebun Teh" />
                  </Box>
                </Box>

                {/* Floating Badge */}
                <Paper
                  elevation={3}
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    right: 24,
                    py: 1.5,
                    px: 2,
                    borderRadius: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    border: "1px solid #eae7de",
                    zIndex: 3,
                  }}
                >
                  <SpaOutlinedIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                      Kurasi Terpilih 2026
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Formula Nilam Aceh &amp; Cendana Tua
                    </Typography>
                  </Box>
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. Value Proposition Pillars */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={3}>
          {PILAR.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3.5,
                  border: "1px solid #dedad0",
                  backgroundColor: "#ffffff",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(20, 28, 25, 0.06)",
                    borderColor: "#b88e3d",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2.5,
                    backgroundColor: "rgba(45, 74, 55, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.main",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 1 }}>
                  {item.judul}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {item.desk}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. Category Showcase */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 8 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography variant="caption" sx={{ textTransform: "uppercase", letterSpacing: "0.12em", color: "secondary.main", fontWeight: 700 }}>
              Keluarga Aroma
            </Typography>
            <Typography variant="h4" component="h2" sx={{ fontFamily: '"Gloock", Georgia, serif', mt: 0.5 }}>
              Pilih Berdasarkan Karakter
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to="/koleksi"
            endIcon={<ArrowForwardIcon />}
            color="primary"
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            Lihat semua koleksi
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {KATEGORI.map((k) => (
            <Grid item key={k.slug} xs={12} sm={6} md={3}>
              <Paper
                component={RouterLink}
                to={`/koleksi/${k.slug}`}
                elevation={0}
                sx={{
                  display: "block",
                  textDecoration: "none",
                  p: 3,
                  height: "100%",
                  borderRadius: 3.5,
                  border: "1px solid #dedad0",
                  backgroundColor: "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.28s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "primary.main",
                    boxShadow: "0 10px 28px rgba(45, 74, 55, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 5,
                    borderRadius: 2,
                    backgroundColor: k.aksenWarna || "primary.main",
                    mb: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontFamily: '"Gloock", Georgia, serif', color: "text.primary", mb: 1 }}>
                  {k.nama}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5, minHeight: 42 }}>
                  {k.deskripsi}
                </Typography>
                <Chip
                  label={k.karakter}
                  size="small"
                  sx={{
                    fontSize: "0.75rem",
                    backgroundColor: "rgba(45, 74, 55, 0.08)",
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 4. Featured Bestsellers */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 9 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography variant="caption" sx={{ textTransform: "uppercase", letterSpacing: "0.12em", color: "secondary.main", fontWeight: 700 }}>
              Favorit Komunitas
            </Typography>
            <Typography variant="h4" component="h2" sx={{ fontFamily: '"Gloock", Georgia, serif', mt: 0.5 }}>
              Paling Sering Dipilih
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to="/koleksi"
            endIcon={<ArrowForwardIcon />}
            color="primary"
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            Buka katalog ({PRODUK.length} parfum)
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {unggulan.map((p) => (
            <Grid item key={p.slug} xs={12} sm={6} md={4} lg={3}>
              <KartuProduk produk={p} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. Story Banner (MUI Paper) */}
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 6 },
            borderRadius: 5,
            backgroundColor: "primary.main",
            color: "#f7f6f1",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 16px 40px rgba(45, 74, 55, 0.25)",
          }}
        >
          <Chip
            label="KARYA SENI & TRADISI"
            size="small"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              fontWeight: 700,
              letterSpacing: "0.08em",
              mb: 2.5,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Gloock", Georgia, serif',
              fontSize: { xs: "1.9rem", sm: "2.6rem", md: "3rem" },
              lineHeight: 1.25,
              maxWidth: 820,
              mx: "auto",
              mb: 2.5,
              color: "#ffffff",
            }}
          >
            "Wewangian bukan sekadar aroma, melainkan cara kita mengingat tanah air."
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 640,
              mx: "auto",
              mb: 4,
              color: "rgba(247, 246, 241, 0.85)",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Dari perbukitan basah Pangalengan hingga hutan pedalaman Aceh, peracik parfum kami
            mendedikasikan hidup untuk mengabadikan kekayaan botani Indonesia ke dalam setiap tetes botol kristal.
          </Typography>
          <Button
            component={RouterLink}
            to="/tentang"
            variant="contained"
            sx={{
              backgroundColor: "#b88e3d",
              color: "#ffffff",
              px: 4,
              py: 1.3,
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#8c6721",
              },
            }}
          >
            Pelajari Filosofi Wangi Lokal
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
