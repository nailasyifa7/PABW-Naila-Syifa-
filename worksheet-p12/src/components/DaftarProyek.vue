<script setup>
import { computed } from 'vue'
const props = defineProps({
  daftarProyek: { type: Array, required: true },
  kategoriAktif: { type: String, required: true },
  urutanTampilan: { type: String, default: 'normal' }
})
const hasil = computed(() => {
  const data = props.daftarProyek.filter(p => props.kategoriAktif === 'semua' || p.kategori === props.kategoriAktif)
  return props.urutanTampilan === 'judul' ? [...data].sort((a,b) => a.judul.localeCompare(b.judul)) : data
})
</script>
<template>
  <ul id="daftar" class="daftar-proyek">
    <li v-for="proyek in hasil" :key="proyek.judul" class="kartu-proyek">{{ proyek.judul }} ({{ proyek.tahun }})</li>
  </ul>
  <p id="pesan-kosong" v-if="hasil.length === 0">Tidak ada proyek pada kategori itu.</p>
</template>
