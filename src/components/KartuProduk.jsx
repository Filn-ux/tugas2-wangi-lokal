import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Rating,
  Box,
  Stack,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Botol from "./Botol.jsx";
import { rupiah } from "../utils.js";
import { useCart } from "../context/CartContext.jsx";

export default function KartuProduk({ produk }) {
  const { tambah } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    tambah(produk.slug, 1);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        borderColor: "#dedad0",
      }}
    >
      <CardActionArea
        component={Link}
        to={`/produk/${produk.slug}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          flexGrow: 1,
        }}
      >
        {/* Visual Botol & Badges Container */}
        <Box
          sx={{
            position: "relative",
            minHeight: 240,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `radial-gradient(circle at 50% 40%, rgba(255,255,255,0.9) 0%, ${produk.warna}22 65%, ${produk.warna}33 100%)`,
            borderBottom: "1px solid #eae7de",
            p: 3,
            overflow: "hidden",
          }}
        >
          {/* Top Badges / Chips */}
          <Stack
            direction="row"
            spacing={0.75}
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              right: 12,
              zIndex: 2,
              justifyContent: "space-between",
            }}
          >
            <Chip
              label={produk.asal}
              size="small"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.88)",
                backdropFilter: "blur(6px)",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "text.primary",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            />
            {produk.konsentrasi && (
              <Chip
                label={produk.konsentrasi}
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(45, 74, 55, 0.3)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  color: "primary.main",
                }}
              />
            )}
          </Stack>

          {/* SVG Bottle Presentation */}
          <Box
            sx={{
              transform: "scale(0.95)",
              transition: "transform 0.35s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Botol warna={produk.warna} nama={produk.nama} />
          </Box>
        </Box>

        {/* Card Content & Details */}
        <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 700,
                color: "secondary.main",
              }}
            >
              {produk.merek}
            </Typography>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <Rating
                value={produk.rating || 4.8}
                precision={0.1}
                size="small"
                readOnly
                sx={{ fontSize: "0.95rem", color: "#b88e3d" }}
              />
              <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
                {produk.rating || 4.8}
              </Typography>
            </Stack>
          </Stack>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: '"Gloock", Georgia, serif',
              fontSize: "1.25rem",
              mb: 0.75,
              color: "text.primary",
              lineHeight: 1.25,
            }}
          >
            {produk.nama}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              fontSize: "0.85rem",
              lineHeight: 1.5,
              minHeight: 38,
            }}
          >
            {produk.karakter?.slice(0, 3).join(" · ") || produk.kategori}
          </Typography>

          <Box sx={{ mt: "auto", pt: 1, borderTop: "1px dashed #eae7de" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline">
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  fontSize: "1.15rem",
                }}
              >
                {rupiah(produk.harga)}
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "text.secondary", ml: 0.5, fontWeight: 400 }}
                >
                  / {produk.ukuran} ml
                </Typography>
              </Typography>

              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500 }}>
                {produk.ketahanan || "Tahan 8-12 Jam"}
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>

      {/* Card Actions: Quick Add to Cart Button (MUI Button) */}
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleQuickAdd}
          aria-label={`Tambah ${produk.nama} ke keranjang`}
          sx={{
            py: 1,
            borderRadius: 3,
            fontSize: "0.88rem",
            fontWeight: 600,
          }}
        >
          Tambah ke Keranjang
        </Button>
      </CardActions>
    </Card>
  );
}
