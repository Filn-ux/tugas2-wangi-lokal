import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2d4a37", // Vetiver Nusantara
      light: "#3f664d",
      dark: "#1e3325",
      contrastText: "#f7f6f1",
    },
    secondary: {
      main: "#5a2f4c", // Nilam Aceh
      light: "#7c446b",
      dark: "#3d1f33",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#b88e3d", // Emas Cendana
      light: "#d4af37",
      dark: "#8c6721",
      contrastText: "#141c19",
    },
    background: {
      default: "#f7f6f1",
      paper: "#ffffff",
    },
    text: {
      primary: "#141c19",
      secondary: "#55655e",
    },
    divider: "#dedad0",
  },
  typography: {
    fontFamily: '"Instrument Sans", system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: '"Gloock", Georgia, serif',
      letterSpacing: "-0.02em",
      color: "#141c19",
    },
    h2: {
      fontFamily: '"Gloock", Georgia, serif',
      letterSpacing: "-0.015em",
      color: "#141c19",
    },
    h3: {
      fontFamily: '"Gloock", Georgia, serif',
      letterSpacing: "-0.01em",
      color: "#141c19",
    },
    h4: {
      fontFamily: '"Gloock", Georgia, serif',
      color: "#141c19",
    },
    h5: {
      fontFamily: '"Gloock", Georgia, serif',
      color: "#141c19",
    },
    h6: {
      fontFamily: '"Gloock", Georgia, serif',
      color: "#141c19",
    },
    subtitle1: {
      fontFamily: '"Instrument Sans", system-ui, sans-serif',
      color: "#55655e",
    },
    subtitle2: {
      fontFamily: '"Instrument Sans", system-ui, sans-serif',
      color: "#55655e",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f7f6f1",
          color: "#141c19",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: "10px 22px",
          fontSize: "0.95rem",
          transition: "all 0.25s ease-in-out",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(45, 74, 55, 0.2)",
            transform: "translateY(-1px)",
          },
        },
        containedPrimary: {
          backgroundColor: "#2d4a37",
          color: "#f7f6f1",
          "&:hover": {
            backgroundColor: "#1e3325",
          },
        },
        containedSecondary: {
          backgroundColor: "#5a2f4c",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#3d1f33",
          },
        },
        outlinedPrimary: {
          borderColor: "#2d4a37",
          color: "#2d4a37",
          "&:hover": {
            borderColor: "#1e3325",
            backgroundColor: "rgba(45, 74, 55, 0.06)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #dedad0",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 16px rgba(20, 28, 25, 0.04)",
          transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
          "&:hover": {
            borderColor: "#b88e3d",
            boxShadow: "0 12px 32px rgba(20, 28, 25, 0.09)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        outlined: {
          borderColor: "#dedad0",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(247, 246, 241, 0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #dedad0",
          color: "#141c19",
          boxShadow: "0 2px 12px rgba(20, 28, 25, 0.04)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            backgroundColor: "#ffffff",
            "&:hover fieldset": {
              borderColor: "#2d4a37",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2d4a37",
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
