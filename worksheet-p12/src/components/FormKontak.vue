<script setup>
import { ref } from 'vue'
const namaMie = ref('')
const bahan = ref('')
const harga = ref('')
const status = ref('')
function simpanMenu() {
  const namaSah = namaMie.value.trim().length >= 3
  const bahanSah = bahan.value.trim().length >= 3
  const hargaSah = /^[0-9.]+$/.test(harga.value.trim()) && harga.value.trim().replaceAll('.', '').length > 0
  if (!namaSah || !bahanSah || !hargaSah) {
    status.value = 'Periksa kembali nama, bahan, dan harga.'
    return
  }
  status.value = 'Data menu berhasil diperiksa dan siap disimpan!'
}
</script>
<template>
  <section id="tambahanmenu-2" class="kartu">
    <div class="kartu__isi">
      <h2>Tambahan Menu</h2>
      <form id="form-menu" @submit.prevent="simpanMenu">
        <div class="form-kolom"><label for="nama-mie-goreng">Nama mie goreng:</label><input id="nama-mie-goreng" v-model="namaMie" required minlength="3"><p class="pesan-galat">Nama mie goreng wajib diisi minimal 3 karakter.</p></div>
        <div class="form-kolom"><label for="bahan-utama">Bahan utama:</label><input id="bahan-utama" v-model="bahan" required minlength="3"><p class="pesan-galat">Bahan utama wajib diisi minimal 3 karakter.</p></div>
        <div class="form-kolom"><label for="harga">Harga:</label><input id="harga" v-model="harga" required pattern="[0-9.]+"><p class="pesan-galat">Harga wajib diisi menggunakan angka.</p></div>
        <button type="submit">Simpan</button><p role="status">{{ status }}</p>
      </form>
    </div><div class="kartu__kaki"><span>Form menu</span><span>Evaluasi input</span></div>
  </section>
</template>
