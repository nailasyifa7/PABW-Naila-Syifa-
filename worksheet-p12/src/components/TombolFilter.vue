<script setup>
defineProps({ kategoriAktif: { type: String, required: true } })
const emit = defineEmits(['pilih', 'atur-ulang'])
const kategori = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'web', label: 'Web' },
  { nilai: 'data', label: 'Data' }
]
</script>
<template>
  <div>
    <div id="filter" aria-label="Filter kategori proyek">
      <button v-for="item in kategori" :key="item.nilai" type="button"
        :data-kategori="item.nilai" :class="{ aktif: kategoriAktif === item.nilai }"
        @click="emit('pilih', item.nilai)">{{ item.label }}</button>
      <button type="button" @click="emit('atur-ulang')">Atur ulang</button>
    </div>
  </div>
</template>
