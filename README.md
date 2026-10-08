# KawanuaTech — Landing Page

Landing page satu halaman untuk KawanuaTech, tim developer dari Manado.
Dibangun dengan **Next.js 16 + React 19 + Tailwind v4 + Motion**, dengan
`output: "export"` sehingga bisa dideploy sebagai file statis ke hosting mana saja.

## Menjalankan

```bash
npm install
npm run dev      # mode pengembangan di http://localhost:3000
npm run build    # build statis, hasil di folder /out
```

Deploy: unggah isi folder `out/` ke hosting statis (Vercel, Netlify, cPanel, dll).

## Yang HARUS diganti sebelum publikasi (semua ditandai `PLACEHOLDER`)

| Berkas | Isi |
|---|---|
| `site.config.ts` | Nomor WhatsApp, email, nomor telepon, alamat, link sosial media |
| `content/projects.ts` | 3 proyek contoh. Ganti dengan proyek asli + screenshot asli. Jangan tampilkan proyek yang tidak pernah dikerjakan. |
| `components/Hero.tsx` | Foto tim (kanan hero). Ganti dengan foto asli tim bekerja. Ini gambar paling berpengaruh di seluruh halaman. |
| `components/WhyUs.tsx` | Foto suasana kerja/kantor di Manado. |
| `components/Services.tsx` | Gambar latar kartu "Website Company Profile". |

Semua gambar saat ini memakai placeholder dari `picsum.photos` dengan seed
deskriptif. Ganti dengan foto asli (taruh di `public/`, lalu arahkan path-nya).

## Belum dibuat (menunggu data asli)

Sesuai keputusan desain, bagian berikut **sengaja tidak dibuat** sampai ada data
asli, agar tidak menampilkan hal palsu di pasar lokal yang saling kenal:

- **Testimoni** pelanggan
- **Logo klien** ("dipercaya oleh")
- **Harga** (semua layanan lewat konsultasi; FAQ menjelaskan ini)

Saat datanya sudah ada, bagian-bagian ini bisa ditambahkan sebagai section baru.

## Arah desain yang dipakai

- Target: UMKM lokal Sulut (utama), instansi (kedua)
- Bahasa visual: terang, bersih, ramah, percaya diri. Lokalitas halus.
- Aksen dikunci: teal laut Bunaken yang dalam, di atas netral abu-abu dingin.
- Font: Space Grotesk (judul) + Plus Jakarta Sans (teks, buatan Indonesia).
- CTA tunggal: chat WhatsApp, label "Konsultasi Gratis" di seluruh halaman.
- Dark mode mengikuti preferensi sistem pengunjung.
- Semua animasi menghormati `prefers-reduced-motion`.
