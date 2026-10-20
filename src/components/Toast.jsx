import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import styles from "./Toast.module.css";

export default function Toast() {
  const { toast, tutupToast } = useCart();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      tutupToast();
    }, 3800);
    return () => clearTimeout(timer);
  }, [toast, tutupToast]);

  if (!toast) return null;

  return (
    <aside className={styles.toast} role="status" aria-live="polite">
      <div className={styles.konten}>
        <div className={styles.ikon} aria-hidden="true">
          {toast.tipe === "sukses" ? "✓" : "ℹ"}
        </div>
        <div className={styles.teks}>
          <p className={styles.pesan}>{toast.pesan}</p>
          {toast.subteks && <p className={styles.subteks}>{toast.subteks}</p>}
        </div>
      </div>
      <div className={styles.aksi}>
        <Link to="/keranjang" className={styles.tombol} onClick={tutupToast}>
          Ke Keranjang
        </Link>
        <button
          type="button"
          className={styles.tutup}
          onClick={tutupToast}
          aria-label="Tutup notifikasi"
        >
          ✕
        </button>
      </div>
      <div className={styles.progress} aria-hidden="true" />
    </aside>
  );
}
