/* Bagian ini mengatur tampilan. Biasanya tidak perlu diubah. */
const $ = id => document.getElementById(id);
const rp = n => "Rp" + Number(n || 0).toLocaleString("id-ID");
const wa = teks => "https://wa.me/" + String(TOKO.whatsapp).replace(/\D/g, "") + "?text=" + encodeURIComponent(teks);
let aktif = "Semua";

function sepatu(warna) {
  return '<svg viewBox="0 0 200 130" aria-hidden="true"><path d="M14 92c0-8 4-14 10-18l22-14c6-4 10-12 10-20V30c0-5 6-8 10-5l30 26c4 4 10 6 16 6h32c20 0 40 14 40 32v8c0 4-3 7-7 7H21c-4 0-7-3-7-7z" fill="' + warna + '"/><path d="M14 99h172v8c0 3-3 6-6 6H20c-3 0-6-3-6-6z" fill="rgba(0,0,0,.25)"/><path d="M60 38l26 22" stroke="rgba(255,255,255,.7)" stroke-width="4" stroke-linecap="round" fill="none"/></svg>';
}

function tampilToko() {
  $("nama").textContent = TOKO.nama;
  $("judul").textContent = TOKO.judul;
  $("sub").textContent = TOKO.sub;
  $("alamat").textContent = TOKO.alamat;
  $("jam").textContent = TOKO.jam;
  $("ig").textContent = "Instagram: " + TOKO.instagram;
  $("tiktok").textContent = TOKO.tiktok ? "TikTok: " + TOKO.tiktok : "";
    const ha = $("heroArt");
  if (TOKO.fotoUtama) {
    const im = document.createElement("img");
    im.alt = TOKO.nama;
    im.onerror = () => { ha.classList.remove("ada-foto"); ha.innerHTML = sepatu("#fff"); };
    im.src = TOKO.fotoUtama;
    ha.classList.add("ada-foto");
    ha.appendChild(im);
  } else {
    ha.innerHTML = sepatu("#fff");
  };
  $("waTop").href = wa("Halo " + TOKO.nama + ", saya mau tanya soal sepatu.");
  document.title = TOKO.nama + " – Sepatu Wanita";
  TOKO.keunggulan.forEach(k => {
    const d = document.createElement("div"), h = document.createElement("h3"), p = document.createElement("p");
    h.textContent = k.judul; p.textContent = k.isi; d.append(h, p); $("about").appendChild(d);
  });
}

function tampilFilter() {
  const kat = ["Semua", ...new Set(PRODUK.map(p => p.kategori))];
  const f = $("filters"); f.innerHTML = "";
  kat.forEach(k => {
    const b = document.createElement("button");
    b.className = "chip"; b.type = "button"; b.textContent = k;
    b.setAttribute("aria-pressed", String(k === aktif));
    b.onclick = () => { aktif = k; tampilFilter(); tampilProduk(); };
    f.appendChild(b);
  });
}

function tampilProduk() {
  const g = $("grid"); g.innerHTML = "";
  PRODUK.filter(p => aktif === "Semua" || p.kategori === aktif).forEach(p => {
    const c = document.createElement("article"); c.className = "card";
    c.innerHTML = '<div class="thumb"></div><div class="info"><h3></h3><div class="price"></div><p class="desc"></p><div class="swatches"></div><div class="row"><select aria-label="Pilih ukuran"></select><a class="btn" href="#" target="_blank" rel="noopener">Pesan</a></div></div>';
    const th = c.querySelector(".thumb"), sw = c.querySelector(".swatches");
    const sel = c.querySelector("select"), a = c.querySelector("a");
    const varian = p.varian || [];
    let pilih = varian[0] || null;

    const ilustrasi = () => {
      const w = (pilih && pilih.warna) || p.warna || "#e8b4c8";
      th.innerHTML = sepatu(w); th.style.background = w + "33";
    };
    const foto = () => {
      th.innerHTML = ""; th.style.background = "";
      const src = (pilih && pilih.foto) || p.foto;
      if (src) {
        const im = document.createElement("img");
        im.alt = p.nama + (pilih ? " " + pilih.nama : "");
        im.onerror = ilustrasi; im.src = src; th.appendChild(im);
      } else ilustrasi();
    };
    const pesan = () => {
      a.href = wa("Halo " + TOKO.nama + ", saya mau pesan " + p.nama +
        (pilih ? " warna " + pilih.nama : "") + " ukuran " + sel.value + " (" + rp(p.harga) + ").");
    };

    c.querySelector("h3").textContent = p.nama;
    c.querySelector(".desc").textContent = p.deskripsi || "";
    const pr = c.querySelector(".price"); pr.textContent = rp(p.harga);
    if (p.hargaCoret > 0) { const o = document.createElement("span"); o.className = "old"; o.textContent = rp(p.hargaCoret); pr.appendChild(o); }
    p.ukuran.forEach(u => { const o = document.createElement("option"); o.value = u; o.textContent = u; sel.appendChild(o); });

    if (varian.length) {
      const label = document.createElement("span"); label.className = "warna-nama"; label.textContent = pilih.nama;
      const tombol = varian.map(v => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "sw"; b.style.background = v.warna;
        b.title = v.nama; b.setAttribute("aria-label", "Warna " + v.nama);
        b.setAttribute("aria-pressed", String(v === pilih));
        b.onclick = () => {
          pilih = v; label.textContent = v.nama;
          tombol.forEach(t => t.setAttribute("aria-pressed", String(t === b)));
          foto(); pesan();
        };
        sw.appendChild(b); return b;
      });
      sw.appendChild(label);
    }

    sel.onchange = pesan;
    foto(); pesan();
    g.appendChild(c);
  });
}

tampilToko(); tampilFilter(); tampilProduk();