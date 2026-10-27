import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  TextField,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Chip,
  Alert,
  Stack,
  Divider,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import Botol from "../components/Botol.jsx";
import { useCart } from "../context/CartContext.jsx";
import { rupiah } from "../utils.js";

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
    setModalBayarBuka(false);
    setCheckoutSelesai(true);
    setTimeout(() => {
      kosongkan();
    }, 1500);
  };

  // Tampilan ketika keranjang masih kosong
  if (items.length === 0 && !checkoutSelesai) {
    return (
      <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, sm: 6 },
            borderRadius: 4,
            border: "1px solid #dedad0",
            backgroundColor: "#ffffff",
          }}
        >
          <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
            <Botol warna="#dedad0" ukuran="standar" />
          </Box>
          <Typography variant="h4" component="h1" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 1.5 }}>
            Keranjang Masih Kosong
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
            Anda belum memilih parfum artisan favorit Anda. Jelajahi wewangian khas nusantara
            yang siap menyertai dan memberi karakter pada hari Anda.
          </Typography>
          <Button
            component={RouterLink}
            to="/koleksi"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4, py: 1.2 }}
          >
            Eksplorasi Koleksi Parfum
          </Button>
        </Paper>
      </Container>
    );
  }

  // Tampilan setelah simulasi pembayaran berhasil
  if (checkoutSelesai) {
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
              backgroundColor: "rgba(45, 74, 55, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2.5,
              color: "primary.main",
            }}
          >
            <CheckCircleOutlinedIcon sx={{ fontSize: 44 }} />
          </Box>
          <Typography variant="h4" component="h1" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 1 }}>
            Pesanan Berhasil Dibuat!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3.5 }}>
            Terima kasih, wewangian pilihan Anda sedang disiapkan oleh atelier peracik lokal kami.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              mb: 4,
              backgroundColor: "#f7f6f1",
              borderRadius: 3,
              textAlign: "left",
            }}
          >
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Penerima:</strong> {namaPemesan}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Alamat:</strong> {alamatKirim}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Metode:</strong> {metodeBayar.toUpperCase()}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, color: "primary.main" }}>
              <strong>Total Dibayar:</strong> {rupiah(total)}
            </Typography>
          </Paper>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              component={RouterLink}
              to="/koleksi"
              variant="contained"
              color="primary"
              onClick={() => setCheckoutSelesai(false)}
            >
              Kembali Belanja
            </Button>
            <Button
              component={RouterLink}
              to="/"
              variant="outlined"
              color="primary"
            >
              Ke Beranda
            </Button>
          </Stack>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Header Keranjang & Kosongkan */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        sx={{ mb: 3.5 }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontFamily: '"Gloock", Georgia, serif', color: "text.primary" }}
          >
            Keranjang Belanja
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Periksa pilihan botol parfum artisan Anda sebelum menyelesaikan transaksi.
          </Typography>
        </Box>

        <Button
          variant="text"
          color="secondary"
          size="small"
          startIcon={<DeleteSweepIcon fontSize="small" />}
          onClick={kosongkan}
          sx={{ fontWeight: 600 }}
        >
          Kosongkan Keranjang
        </Button>
      </Stack>

      {/* Free Shipping Progress Indicator (MUI LinearProgress) */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          mb: 4,
          borderRadius: 3,
          border: "1px solid #dedad0",
          backgroundColor: "#ffffff",
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
          <LocalShippingOutlinedIcon color="primary" />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {selisihGratisOngkir === 0 ? (
              <span>
                Selamat! Anda berhak mendapatkan <strong>Gratis Pengiriman Se-Indonesia</strong>.
              </span>
            ) : (
              <span>
                Tambah <strong>{rupiah(selisihGratisOngkir)}</strong> lagi untuk mendapatkan{" "}
                <strong style={{ color: "#2d4a37" }}>Gratis Ongkir</strong>!
              </span>
            )}
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={persenOngkir}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: "#eae7de",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "primary.main",
              borderRadius: 4,
            },
          }}
        />
      </Paper>

      {/* Dua Kolom Layout (MUI Grid) */}
      <Grid container spacing={4}>
        {/* Kolom Kiri: Daftar Barang */}
        <Grid item xs={12} md={7} lg={8}>
          <Stack spacing={2.5}>
            {items.map(({ slug, qty, produk }) => (
              <Paper
                key={slug}
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  border: "1px solid #dedad0",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 2.5,
                }}
              >
                {/* Bottle Thumbnail */}
                <Box
                  sx={{
                    width: 72,
                    height: 84,
                    minWidth: 72,
                    borderRadius: 2,
                    backgroundColor: `${produk.warna}18`,
                    border: "1px solid #eae7de",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 1,
                  }}
                >
                  <Botol warna={produk.warna} nama={produk.nama} ukuran="kecil" />
                </Box>

                {/* Info Produk */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    component={RouterLink}
                    to={`/produk/${slug}`}
                    variant="h6"
                    sx={{
                      fontFamily: '"Gloock", Georgia, serif',
                      fontSize: "1.15rem",
                      textDecoration: "none",
                      color: "text.primary",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {produk.nama}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {produk.merek} • {produk.ukuran} ml • {produk.asal}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "primary.main", mt: 0.5 }}>
                    {rupiah(produk.harga)} / botol
                  </Typography>
                </Box>

                {/* Stepper Quantity & Hapus */}
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #dedad0",
                      borderRadius: 9999,
                      px: 0.5,
                      py: 0.25,
                      backgroundColor: "#f7f6f1",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => ubahQty(slug, qty - 1)}
                      disabled={qty <= 1}
                      aria-label="Kurangi kuantitas"
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography sx={{ fontWeight: 700, px: 1.5, fontSize: "0.9rem" }}>{qty}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => ubahQty(slug, qty + 1)}
                      disabled={qty >= 10}
                      aria-label="Tambah kuantitas"
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => hapus(slug)}
                    aria-label={`Hapus ${produk.nama} dari keranjang`}
                  >
                    <DeleteOutlinedIcon fontSize="small" />
                  </IconButton>
                </Stack>

                {/* Subtotal Item */}
                <Box sx={{ minWidth: 110, textAlign: { xs: "left", sm: "right" } }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Subtotal
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "text.primary" }}>
                    {rupiah(produk.harga * qty)}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Grid>

        {/* Kolom Kanan: Ringkasan Pesanan & Voucher */}
        <Grid item xs={12} md={5} lg={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3.5,
              border: "1px solid #dedad0",
              backgroundColor: "#ffffff",
              position: "sticky",
              top: 96,
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: '"Gloock", Georgia, serif', mb: 2.5 }}>
              Ringkasan Pesanan
            </Typography>

            {/* Kupon Promo Form (MUI TextField & Button) */}
            <Box component="form" onSubmit={handleKuponSubmit} sx={{ mb: 3 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", mb: 1, display: "block" }}>
                Punya Kode Kupon Diskon?
              </Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Contoh: NUSANTARA"
                  value={inputKupon}
                  onChange={(e) => setInputKupon(e.target.value)}
                  InputProps={{
                    startAdornment: <LocalOfferOutlinedIcon fontSize="small" sx={{ mr: 1, color: "text.secondary" }} />,
                  }}
                />
                <Button type="submit" variant="contained" color="secondary" sx={{ minWidth: 84 }}>
                  Terapkan
                </Button>
              </Stack>

              {pesanKupon && (
                <Alert
                  severity={pesanKupon.sukses ? "success" : "error"}
                  sx={{ mt: 1.5, py: 0.5, fontSize: "0.82rem" }}
                >
                  {pesanKupon.pesan}
                </Alert>
              )}

              {kupon && (
                <Box sx={{ mt: 1.5 }}>
                  <Chip
                    label={`Kupon Aktif: ${kupon.kode} (-${kupon.persen}%)`}
                    color="secondary"
                    variant="outlined"
                    onDelete={hapusKupon}
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              )}
            </Box>

            <Divider sx={{ mb: 2.5 }} />

            {/* Rincian Harga */}
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">
                  Subtotal Produk
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {rupiah(subtotal)}
                </Typography>
              </Box>

              {diskon > 0 && (
                <Box sx={{ display: "flex", justifyContent: "space-between", color: "secondary.main" }}>
                  <Typography variant="body2" color="inherit">
                    Potongan Kupon ({kupon?.persen}%)
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }} color="inherit">
                    - {rupiah(diskon)}
                  </Typography>
                </Box>
              )}

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">
                  Biaya Pengiriman
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {selisihGratisOngkir === 0 ? (
                    <span style={{ color: "#2d4a37", fontWeight: 700 }}>GRATIS</span>
                  ) : (
                    "Rp 18.000"
                  )}
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Total Pembayaran
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Gloock", Georgia, serif',
                    fontWeight: 700,
                    color: "primary.main",
                  }}
                >
                  {rupiah(total)}
                </Typography>
              </Box>
            </Stack>

            {/* Tombol Lanjut ke Pembayaran */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setModalBayarBuka(true)}
              sx={{ py: 1.4, mb: 2.5, fontWeight: 700 }}
            >
              Lanjut ke Pembayaran ({items.reduce((acc, cur) => acc + cur.qty, 0)} Botol)
            </Button>

            <Stack spacing={1} sx={{ color: "text.secondary", fontSize: "0.8rem" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LockOutlinedIcon fontSize="inherit" color="action" />
                <Typography variant="caption">Transaksi Terenkripsi &amp; Dijamin Aman</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalShippingOutlinedIcon fontSize="inherit" color="action" />
                <Typography variant="caption">Garansi Botol Kaca Utuh Sampai Tujuan</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Interactive Checkout Modal (MUI Dialog Component) */}
      <Dialog
        open={modalBayarBuka}
        onClose={() => setModalBayarBuka(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3.5,
            p: 1,
            backgroundColor: "#ffffff",
          },
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" sx={{ fontFamily: '"Gloock", Georgia, serif' }}>
            Konfirmasi Pembayaran
          </Typography>
          <IconButton onClick={() => setModalBayarBuka(false)} size="small" aria-label="Tutup dialog">
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <Box component="form" onSubmit={handleProsesBayar}>
          <DialogContent dividers sx={{ py: 2.5 }}>
            <Stack spacing={2.5}>
              <TextField
                label="Nama Lengkap Penerima"
                required
                fullWidth
                value={namaPemesan}
                onChange={(e) => setNamaPemesan(e.target.value)}
              />

              <TextField
                label="Alamat Pengiriman Lengkap"
                required
                fullWidth
                multiline
                rows={2}
                value={alamatKirim}
                onChange={(e) => setAlamatKirim(e.target.value)}
              />

              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}>
                  Metode Pembayaran
                </FormLabel>
                <RadioGroup
                  value={metodeBayar}
                  onChange={(e) => setMetodeBayar(e.target.value)}
                >
                  <Paper
                    variant="outlined"
                    sx={{
                      px: 2,
                      py: 0.5,
                      mb: 1,
                      borderRadius: 2,
                      borderColor: metodeBayar === "qris" ? "primary.main" : "#dedad0",
                      backgroundColor: metodeBayar === "qris" ? "rgba(45, 74, 55, 0.04)" : "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="qris"
                      control={<Radio color="primary" />}
                      label="QRIS (GoPay, OVO, ShopeePay, BCA, Mandiri)"
                    />
                  </Paper>
                  <Paper
                    variant="outlined"
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      borderColor: metodeBayar === "bca" ? "primary.main" : "#dedad0",
                      backgroundColor: metodeBayar === "bca" ? "rgba(45, 74, 55, 0.04)" : "transparent",
                    }}
                  >
                    <FormControlLabel
                      value="bca"
                      control={<Radio color="primary" />}
                      label="Virtual Account Bank BCA"
                    />
                  </Paper>
                </RadioGroup>
              </FormControl>

              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(45, 74, 55, 0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Total yang Harus Dibayar:
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
                  {rupiah(total)}
                </Typography>
              </Box>
            </Stack>
          </DialogContent>

          <DialogActions sx={{ p: 2.5 }}>
            <Button onClick={() => setModalBayarBuka(false)} color="inherit">
              Batal
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Bayar Sekarang ({rupiah(total)})
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Container>
  );
}
