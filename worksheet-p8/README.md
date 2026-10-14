# PABW — Naila Syifa Wiharningtyas — 25523193

## Pertemuan 6 — Responsif Mobile-First

Melanjutkan halaman **Mie Goreng Saya** dari Pertemuan 5.

### Perubahan P6
- Baris meta viewport terpasang di `profil.html`.
- Berkas baru `responsif.css`: gaya dasar satu kolom, lalu dua titik henti `min-width` (`48rem`, `60rem`).
- Aturan kolom `.isi` dan `.galeri` serta penempatan `.sorotan`/`.papan` dipindah dari `layout.css` dan `komponen.css` ke `responsif.css`.
- Gambar dibatasi `max-width: 100%` (base.css), tabel lebar dalam `.tabel-wrapper` dengan `overflow-x: auto` (layout.css).

### Hasil uji
| Lebar | Kolom galeri | Kolom isi |
| --- | --- | --- |
| 360 px | 1 | 1 |
| 768 px | 2 | 1 |
| 1 280 px | 3 | 2 (sidebar bersanding) |

### Urutan CSS
tokens, base, layout, komponen, tema, responsif
