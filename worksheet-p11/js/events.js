// Semua pemasangan pendengar peristiwa berada di sini.
import { pilihKategori, aturUlang } from "./state.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");
    if (tombol) pilihKategori(tombol.dataset.kategori);
  });

  document.querySelector("#atur-ulang")?.addEventListener("click", aturUlang);

  // Validasi form: pesan per kolom, tanpa memuat ulang halaman.
  const form = document.querySelector("#form-menu");
  const kolom = [
    { input: document.querySelector("#nama-mie-goreng"), pesan: "Nama mie goreng wajib diisi minimal 3 karakter." },
    { input: document.querySelector("#bahan-utama"), pesan: "Bahan utama wajib diisi minimal 3 karakter." },
    { input: document.querySelector("#harga"), pesan: "Harga wajib diisi menggunakan angka." }
  ];
  const tombolKirim = form.querySelector('button[type="submit"]');

  function valid(item) {
    const nilai = item.input.value.trim();
    if (item.input.id === "harga") return /^[0-9.]+$/.test(nilai) && nilai.replaceAll(".", "").length > 0;
    return nilai.length >= 3;
  }

  kolom.forEach((item) => {
    item.node = item.input.parentElement.querySelector(".pesan-galat");
    item.node.hidden = true;
    item.input.addEventListener("input", () => {
      const sah = valid(item);
      item.input.setAttribute("aria-invalid", String(!sah));
      item.node.textContent = sah ? "" : item.pesan;
      item.node.hidden = sah;
      tombolKirim.disabled = !kolom.every(valid);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const hasil = kolom.map((item) => {
      const sah = valid(item);
      item.input.setAttribute("aria-invalid", String(!sah));
      item.node.textContent = sah ? "" : item.pesan;
      item.node.hidden = sah;
      return sah;
    });
    if (!hasil.every(Boolean)) {
      kolom[hasil.indexOf(false)].input.focus();
      return;
    }
    alert("Data menu berhasil diperiksa dan siap disimpan!");
  });
}
