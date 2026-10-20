import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { cariProduk } from "../data/products";

const CartContext = createContext(null);
const MAKS = 10;
const STORAGE_KEY = "wangi_lokal_cart_v1";

export function CartProvider({ children }) {
  // Load initial cart from localStorage
  const [items, setItems] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const tersimpan = localStorage.getItem(STORAGE_KEY);
      return tersimpan ? JSON.parse(tersimpan) : [];
    } catch {
      return [];
    }
  });

  const [kupon, setKupon] = useState(null);
  const [toast, setToast] = useState(null); // { id, pesan, tipe, subteks }

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // LocalStorage might be full or disabled, gracefully ignore
    }
  }, [items]);

  const tampilkanToast = (pesan, subteks = "", tipe = "sukses") => {
    const id = Date.now();
    setToast({ id, pesan, subteks, tipe });
  };

  const tutupToast = () => {
    setToast(null);
  };

  const tambah = (slug, qty = 1, triggerToast = true) => {
    const produk = cariProduk(slug);
    setItems((prev) => {
      const ada = prev.find((i) => i.slug === slug);
      if (ada) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: Math.min(MAKS, i.qty + qty) } : i
        );
      }
      return [...prev, { slug, qty: Math.min(MAKS, qty) }];
    });

    if (triggerToast && produk) {
      tampilkanToast(
        `${produk.nama} ditambahkan ke keranjang`,
        `${qty} botol · ${produk.ukuran} ml`
      );
    }
  };

  const ubahQty = (slug, qty) =>
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, qty: Math.min(MAKS, Math.max(1, qty)) } : i))
    );

  const hapus = (slug) => {
    const produk = cariProduk(slug);
    setItems((prev) => prev.filter((i) => i.slug !== slug));
    if (produk) {
      tampilkanToast(`${produk.nama} dihapus dari keranjang`, "", "info");
    }
  };

  const kosongkan = () => {
    setItems([]);
    setKupon(null);
  };

  const terapkanKupon = (kode) => {
    const sanitized = (kode || "").trim().toUpperCase();
    if (sanitized === "NUSANTARA" || sanitized === "WANGI10") {
      setKupon({ kode: sanitized, persen: 10, label: "Diskon 10% Spesial Nusantara" });
      tampilkanToast("Kupon diskon 10% berhasil dipasang!", "Kode: " + sanitized, "sukses");
      return { sukses: true, pesan: "Kupon 10% berhasil digunakan!" };
    } else if (sanitized === "ATELIER20") {
      setKupon({ kode: sanitized, persen: 20, label: "Diskon 20% Koleksi Eksklusif" });
      tampilkanToast("Kupon diskon 20% berhasil dipasang!", "Kode: " + sanitized, "sukses");
      return { sukses: true, pesan: "Kupon 20% berhasil digunakan!" };
    } else {
      return { sukses: false, pesan: "Kode kupon tidak valid. Coba 'NUSANTARA' atau 'WANGI10'." };
    }
  };

  const hapusKupon = () => {
    setKupon(null);
    tampilkanToast("Kupon diskon telah dilepas", "", "info");
  };

  const nilai = useMemo(() => {
    const detail = items
      .map((i) => ({ ...i, produk: cariProduk(i.slug) }))
      .filter((i) => i.produk);

    const subtotal = detail.reduce((n, i) => n + i.qty * i.produk.harga, 0);
    const diskon = kupon ? Math.round((subtotal * kupon.persen) / 100) : 0;
    const total = Math.max(0, subtotal - diskon);

    return {
      items: detail,
      jumlah: detail.reduce((n, i) => n + i.qty, 0),
      subtotal,
      diskon,
      total,
      kupon,
      tambah,
      ubahQty,
      hapus,
      kosongkan,
      terapkanKupon,
      hapusKupon,
      toast,
      tampilkanToast,
      tutupToast,
    };
  }, [items, kupon, toast]);

  return <CartContext.Provider value={nilai}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);

