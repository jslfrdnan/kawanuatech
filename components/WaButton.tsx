import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { waLink } from "@/site.config";

type Props = {
  children: React.ReactNode;
  message?: string;
  variant?: "solid" | "ghost";
  className?: string;
};

/**
 * Satu-satunya CTA utama di seluruh halaman: chat WhatsApp.
 * Label bisa berbeda tapi tujuannya satu (lihat aturan: no duplicate CTA intent).
 */
export function WaButton({
  children,
  message,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold tracking-tight transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const styles =
    variant === "solid"
      ? "bg-accent text-white shadow-[0_8px_30px_-8px_rgba(15,118,110,0.6)] hover:bg-accent-strong hover:-translate-y-0.5 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-night"
      : "border border-ink/15 text-ink hover:border-accent hover:text-accent dark:border-white/20 dark:text-white dark:hover:border-accent";

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsappLogo
        weight="fill"
        className="size-5 transition-transform duration-200 group-hover:scale-110"
      />
      {children}
    </a>
  );
}
