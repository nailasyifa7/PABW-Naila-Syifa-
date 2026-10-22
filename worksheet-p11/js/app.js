// Perakit aplikasi: mengimpor modul dan menjalankan inisialisasi.
import { state } from "./state.js";
import { render, siapkanTampilan } from "./dom.js";
import { pasangPendengar } from "./events.js";

// api.js dari P10 dipertahankan terpisah dan tidak dihitung sebagai modul wajib P11.
siapkanTampilan();
pasangPendengar();
render(state);
