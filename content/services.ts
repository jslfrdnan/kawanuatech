export type Service = {
  title: string;
  desc: string;
  points: string[];
  icon: "profile" | "store" | "app" | "mobile";
};

export const services: Service[] = [
  {
    title: "Website Company Profile",
    desc: "Profil usaha yang tampil profesional dan gampang ditemukan calon pelanggan di Google.",
    points: ["Desain sesuai brand", "Cepat dibuka", "Siap mesin pencari"],
    icon: "profile",
  },
  {
    title: "Toko Online",
    desc: "Jualan online dengan katalog, keranjang, dan checkout yang rapi dari laptop maupun HP.",
    points: ["Katalog produk", "Pembayaran digital", "Kelola pesanan"],
    icon: "store",
  },
  {
    title: "Aplikasi Web Custom",
    desc: "Sistem informasi yang mengikuti alur kerja Anda. Cocok untuk instansi dan perusahaan.",
    points: ["Dibuat sesuai proses", "Hak akses pengguna", "Laporan otomatis"],
    icon: "app",
  },
  {
    title: "Aplikasi Mobile",
    desc: "Aplikasi Android dan iOS untuk mendekatkan layanan Anda ke tangan pelanggan.",
    points: ["Android dan iOS", "Notifikasi", "Terhubung ke sistem Anda"],
    icon: "mobile",
  },
];
