import { reactive } from 'vue'
import { daftarProyek } from './data.js'
import { muat, simpan } from './simpanan.js'

const NILAI_BAWAAN = { kategoriAktif: 'semua', urutanTampilan: 'normal' }
const tersimpan = muat()

export const state = reactive({
  daftarProyek,
  kategoriAktif: tersimpan?.kategoriAktif ?? NILAI_BAWAAN.kategoriAktif,
  urutanTampilan: tersimpan?.urutanTampilan ?? NILAI_BAWAAN.urutanTampilan
})

export function pilihKategori(nilai) {
  if (!['semua', 'web', 'data'].includes(nilai)) return
  state.kategoriAktif = nilai
}

export function aturUlang() {
  state.kategoriAktif = NILAI_BAWAAN.kategoriAktif
  state.urutanTampilan = NILAI_BAWAAN.urutanTampilan
}
