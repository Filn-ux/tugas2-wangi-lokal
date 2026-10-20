import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Beranda from "./pages/Beranda.jsx";
import Koleksi from "./pages/Koleksi.jsx";
import DetailProduk from "./pages/DetailProduk.jsx";
import Keranjang from "./pages/Keranjang.jsx";
import Tentang from "./pages/Tentang.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Beranda />} />
        <Route path="koleksi" element={<Koleksi />} />
        {/* Parameter URL dinamis: kategori & slug produk */}
        <Route path="koleksi/:kategori" element={<Koleksi />} />
        <Route path="produk/:slug" element={<DetailProduk />} />
        <Route path="keranjang" element={<Keranjang />} />
        <Route path="tentang" element={<Tentang />} />
        {/* Fallback 404 untuk semua rute yang tidak dikenal */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
