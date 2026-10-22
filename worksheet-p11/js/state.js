// Satu sumber keadaan aplikasi. Perubahan state dilakukan melalui fungsi di berkas ini.
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;
const NILAI_BAWAAN = { kategoriAktif: "semua", urutanTampilan: "normal" };

export const state = { ...NILAI_BAWAAN };

export function simpan(keadaan = state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: keadaan.kategoriAktif,
    urutanTampilan: keadaan.urutanTampilan
  };
  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch (galat) {
    // Halaman tetap berjalan jika penyimpanan browser tidak tersedia.
    console.warn("Pilihan tidak dapat disimpan di browser.", galat);
  }
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);
    if (teks === null) return null;
    const isi = JSON.parse(teks);
    const kategoriSah = ["semua", "web", "data"].includes(isi?.kategoriAktif);
    const urutanSah = ["normal", "judul"].includes(isi?.urutanTampilan);
    if (isi?.versi !== VERSI || !kategoriSah || !urutanSah) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    // Simpanan rusak dibuang dan nilai bawaan digunakan.
    try { localStorage.removeItem(KUNCI); } catch { /* abaikan jika storage tidak tersedia */ }
    return null;
  }
}

export function pilihKategori(nilai) {
  if (!["semua", "web", "data"].includes(nilai)) return;
  state.kategoriAktif = nilai;
  simpan();
  render(state);
}

export function aturUlang() {
  try { localStorage.removeItem(KUNCI); } catch { /* nilai bawaan tetap diterapkan */ }
  Object.assign(state, NILAI_BAWAAN);
  render(state);
}

const tersimpan = muat();
if (tersimpan) Object.assign(state, {
  kategoriAktif: tersimpan.kategoriAktif,
  urutanTampilan: tersimpan.urutanTampilan
});
