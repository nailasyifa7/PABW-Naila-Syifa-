import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu-proyek";
  li.textContent = `${proyek.judul} (${proyek.tahun})`;
  return li;
}

function render(daftar) {
  wadah.textContent = "";
  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;
  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter((proyek) => kategori === "semua" || proyek.kategori === kategori);
  tandaiTombolAktif(tombol);
  render(terpilih);
});


const form = document.querySelector("#form-menu");
const kolom = [
  { input: document.querySelector("#nama-mie-goreng"), pesan: "Nama menu wajib diisi minimal 3 karakter." },
  { input: document.querySelector("#bahan-utama"), pesan: "Bahan utama wajib diisi minimal 3 karakter." },
  { input: document.querySelector("#harga"), pesan: "Harga wajib diisi dengan angka." }
];
const tombolKirim = form.querySelector('button[type="submit"]');

function periksaKolom(item) {
  const nilai = item.input.value.trim();
  let sah = nilai.length >= 3;
  if (item.input.id === "harga") sah = /^[0-9.]+$/.test(nilai) && nilai.replaceAll(".", "").length > 0;
  item.input.setAttribute("aria-invalid", String(!sah));
  item.pesan.textContent = sah ? "" : item.pesanAwal;
  item.pesan.hidden = sah;
  return sah;
}
kolom.forEach((item) => {
  item.pesanAwal = item.pesan;
  item.node = item.input.parentElement.querySelector(".pesan-galat");
  item.node.textContent = item.pesanAwal;
  item.node.hidden = true;
  item.input.addEventListener("input", () => {
    const nilai = item.input.value.trim();
    let sah = nilai.length >= 3;
    if (item.input.id === "harga") sah = /^[0-9.]+$/.test(nilai) && nilai.replaceAll(".", "").length > 0;
    item.input.setAttribute("aria-invalid", String(!sah));
    item.node.textContent = sah ? "" : item.pesanAwal;
    item.node.hidden = sah;
    tombolKirim.disabled = !kolom.every((k) => {
      const v = k.input.value.trim();
      return k.input.id === "harga" ? /^[0-9.]+$/.test(v) && v.replaceAll(".", "").length > 0 : v.length >= 3;
    });
  });
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const hasil = kolom.map((item) => {
    const nilai = item.input.value.trim();
    let sah = nilai.length >= 3;
    if (item.input.id === "harga") sah = /^[0-9.]+$/.test(nilai) && nilai.replaceAll(".", "").length > 0;
    item.input.setAttribute("aria-invalid", String(!sah));
    item.node.textContent = sah ? "" : item.pesanAwal;
    item.node.hidden = sah;
    return sah;
  });
  if (!hasil.every(Boolean)) {
    kolom[hasil.indexOf(false)].input.focus();
    return;
  }
  alert("Data menu berhasil diperiksa dan siap disimpan!");
});

render(daftarProyek);
