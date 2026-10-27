import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useCart } from "../context/CartContext.jsx";

const navItems = [
  { to: "/", label: "Beranda", icon: <HomeOutlinedIcon fontSize="small" />, end: true },
  { to: "/koleksi", label: "Koleksi Parfum", icon: <SpaOutlinedIcon fontSize="small" /> },
  { to: "/tentang", label: "Tentang Kami", icon: <InfoOutlinedIcon fontSize="small" /> },
];

export default function Navbar() {
  const { jumlah } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Announcement Bar (MUI Box & Typography) */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#f7f6f1",
          py: 0.75,
          px: 2,
          textAlign: "center",
          fontSize: { xs: "0.74rem", sm: "0.82rem" },
          letterSpacing: "0.03em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 400,
            color: "inherit",
            display: "inline-block",
            fontSize: "inherit",
          }}
        >
          ✦ Gratis Pengiriman Se-Indonesia di atas Rp 300.000 ✦ Gunakan Kupon{" "}
          <strong style={{ color: "#d4af37", fontWeight: 700 }}>NUSANTARA</strong> untuk Diskon 10%
        </Typography>
      </Box>

      {/* Main AppBar (Material UI Component #1) */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(247, 246, 241, 0.94)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #dedad0",
          zIndex: (theme) => theme.zIndex.drawer - 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 74 }, justifyContent: "space-between" }}>
            {/* Logo Brand */}
            <Box
              component={Link}
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                userSelect: "none",
              }}
            >
              <Typography
                variant="h5"
                component="span"
                sx={{
                  fontFamily: '"Gloock", Georgia, serif',
                  fontSize: { xs: "1.35rem", sm: "1.6rem" },
                  fontWeight: 400,
                  color: "primary.main",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                Wangi Lokal
              </Typography>
              <Typography
                variant="caption"
                component="span"
                sx={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  color: "text.secondary",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Atelier Wewangian Indonesia
              </Typography>
            </Box>

            {/* Desktop Navigation Links (MUI Button & Box) */}
            <Box
              component="nav"
              aria-label="Navigasi Utama"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              {navItems.map((item) => {
                const isActive = item.end
                  ? location.pathname === item.to
                  : location.pathname.startsWith(item.to);
                return (
                  <Button
                    key={item.to}
                    component={Link}
                    to={item.to}
                    color="inherit"
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontSize: "0.92rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "primary.main" : "text.primary",
                      backgroundColor: isActive ? "rgba(45, 74, 55, 0.08)" : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(45, 74, 55, 0.06)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}

              <Button
                component={Link}
                to="/keranjang"
                variant={location.pathname === "/keranjang" ? "contained" : "outlined"}
                color="primary"
                startIcon={
                  <Badge badgeContent={jumlah} color="secondary" max={99}>
                    <ShoppingBagOutlinedIcon fontSize="small" />
                  </Badge>
                }
                sx={{
                  ml: 1.5,
                  px: 2.2,
                  py: 0.9,
                  borderRadius: 9999,
                  fontWeight: 600,
                }}
              >
                Keranjang
              </Button>
            </Box>

            {/* Mobile Actions: Cart & Drawer Toggle (Material UI Component #2 & #3) */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 0.5 }}>
              <IconButton
                component={Link}
                to="/keranjang"
                color="inherit"
                aria-label={`Keranjang belanja dengan ${jumlah} barang`}
                sx={{ color: "primary.main" }}
              >
                <Badge badgeContent={jumlah} color="secondary" max={99}>
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </IconButton>

              <IconButton
                color="inherit"
                aria-label="Buka navigasi menu"
                onClick={handleDrawerToggle}
                sx={{ color: "text.primary" }}
              >
                {mobileMenuOpen ? <CloseRoundedIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer (Material UI Component #4) */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "#f7f6f1",
            p: 2,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: '"Gloock", Georgia, serif', color: "primary.main" }}>
            Menu Atelier
          </Typography>
          <IconButton onClick={handleDrawerToggle} aria-label="Tutup menu">
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <List sx={{ p: 0 }}>
          {navItems.map((item) => {
            const isActive = item.end
              ? location.pathname === item.to
              : location.pathname.startsWith(item.to);
            return (
              <ListItem key={item.to} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    "&.Mui-selected": {
                      backgroundColor: "rgba(45, 74, 55, 0.1)",
                      color: "primary.main",
                      fontWeight: 600,
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: isActive ? "primary.main" : "text.secondary", minWidth: 38 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "0.95rem",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}

          <ListItem disablePadding sx={{ mt: 1.5 }}>
            <ListItemButton
              component={Link}
              to="/keranjang"
              onClick={() => setMobileMenuOpen(false)}
              selected={location.pathname === "/keranjang"}
              sx={{
                borderRadius: 2,
                backgroundColor: "primary.main",
                color: "#ffffff !important",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#ffffff", minWidth: 38 }}>
                <ShoppingBagOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={`Keranjang Belanja (${jumlah})`}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
