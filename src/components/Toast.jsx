import { Snackbar, Alert, Button, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Toast() {
  const { toast, tutupToast } = useCart();

  if (!toast) return null;

  return (
    <Snackbar
      open={Boolean(toast)}
      autoHideDuration={4000}
      onClose={tutupToast}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      sx={{ zIndex: (theme) => theme.zIndex.snackbar }}
    >
      <Alert
        onClose={tutupToast}
        severity={toast.tipe === "sukses" ? "success" : "info"}
        variant="filled"
        sx={{
          width: "100%",
          alignItems: "center",
          borderRadius: 3,
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.16)",
          backgroundColor: toast.tipe === "sukses" ? "primary.main" : "secondary.main",
          color: "#ffffff",
          "& .MuiAlert-icon": {
            color: "#ffffff",
          },
        }}
        action={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              component={Link}
              to="/keranjang"
              onClick={tutupToast}
              size="small"
              variant="outlined"
              startIcon={<ShoppingBagOutlinedIcon fontSize="small" />}
              sx={{
                color: "#ffffff",
                borderColor: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.78rem",
                py: 0.3,
                px: 1.2,
                "&:hover": {
                  borderColor: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                },
              }}
            >
              Keranjang
            </Button>
            <IconButton
              size="small"
              aria-label="Tutup notifikasi"
              color="inherit"
              onClick={tutupToast}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        }
      >
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
            {toast.pesan}
          </Typography>
          {toast.subteks && (
            <Typography variant="caption" sx={{ opacity: 0.9, display: "block" }}>
              {toast.subteks}
            </Typography>
          )}
        </Box>
      </Alert>
    </Snackbar>
  );
}
