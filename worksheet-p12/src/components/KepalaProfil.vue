<script setup>
defineProps({ profil: { type: Object, required: true }, navigasi: { type: Array, required: true } })
</script>
<template>
  <header class="navbar">
    <div class="header-baris">
      <h1 id="nama-halaman">Mie Goreng Saya</h1>
      <nav aria-label="Navigasi utama"><ul>
        <li v-for="item in navigasi" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
      </ul></nav>
      <div class="pengalih-tema-wrapper">
        <input v-model="temaGelap" type="checkbox" id="tema" class="pengalih-tema" />
        <label for="tema" class="tombol-tema">Tema gelap</label>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() { return { temaGelap: false } },
  watch: {
    temaGelap(value) {
      document.documentElement.classList.toggle('tema-gelap', value)
    }
  }
}
</script>
