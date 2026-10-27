import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { KATEGORI } from "../data/products.js";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#141c19",
        color: "#ebe8de",
        pt: { xs: 6, md: 8 },
        pb: 4,
        mt: 8,
        borderTop: "3px solid #2d4a37",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Kolom 1: Brand Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontFamily: '"Gloock", Georgia, serif',
                fontSize: "1.7rem",
                color: "#f7f6f1",
                display: "block",
                mb: 1.5,
              }}
            >
              Wangi Lokal
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#a4b3ac",
                lineHeight: 1.8,
                mb: 3,
                fontSize: "0.9rem",
              }}
            >
              Atelier wewangian artisan nusantara yang meracik kekayaan bahan alami lokal—mulai dari
              melati Bandung, nilam Aceh, cendana Yogyakarta, hingga kenanga lereng Gunung Lawu.
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip
                icon={<SpaOutlinedIcon sx={{ fontSize: "0.9rem !important", color: "#b88e3d !important" }} />}
                label="100% Bahan Alami"
                size="small"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#ebe8de",
                  fontSize: "0.74rem",
                }}
              />
              <Chip
                icon={<VerifiedUserOutlinedIcon sx={{ fontSize: "0.9rem !important", color: "#b88e3d !important" }} />}
                label="Ethically Sourced"
                size="small"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#ebe8de",
                  fontSize: "0.74rem",
                }}
              />
            </Stack>
          </Grid>

          {/* Kolom 2: Navigasi */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                color: "#f7f6f1",
                mb: 2,
              }}
            >
              Eksplorasi
            </Typography>
            <Stack spacing={1.2}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover" sx={{ color: "#a4b3ac", fontSize: "0.9rem" }}>
                Beranda
              </Link>
              <Link component={RouterLink} to="/koleksi" color="inherit" underline="hover" sx={{ color: "#a4b3ac", fontSize: "0.9rem" }}>
                Semua Koleksi
              </Link>
              <Link component={RouterLink} to="/keranjang" color="inherit" underline="hover" sx={{ color: "#a4b3ac", fontSize: "0.9rem" }}>
                Keranjang Belanja
              </Link>
              <Link component={RouterLink} to="/tentang" color="inherit" underline="hover" sx={{ color: "#a4b3ac", fontSize: "0.9rem" }}>
                Tentang &amp; Rubrik
              </Link>
            </Stack>
          </Grid>

          {/* Kolom 3: Kategori Aroma */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                color: "#f7f6f1",
                mb: 2,
              }}
            >
              Keluarga Aroma
            </Typography>
            <Stack spacing={1.2}>
              {KATEGORI.map((kat) => (
                <Link
                  key={kat.slug}
                  component={RouterLink}
                  to={`/koleksi/${kat.slug}`}
                  color="inherit"
                  underline="hover"
                  sx={{ color: "#a4b3ac", fontSize: "0.9rem" }}
                >
                  {kat.nama}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Kolom 4: Informasi Akademik */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                color: "#f7f6f1",
                mb: 2,
              }}
            >
              Informasi Akademik
            </Typography>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 700, color: "#f7f6f1" }}>
                Filbert Frederyison
              </Typography>
              <Typography variant="caption" sx={{ color: "#b88e3d", fontWeight: 600, display: "block" }}>
                NIM: 251130082
              </Typography>
              <Typography variant="caption" sx={{ color: "#a4b3ac", display: "block", mt: 0.5 }}>
                Tugas 3: Material UI &amp; Custom Theme
              </Typography>
              <Typography variant="caption" sx={{ color: "#72827a", display: "block" }}>
                Semester 3 - Pemrograman Web
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: "#72827a" }}>
            &copy; {new Date().getFullYear()} Wangi Lokal. Dibangun dengan React 18, React Router v6 &amp; Material UI.
          </Typography>
          <Typography variant="caption" sx={{ color: "#72827a" }}>
            Merek dan produk bersifat fiktif untuk sarana pemenuhan tugas perkuliahan.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
