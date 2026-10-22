// Semua operasi DOM dan render tampilan berada di berkas ini.
import { profil, daftarProyek, daftarMieGoreng, navigasi, buatPerkenalan, formatKeahlian, formatRupiah } from "./data.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function isiNavigasi() {
  const html = navigasi.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("");
  document.querySelector("#navigasi-utama").innerHTML = html;
  document.querySelector("#menu-samping").innerHTML = html;
}

function isiHalamanProfil() {
  document.title = "Mie Goreng Saya";
  document.querySelector("#judul-halaman").textContent = document.title;
  document.querySelector("#nama-halaman").textContent = document.title;
  document.querySelector("#judul-daftar-mie").textContent = "Daftar mie goreng";
  document.querySelector("#keterangan-foto").textContent = "Contoh mie goreng";
  document.querySelector("#tentang-saya").textContent = buatPerkenalan(profil);
  document.querySelector("#nama-footer").textContent = profil.nama;
  document.querySelector("#peran-footer").textContent = `${profil.peran} · ${formatKeahlian()}`;
  document.querySelector("#identitas-footer").textContent = `${profil.nama}, NIM: 25523193, 2026`;
  document.querySelector("#jumlah-menu").textContent = `${daftarMieGoreng.length} menu`;
  document.querySelector("#tabel-menu").innerHTML = daftarMieGoreng.map((mie) =>
    `<tr><th scope="row">${mie.nama}</th><td>${mie.bahan}</td><td>${formatRupiah(mie.harga)}</td></tr>`
  ).join("");
}

export function saring(keadaan) {
  return daftarProyek.filter((proyek) =>
    keadaan.kategoriAktif === "semua" || proyek.kategori === keadaan.kategoriAktif
  );
}

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu-proyek";
  li.textContent = `${proyek.judul} (${proyek.tahun})`;
  return li;
}

export function render(keadaan) {
  wadah.textContent = "";
  const tampil = saring(keadaan);
  if (tampil.length === 0) {
    kosong.hidden = false;
  } else {
    kosong.hidden = true;
    tampil.forEach((proyek) => wadah.append(buatKartu(proyek)));
  }
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === keadaan.kategoriAktif);
  });
}

export function siapkanTampilan() {
  isiNavigasi();
  isiHalamanProfil();
}
