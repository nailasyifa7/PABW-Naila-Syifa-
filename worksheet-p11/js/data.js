// Data mentah dan fungsi murni pemformat — dipisahkan dari DOM dan state.
export const profil = {
  nama: "Naila Syifa Wiharningtyas",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

export const daftarProyek = [
  { judul: "Halaman Profil Mie Goreng", kategori: "web", tahun: 2026 },
  { judul: "Tabel Menu Mie Goreng", kategori: "web", tahun: 2026 },
  { judul: "Analisis Daftar Menu", kategori: "data", tahun: 2026 }
];

export const daftarMieGoreng = [
  { nama: "Mie goreng biasa", bahan: "Telur", harga: 10000, tersedia: true },
  { nama: "Mie goreng spesial", bahan: "Sosis, telur, bakso", harga: 15000, tersedia: true },
  { nama: "Mie goreng seafood", bahan: "Udang, cumi, telur, kepiting", harga: 30000, tersedia: true }
];

export const navigasi = [
  { href: "#daftarmiegoreng-1", label: "Daftar Mie Goreng" },
  { href: "#tambahanmenu-2", label: "Tambahan Menu" },
  { href: "#proyek-p9", label: "Proyek" },
  { href: "#tentangsaya-3", label: "Tentang Saya" }
];

export function buatPerkenalan(data = profil) {
  return `Halaman ini dibuat oleh ${data.nama} untuk menampilkan menu mie goreng dan latihan proyek PABW.`;
}

export function formatKeahlian(daftar = profil.keahlian) {
  return daftar.join(", ");
}

export function formatRupiah(nilai) {
  return `Rp${Number(nilai).toLocaleString("id-ID")}`;
}
