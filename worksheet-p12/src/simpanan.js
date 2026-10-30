const KUNCI = 'pabw-p11'
const VERSI = 2
const KATEGORI_SAH = ['semua', 'web', 'data']
const URUTAN_SAH = ['normal', 'judul']

export function simpan(keadaan) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify({
      versi: VERSI,
      kategoriAktif: keadaan.kategoriAktif,
      urutanTampilan: keadaan.urutanTampilan
    }))
  } catch (galat) {
    console.warn('Pilihan tidak dapat disimpan di browser.', galat)
  }
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI)
    if (teks === null) return null
    const isi = JSON.parse(teks)
    if (isi?.versi !== VERSI ||
        !KATEGORI_SAH.includes(isi?.kategoriAktif) ||
        !URUTAN_SAH.includes(isi?.urutanTampilan)) {
      localStorage.removeItem(KUNCI)
      return null
    }
    return isi
  } catch {
    try { localStorage.removeItem(KUNCI) } catch { /* storage mungkin tidak tersedia */ }
    return null
  }
}

export function aturUlangSimpanan() {
  try { localStorage.removeItem(KUNCI) } catch { /* abaikan */ }
}
