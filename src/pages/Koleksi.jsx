import { useState, useMemo } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  Grid,
  Chip,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TuneIcon from "@mui/icons-material/Tune";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import KartuProduk from "../components/KartuProduk.jsx";
import NotFound from "./NotFound.jsx";
import { KATEGORI, PRODUK, cariKategori } from "../data/products.js";

const URUTAN = {
  terbaru: { label: "Rekomendasi (Default)", fn: () => 0 },
  murah: { label: "Harga: Terendah ke Tertinggi", fn: (a, b) => a.harga - b.harga },
  mahal: { label: "Harga: Tertinggi ke Terendah", fn: (a, b) => b.harga - a.harga },
  rating: { label: "Rating Tertinggi", fn: (a, b) => (b.rating || 0) - (a.rating || 0) },
};

export default function Koleksi() {
  const { kategori } = useParams();
  const navigate = useNavigate();
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

  const handleTabChange = (event, newValue) => {
    if (newValue === "semua") {
      navigate("/koleksi");
    } else {
      navigate(`/koleksi/${newValue}`);
    }
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

  // Hitung jumlah produk per kategori
  const hitungKategori = (slug) =>
    PRODUK.filter((p) => p.kategori === slug).length;

  const currentTab = aktif ? aktif.slug : "semua";

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Header Koleksi */}
      <Box sx={{ mb: 4, textAlign: { xs: "left", md: "center" } }}>
        <Chip
          label={aktif ? `Keluarga Aroma: ${aktif.nama}` : "Katalog Lengkap Nusantara"}
          color="secondary"
          size="small"
          sx={{ mb: 1.5, fontWeight: 600, letterSpacing: "0.05em" }}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: '"Gloock", Georgia, serif',
            fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
            mb: 1.5,
            color: "text.primary",
          }}
        >
          {aktif ? aktif.nama : "Koleksi Wewangian Nusantara"}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 680,
            mx: { xs: 0, md: "auto" },
            fontSize: { xs: "0.95rem", sm: "1.05rem" },
            lineHeight: 1.7,
          }}
        >
          {aktif
            ? `${aktif.deskripsi} ${aktif.karakter}`
            : "Seluruh mahakarya racikan tangan terampil peracik aroma lokal Indonesia dengan bahan botani alami berkualitas tinggi."}
        </Typography>
      </Box>

      {/* Toolbar Filter & Pencarian (Material UI Components) */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 2.5 },
          mb: 4,
          borderRadius: 4,
          border: "1px solid #dedad0",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Category Tabs (MUI Tabs & Tab) */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2.5 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                minHeight: 48,
                px: 2,
              },
            }}
          >
            <Tab
              value="semua"
              label={`Semua (${PRODUK.length})`}
            />
            {KATEGORI.map((k) => (
              <Tab
                key={k.slug}
                value={k.slug}
                label={`${k.nama} (${hitungKategori(k.slug)})`}
              />
            ))}
          </Tabs>
        </Box>

        {/* Search & Sort Controls (MUI TextField & Select) */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={7}>
            <TextField
              fullWidth
              size="medium"
              placeholder="Cari aroma, bahan botani, atau kota racikan..."
              value={kataKunci}
              onChange={(e) => setKataKunci(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: kataKunci ? (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => setKataKunci("")} aria-label="Bersihkan pencarian">
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              }}
            />
          </Grid>

          <Grid item xs={12} md={5}>
            <FormControl fullWidth size="medium">
              <InputLabel id="select-urutan-label">Urutkan Koleksi</InputLabel>
              <Select
                labelId="select-urutan-label"
                id="select-urutan"
                value={urut}
                label="Urutkan Koleksi"
                onChange={handleUbahUrutan}
                startAdornment={
                  <InputAdornment position="start">
                    <TuneIcon fontSize="small" color="action" />
                  </InputAdornment>
                }
              >
                {Object.entries(URUTAN).map(([k, v]) => (
                  <MenuItem key={k} value={k}>
                    {v.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* Result Status Bar */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={1}
        sx={{ mb: 3 }}
      >
        <Typography variant="body2" color="text.secondary">
          Menampilkan <strong>{daftarTersaring.length}</strong> wewangian
          {kataKunci && (
            <span>
              {" "}untuk kata kunci "<strong>{kataKunci}</strong>"
            </span>
          )}
          {aktif && (
            <span>
              {" "}dalam kelompok <strong>{aktif.nama}</strong>
            </span>
          )}
        </Typography>

        {kataKunci && (
          <Button
            size="small"
            color="secondary"
            onClick={() => setKataKunci("")}
            startIcon={<ClearIcon fontSize="small" />}
            sx={{ px: 1.5, py: 0.5, fontSize: "0.82rem" }}
          >
            Hapus Filter Pencarian
          </Button>
        )}
      </Stack>

      {/* Product Grid (MUI Grid & KartuProduk) */}
      {daftarTersaring.length > 0 ? (
        <Grid container spacing={3}>
          {daftarTersaring.map((p) => (
            <Grid item key={p.slug} xs={12} sm={6} md={4} lg={3}>
              <KartuProduk produk={p} />
            </Grid>
          ))}
        </Grid>
      ) : (
        /* Empty State (MUI Paper) */
        <Paper
          elevation={0}
          sx={{
            py: 8,
            px: 3,
            textAlign: "center",
            borderRadius: 4,
            border: "1px dashed #dedad0",
            backgroundColor: "#ffffff",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "rgba(45, 74, 55, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
              color: "primary.main",
            }}
          >
            <SpaOutlinedIcon sx={{ fontSize: 36 }} />
          </Box>
          <Typography variant="h5" component="h3" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 1 }}>
            Tidak Ada Wewangian yang Cocok
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 450, mx: "auto", mb: 3 }}>
            Coba gunakan kata kunci pencarian yang lain atau jelajahi kategori aroma lainnya di atelier kami.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setKataKunci("");
              navigate("/koleksi");
            }}
          >
            Tampilkan Semua Parfum
          </Button>
        </Paper>
      )}
    </Container>
  );
}
