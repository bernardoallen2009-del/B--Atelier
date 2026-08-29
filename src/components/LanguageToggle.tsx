import { useLanguage } from "../i18n/LanguageContext";

type LanguageToggleProps = {
  className?: string;
};

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-charcoal/20 p-0.5 text-[11px] font-semibold tracking-wide ${className}`}
      role="group"
      aria-label="Language / Idioma"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-2.5 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 ${
          language === "en" ? "bg-charcoal text-ivory" : "text-warmgray hover:text-charcoal"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        className={`rounded-full px-2.5 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 ${
          language === "pt" ? "bg-charcoal text-ivory" : "text-warmgray hover:text-charcoal"
        }`}
      >
        PT
      </button>
    </div>
  );
}
