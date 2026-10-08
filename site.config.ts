// ============================================================
//  PUSAT DATA SITUS KawanuaTech
//  Ganti nilai bertanda PLACEHOLDER dengan data asli Anda.
// ============================================================

export const site = {
  brand: "KawanuaTech",
  tagline: "Tim developer dari Manado untuk website dan aplikasi usaha Anda.",

  // PLACEHOLDER: ganti dengan nomor WhatsApp asli (format internasional tanpa + dan tanpa spasi)
  whatsappNumber: "6281234567890",
  whatsappMessage:
    "Halo KawanuaTech, saya mau tanya soal pembuatan website/aplikasi.",

  // PLACEHOLDER: ganti dengan data kontak asli
  email: "halo@kawanuatech.id",
  phoneLabel: "+62 812 3456 7890",
  address: "Manado, Sulawesi Utara, Indonesia",

  socials: [
    // PLACEHOLDER: ganti URL sosial media asli
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

export function waLink(customMessage?: string) {
  const text = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
