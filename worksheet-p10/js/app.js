
import { ambilNotisia } from './api.js';


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

const daftarMieGoreng = [
  { nama: "Mie goreng biasa", bahan: "Telur", harga: 10000, tersedia: true },
  { nama: "Mie goreng spesial", bahan: "Sosis, telur, bakso", harga: 15000, tersedia: true },
  { nama: "Mie goreng seafood", bahan: "Udang, cumi, telur, kepiting", harga: 30000, tersedia: true }
];

const navigasi = [
  { href: "#daftarmiegoreng-1", label: "Daftar Mie Goreng" },
  { href: "#tambahanmenu-2", label: "Tambahan Menu" },
  { href: "#proyek-p9", label: "Proyek" },
  { href: "#tentangsaya-3", label: "Tentang Saya" }
];
const navigasiHTML = navigasi.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("");
document.querySelector("#navigasi-utama").innerHTML = navigasiHTML;
document.querySelector("#menu-samping").innerHTML = navigasiHTML;
document.title = "Mie Goreng Saya";
document.querySelector("#judul-halaman").textContent = document.title;
document.querySelector("#nama-halaman").textContent = document.title;
document.querySelector("#judul-daftar-mie").textContent = "Daftar mie goreng";
document.querySelector("#keterangan-foto").textContent = "Contoh mie goreng";
document.querySelector("#tentang-saya").textContent = `Halaman ini dibuat oleh ${profil.nama} untuk menampilkan menu mie goreng dan latihan proyek PABW.`;
document.querySelector("#nama-footer").textContent = profil.nama;
document.querySelector("#peran-footer").textContent = profil.peran;
document.querySelector("#identitas-footer").textContent = `${profil.nama}, NIM: 25523193, 2026`;
document.querySelector("#jumlah-menu").textContent = `${daftarMieGoreng.length} menu`;
document.querySelector("#tabel-menu").innerHTML = daftarMieGoreng.map((mie) => `<tr><th scope="row">${mie.nama}</th><td>${mie.bahan}</td><td>Rp${mie.harga.toLocaleString("id-ID")}</td></tr>`).join("");



async function tampilkanDataAPI() {
  const pesan = document.querySelector("#pesan-api");
  const wadah = document.querySelector("#daftar-api");

  if (!pesan || !wadah) return;

  pesan.textContent = "Memuat data...";
  wadah.textContent = "";

  try {
    const hasil = await ambilNotisia();
    const daftar = Array.isArray(hasil) ? hasil : [hasil];

    if (daftar.length === 0) {
      pesan.textContent = "Belum ada data.";
      return;
    }

    daftar.forEach((item) => {
      const kartu = document.createElement("li");
      kartu.className = "kartu-proyek";

      const judul = document.createElement("h3");
      judul.textContent = item.title || item.titulu || item.nama || "Tanpa judul";
      kartu.appendChild(judul);

      const isi = document.createElement("p");
      isi.textContent = item.body || item.description || item.isi || "";
      kartu.appendChild(isi);

      wadah.appendChild(kartu);
    });

    pesan.textContent = "Data API berhasil dimuat.";
  } catch (galat) {
    pesan.textContent = "Gagal memuat data: " + galat.message;
  }
}

tampilkanDataAPI();

