# PABW P12 — Proyek Vue + Vite 

- `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`, `responsif.css` disalin apa adanya.
- `data.js` dan `api.js` disesuaikan untuk struktur proyek Vite; endpoint data menjadi `/data.json`.
- `mie.jpg` dan `data.json` dipindahkan ke `public/`.
- Empat komponen Vue ada di `src/components/`.
- `state.js` menggunakan `reactive()`, sedangkan `simpanan.js` menangani `localStorage` dengan kunci `pabw-p11`.

## Jalankan di PowerShell (karena npm.ps1 kamu diblokir)
1. Ekstrak ZIP.
2. Buka folder `worksheet-p12` yang di dalamnya ada `package.json`.
3. Jalankan:
   ```powershell
   npm.cmd install
   npm.cmd run dev
   ```
4. Buka URL yang muncul di terminal.

## Build dan preview
```powershell
npm.cmd run build
npm.cmd run preview
```


