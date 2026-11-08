/* ==========================================================
   FILE INI SATU-SATUNYA YANG PERLU ANDA EDIT.
   Simpan (Ctrl+S) lalu halaman di browser ikut berubah.
   ========================================================== */

const TOKO = {
  nama: "Arabella",
  fotoUtama: "images/banner.jpg",
  judul: "Sepatu Kulit Sapi Asli 100%",
  sub: "Dari flat untuk kerja sampai heels untuk acara. Pilih ukuranmu, lalu pesan langsung lewat WhatsApp.",
  whatsapp: "6287880846809",   // 62 + nomor tanpa angka 0 di depan
  alamat: "ITC Mangga Dua Lt.4 Blok C No.33-34",
  jam: "Buka setiap hari, 09.00–18.00 WIB",
  instagram: "@arabellafashiondiaries",
  tiktok: "@arabellafashiondiaries",
  keunggulan: [
    { judul: "Ukuran lengkap", isi: "Tersedia ukuran 35 sampai 43 untuk sebagian besar model." },
    { judul: "Kirim ke seluruh Indonesia", isi: "Dikemas rapi dan dikirim dengan aman." },
    { judul: "Tukar ukuran", isi: "Tidak pas? Tukar ukuran dalam 3 hari selama sepatu belum dipakai." }
  ]
};

/* Satu blok { ... } = satu sepatu.
   - foto: nama file di folder "images", contoh "images/flat-kirana.jpg".
           Kosongkan ("") kalau belum ada foto.
   - hargaCoret: isi 0 kalau tidak ada diskon.
   - varian: (opsional) daftar warna, lihat contoh di produk Wedges.
   - Untuk menambah sepatu: salin satu blok, tempel di bawahnya, ganti isinya.
   - Untuk menghapus: hapus satu blok.
   - Jangan lupa koma (,) di antara blok. */
const PRODUK = [
 { nama: "Arabella-2361 Flowers Wedge 4cm ", kategori: "Wedges", harga: 450000, hargaCoret: 532000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/2361.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
      { nama: "Hijau", warna: "#667C4D", foto: "" },
      { nama: "Chili Red",  warna: "#FF2F00", foto: "" },
    ] },
   
    { nama: "Arabella-N1666 Block Heel 3cm", kategori: "Heels", harga: 430000, hargaCoret: 490000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/N166.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Champagne", warna: "#FAEEC8", foto: "" },
      { nama: "Dark Pewter Metallic",  warna: "#6d6b6b", foto: "" },
    ] },

  { nama: "Arabella-7023 Leather Flatshoes ", kategori: "Flat", harga: 455000, hargaCoret: 525000,
    ukuran: [35,36,37,38,39,40,41], note: "size besar, disarankan untu turun 1 nomor.",
    foto: "images/7023.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
      { nama: "Kuning",  warna: "#FDC607", foto: "" },
    ] },

  { nama: "Arabella-CL8801 Flower Ribbon Flat Leather", kategori: "Flat", harga: 415000, hargaCoret: 469000,
    ukuran: [35,36,37,38,39,40,41,42,43], 
    foto: "images/8801.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
      { nama: "Nude",  warna: "#CCB3A3", foto: "" },
    ] },

  { nama: "Arabella-A9853-1 Flower Block Heel 3,5cm", kategori: "Heels", harga: 440000, hargaCoret: 504000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/A9853-1.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
    ] },

      { nama: "Arabella-888 Leather Low Wedge 2,5cm", kategori: "Flat", harga: 405000, hargaCoret: 455000,
    ukuran: [35,36,37,38,39,40,41,42], 
    foto: "images/888.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
    ] },

   { nama: "Arabella-2560 Flower Cap-Toe Block Heel 3,5cm", kategori: "Heels", harga: 440000, hargaCoret: 504000,
    ukuran: [35,36,37,38,39,40,41,], 
    foto: "images/2560.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
    ] },    

   { nama: "Arabella-50891 Leather Flat 2,5cm", kategori: "Flat", harga: 415000, hargaCoret: 469000,
    ukuran: [35,36,37,38,39,40,41,42,43], 
    foto: "images/50891.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
      { nama: "Grey", warna: "#e8ebea"},
    ] },     

   { nama: "Arabella-1088 Leather Flower Mule Sandal Open Toe 5cm", kategori: "Sandal", harga: 445000, hargaCoret: 511000,
    ukuran: [35,36,37,38,39,40], 
    foto: "images/1088.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Tan",  warna: "#DAA250", foto: "" },
      { nama: "Hijau", warna: "#77815C"}
    ] }, 

   { nama: "Arabella-6359-1 Flower Leather Block Heel 3cm", kategori: "Heels", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/6359-1.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Nude",  warna: "#a86b3c", foto: "" },
    ] },      

  { nama: "Arabella-50266-8 Loafer Leather 2cm", kategori: "Loafers", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/50266-8.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Kuning Lime", warna: "#CBB337", foto: "" },
      { nama: "Coklat",  warna: "#D35400", foto: "" },
    ] },      

   { nama: "Arabella-7667 Leather Strap Sandal", kategori: "Sandal", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/7667.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Beige",  warna: "#EDE8D0", foto: "" },
      { nama: "Khaki",  warna: "#997950", foto: "" },
    ] },      
    
   { nama: "Arabella-20279 Wallabee Leather", kategori: "Lace Up", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/20279.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Tan",  warna: "#b5651d", foto: "" },
    ] },         

  { nama: "Arabella-98582 Lace Up Leather ", kategori: "Lace Up", harga: 460000, hargaCoret: 532000,
    ukuran: [35,36,37,38,39,40,41,42,43], 
    foto: "images/98582.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
    ] },  

  { nama: "Arabella-2577 Maryjane Round Toe 3cm  ", kategori: "Flat", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/2577.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Merah",  warna: "#b3201f", foto: "" },
    ] },  
    
  { nama: "Arabella-6583 Strap Flower Block Heels 5cm  ", kategori: "Heels", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40], 
    foto: "images/6583.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Nude", warna: "#CCB3A3", foto: "" },
      { nama: "Merah",  warna: "#b3201f", foto: "" },
    ] },  

  { nama: "Arabella-6016 Maryjane Round Toe 4cm", kategori: "Flat", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/6016.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Beige",  warna: "#EDE8D0", foto: "" },
    ] },    

  { nama: "Arabella-663 Leather Flower Flat", kategori: "Flat", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/663.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Tan", warna: "#b5651d", foto: "" },
      { nama: "Beige",  warna: "#EDE8D0", foto: "" },
      { nama: "Merah",  warna: "#b3201f", foto: "" },
      { nama: "Nude",  warna: "#F7D9BC", foto: "" },
    ] },   

  { nama: "Arabella-9231 Maryjane Round Toe 3cm", kategori: "Flat", harga: 460000, hargaCoret: 532000,
    ukuran: [35,36,37,38,39,40,41,42,43], 
    foto: "images/9231.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Grey", warna: "#E8EBEA", foto: "" },
      { nama: "Coklat",  warna: "#8b4a22", foto: "" },
    ] },     

  { nama: "Arabella-9029-S Leather Bell Sandal 3cm ", kategori: "Sandal", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41,42,43], 
    foto: "images/9029-S.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Tan",  warna: "#b5651d", foto: "" },
    ] },     

  { nama: "Arabella-8005 Flower Mule Sandal Block Heel 5,5cm ", kategori: "Sandal", harga: 440000, hargaCoret: 504000,
    ukuran: [35,36,37,38,39,40,41], 
    foto: "images/8005.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Tan",  warna: "#b5651d", foto: "" },
    ] },      

  { nama: "Arabella-98581 Flowers Leather Flatshoes", kategori: "Flat", harga: 450000, hargaCoret: 518000,
    ukuran: [35,36,37,38,39,40,41],
    foto: "images/98581.jpg", warna: "#e8b4c8",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Merah",  warna: "#b3201f", foto: "" },
      { nama: "Beige",  warna: "#EDE8D0", foto: "" },
      { nama: "Nude",  warna: "#CCB3A3", foto: "" },
    ] },

  { nama: "Arabella-2167 Flowers Slingback Open Toe Leather Block Heel Sandal 6cm",  kategori: "Sandal",    harga: 450000, hargaCoret: 518000,      
    ukuran: [35,36,37,38,39,40],       foto: "images/2167.jpg", warna: "#c9b6e4" ,
  varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Merah",  warna: "#b3201f", foto: "" }
    ] },

  { nama: "Arabella-A9853-1 Flower Block Heel 3,5cm", kategori: "Heels",   harga: 440000, hargaCoret: 504000,
    ukuran: [35,36,37,38,39,40,41],         foto: "images/A9853-1.jpg", warna: "#f2c9a0" ,
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Beige",  warna: "#EDE8D0", foto: "" }
    ]},

  { nama: "Arabella-6660 Maryjane Leather 5cm",     kategori: "Heels",     harga: 515000, hargaCoret: 609000,
    ukuran: [35,36,37,38,39,40,41,42],     foto: "images/6660.jpg", warna: "#b7c4e8",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Apricot",  warna: "#FFFDD0", foto: "" }
    ]},

  { nama: "Arabella-9888N Wedges 7cm", kategori: "Wedges", harga: 460000, hargaCoret: 532000,
    ukuran: [35,36,37,38,39,40],
    foto: "images/9888N.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Coklat", warna: "#8b4a22", foto: "" },
      { nama: "Merah",  warna: "#b3201f", foto: "" }
    ] },

 { nama: "Arabella-9228 Flower Leather Block Heel 3cm ", kategori: "Heels", harga: 420000, hargaCoret: 476000,
    ukuran: [35,36,37,38,39,40,41],
    foto: "images/9228.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Nude",  warna: "#CCB3A3", foto: "" }
    ] },

{ nama: "Arabella-2238-1 Leather Wedge 5,5cm ", kategori: "Wedges", harga: 565000, hargaCoret: 679000,
    ukuran: [35,36,37,38,39,40,41],
    foto: "images/2238-1.jpg", warna: "#e9a3a3",
    varian: [
      { nama: "Hitam",  warna: "#1a1a1a", foto: "" },
      { nama: "Beige", warna: "#EDE8D0", foto: "" },
      { nama: "Khaki",  warna: "#F0E68C", foto: "" }
    ] },
];
