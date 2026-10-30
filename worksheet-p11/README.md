# Worksheet P11 — Modul, State, dan Penyimpanan Klien

Proyek ini melanjutkan halaman profil P9. Lima modul wajib P11 dipisahkan berdasarkan tanggung jawab, dan `js/api.js` dari P10 dipertahankan apa adanya sebagai berkas tambahan.

## Menjalankan
1. Buka folder `worksheet-p11` di VS Code.
2. Jalankan `profil.html` melalui Live Server (jangan dibuka sebagai `file://`).
3. Uji filter **Semua**, **Web**, dan **Data**.
4. 5. Tekan **Atur ulang pilihan** untuk menghapus pilihan tersimpan dan kembali ke nilai bawaan.
6. Buka DevTools → Console dan pastikan tidak ada galat.

## Pembagian modul
- `js/data.js`: data profil, proyek, menu, navigasi, dan fungsi pemformat murni.
- `js/state.js`: satu objek `state`, fungsi perubahan, serta penyimpanan/muat `localStorage` dengan JSON dan nomor versi.
- `js/dom.js`: pembentukan tampilan dan `render(state)`.
- `js/events.js`: pemasangan pendengar peristiwa dan validasi form.
- `js/app.js`: perakit yang mengimpor modul dan memulai aplikasi.
- `js/api.js`: berkas tambahan dari P10, dipertahankan terpisah dan bukan salah satu dari lima modul wajib.


