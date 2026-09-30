# PABW-Naila-Syifa-25523193

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Topik halaman tetap **Mie Goreng Saya**, melanjutkan halaman Pertemuan 4.

### Perubahan P5
- Kerangka halaman memakai Grid: tiga baris `auto 1fr auto`.
- Area isi memakai Grid dua kolom: `16rem 1fr`.
- Navbar memakai Flex.
- Menu samping memakai Flex dalam arah kolom.
- Galeri memakai Grid `repeat(auto-fit, minmax(16rem, 1fr))` tanpa media query khusus galeri.
- Isi kartu memakai Flex pada bagian kaki kartu.
- Dua blok memakai penempatan `span`.
- Isi panjang ditangani dengan `min-width: 0` dan `overflow-wrap: anywhere`.
- Pengujian dilakukan pada target lebar 360 px dan 1.280 px.

### Urutan CSS
1. `tokens.css`
2. `base.css`
3. `layout.css`
4. `komponen.css`
5. `tema.css`

### Catatan
Konten utama, warna, dan design token dari Pertemuan 4 dipertahankan. Struktur HTML diberi kelas/wrapper yang diperlukan agar target layout pada Worksheet P5 dapat diterapkan.



## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #1D3A8C (biru), dipilih karena ...
 
### Token yang saya tetapkan
 
### A.1 Warna

Saya memilih warna biru sebagai warna utama halaman karena memberikan tampilan yang sederhana, jelas, dan konsisten pada halaman profil Mie Goreng.

| Token | Nilai saya | Untuk apa |
|---|---|---|
| --color-bg | #211A2E | Latar halaman |
| --color-fg | #F5F0FF | Warna teks utama |
| --color-surface | #30263F | Latar kartu dan panel, sedikit berbeda dari halaman |
| --color-border | #8B7FA3 | Garis pemisah dan tepi kotak |
| --color-primary | #7C3AED | Warna utama: tombol, tautan, penanda |
| --color-danger | #FF8FA3 | Peringatan dan isian yang tidak sah |
| --color-focus | #C4B5FD | Garis fokus papan ketik |


### A.2 Jarak, sudut, bayangan, dan ukuran huruf


| Token | Nilai saya | Dipakai untuk |
|---|---|---|
| --space-1 | 0.25rem | Jarak paling rapat, di dalam komponen |
| --space-2 | 0.5rem | Jarak antar label dan isian |
| --space-3 | 0.75rem | Jarak di dalam kartu |
| --space-4 | 1rem | Jarak standar antar elemen |
| --space-6 | 1.5rem | Jarak antar bagian halaman |
| --radius-md | 0.5rem | Sudut membulat pada tombol, kartu, dan isian |
| --radius-full | 999px | Bentuk pil, misalnya tombol tema |
| --shadow-1 | 0 1px 3px rgba(0,0,0,0.10) | Bayangan halus kartu |
| --text-sm | 0.875rem | Keterangan dan teks bantu |
| --text-md | 1rem | Teks isi |
| --text-xl | 1.5rem | Judul bagian |
| --text-3xl | 2.25rem | Judul halaman |
 

## Pertemuan 3 — Halaman profil saya
 
Topik halaman saya: Mie Goreng saya.
 
- Judul halaman: Mie Goreng Saya
- Deskripsi: Halaman saya ini berisi informasi tentang berbagai rasa mie goreng, bahan-bahan, dan cara membuatnya.
- Tautan navigasi: 1.	Daftar Mie Goreng      
                   2.	 Tambahan Menu 
                   3.	 Tentang Saya

- Dua bagian utama: Daftar Mie Goreng, Tambahan menu                              

- Kolom tabel: 1.	Nama Mie Goreng
               2.	Bahan Utama
               3.	Harga

- Kolom form: 1.	Nama Mie Goreng
              2.	Bahan Utama
              3.	Harga

- Gambar: Mie-goreng.webp
 
## Catatan penggunaan AI
 
Tulis bagian mana yang dibantu AI dan bagian mana yang Anda
kerjakan sendiri, atau tulis: tidak memakai AI.
