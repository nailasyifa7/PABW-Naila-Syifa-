<script setup>
import { computed, onMounted, watch, ref } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil, daftarMieGoreng, navigasi, buatPerkenalan, formatKeahlian, formatRupiah } from './data.js'
import { state, pilihKategori, aturUlang } from './state.js'
import { simpan, aturUlangSimpanan } from './simpanan.js'
import { ambilNotisia } from './api.js'

const identitas = profil
const jumlahMenu = computed(() => daftarMieGoreng.length)
const dataApi = ref('')
const galatApi = ref('')
watch(() => [state.kategoriAktif, state.urutanTampilan], () => simpan(state), { deep: true })
function resetPilihan() {
  aturUlangSimpanan()
  aturUlang()
}
async function cekApi() {
  try {
    const hasil = await ambilNotisia()
    dataApi.value = hasil.title || 'Data API berhasil dimuat.'
    galatApi.value = ''
  } catch {
    galatApi.value = 'Data API tidak berhasil dimuat. Pastikan server menyajikan data.json.'
  }
}
onMounted(() => {
  cekApi() 
  })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="identitas" :navigasi="navigasi" />
    <div class="isi">
      <aside class="sisi">
        <h2>Menu</h2>
        <nav aria-label="Menu samping"><ul class="menu-samping">
          <li v-for="item in navigasi" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
        </ul></nav>
      </aside>
      <main class="utama">
        <section id="daftarmiegoreng-1">
          <h2>Daftar Bahan</h2>
          <div class="galeri">
            <article class="kartu sorotan">
              <div class="kartu__isi">
                <h3 id="judul-daftar-mie">Daftar mie goreng</h3>
                <div class="tabel-wrapper"><table>
                  <caption>Daftar mie goreng</caption>
                  <thead><tr><th scope="col">Nama mie goreng</th><th scope="col">Bahan utama</th><th scope="col">Harga</th></tr></thead>
                  <tbody>
                    <tr v-for="mie in daftarMieGoreng" :key="mie.nama">
                      <th scope="row">{{ mie.nama }}</th><td>{{ mie.bahan }}</td><td>{{ formatRupiah(mie.harga) }}</td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
              <div class="kartu__kaki"><span>Daftar mie goreng</span><span>{{ jumlahMenu }} menu</span></div>
            </article>
            <article class="kartu papan">
              <div class="kartu__isi"><h3>Contoh mie goreng</h3>
                <figure><img src="/mie.jpg" alt="Mie goreng" width="300" height="360" loading="lazy"><figcaption>Contoh mie goreng</figcaption></figure>
              </div><div class="kartu__kaki"><span>Mie goreng</span><span>Foto</span></div>
            </article>
          </div>
        </section>
        <FormKontak />
        <section id="proyek-p9" class="kartu">
          <div class="kartu__isi">
            <h2>Proyek Saya</h2>
            <TombolFilter :kategori-aktif="state.kategoriAktif" @pilih="pilihKategori" @atur-ulang="resetPilihan" />
            <DaftarProyek :daftar-proyek="state.daftarProyek" :kategori-aktif="state.kategoriAktif" :urutan-tampilan="state.urutanTampilan" />
          </div>
        </section>
        <section id="tentangsaya-3" class="kartu">
          <div class="kartu__isi"><h2>Tentang Saya</h2><p>{{ buatPerkenalan(profil) }}</p></div>
          <div class="kartu__kaki"><span>{{ profil.nama }}</span><span>{{ profil.peran }} · {{ formatKeahlian() }}</span></div>
        </section>
        <p id="pesan-api" role="status">{{ dataApi }} {{ galatApi }}</p>
      </main>
    </div>
    <footer><p>{{ profil.nama }}, NIM: 25523193, 2026</p></footer>
  </div>
</template>
