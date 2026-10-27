import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { KATEGORI } from "../data/products.js";

export default function NotFound({
  judul = "Halaman Tidak Ditemukan",
  pesan = "Alamat yang Anda tuju tidak tersedia di atelier kami. Periksa kembali ejaan URL atau jelajahi koleksi wewangian kami.",
}) {
  const { pathname } = useLocation();

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, sm: 6 },
          borderRadius: 4,
          border: "1px solid #dedad0",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            backgroundColor: "rgba(90, 47, 76, 0.08)",
            color: "secondary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2.5,
          }}
        >
          <ErrorOutlineRoundedIcon sx={{ fontSize: 40 }} />
        </Box>

        <Chip
          label="404 — RUTE TIDAK TERSEDIA"
          color="secondary"
          size="small"
          sx={{ mb: 2, fontWeight: 700, letterSpacing: "0.06em" }}
        />

        <Typography
          variant="h4"
          component="h1"
          sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 1.5, color: "text.primary" }}
        >
          {judul}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
          {pesan}
        </Typography>

        {/* Path Info Box */}
        <Box
          sx={{
            p: 1.5,
            mb: 3.5,
            borderRadius: 2,
            backgroundColor: "#f7f6f1",
            border: "1px solid #dedad0",
            fontSize: "0.85rem",
          }}
        >
          <Typography variant="caption" color="text.secondary" display="block">
            Alamat yang Anda coba akses:
          </Typography>
          <Typography component="code" sx={{ fontWeight: 600, color: "secondary.main" }}>
            {pathname}
          </Typography>
        </Box>

        {/* Saran Kategori Aroma */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", display: "block", mb: 1.5 }}>
            Telusuri langsung berdasarkan aroma:
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
            {KATEGORI.map((kat) => (
              <Chip
                key={kat.slug}
                component={RouterLink}
                to={`/koleksi/${kat.slug}`}
                label={kat.nama}
                clickable
                variant="outlined"
                size="small"
                sx={{
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "rgba(45, 74, 55, 0.06)",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Tombol Navigasi Kembali */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
          >
            Kembali ke Beranda
          </Button>
          <Button
            component={RouterLink}
            to="/koleksi"
            variant="outlined"
            color="primary"
            startIcon={<ExploreOutlinedIcon />}
          >
            Buka Katalog Koleksi
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
