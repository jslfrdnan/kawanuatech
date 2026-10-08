export type Project = {
  name: string;
  client: string;
  category: string;
  year: string;
  // PLACEHOLDER: ganti `image` dengan screenshot asli proyek (misalnya /work/nama-proyek.jpg)
  image: string;
};

// ============================================================
//  PLACEHOLDER: ketiga proyek di bawah adalah CONTOH.
//  Ganti dengan proyek asli Anda sebelum situs dipublikasikan.
//  Jangan tampilkan proyek yang tidak pernah Anda kerjakan.
// ============================================================
export const projects: Project[] = [
  {
    name: "Katalog Kuliner Manado",
    client: "Contoh UMKM Kuliner", // PLACEHOLDER
    category: "Toko Online",
    year: "2025",
    image: "https://picsum.photos/seed/kawanua-kuliner-manado/1200/900",
  },
  {
    name: "Antrean Klinik Online",
    client: "Contoh Klinik", // PLACEHOLDER
    category: "Aplikasi Web",
    year: "2025",
    image: "https://picsum.photos/seed/kawanua-klinik-antrean/900/700",
  },
  {
    name: "Profil Kontraktor",
    client: "Contoh Kontraktor", // PLACEHOLDER
    category: "Company Profile",
    year: "2024",
    image: "https://picsum.photos/seed/kawanua-kontraktor-profil/900/700",
  },
];
