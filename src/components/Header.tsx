import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.menus, href: "#menus" },
    { label: t.nav.familyNight, href: "#family-night" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.book, href: "#booking" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/88 backdrop-blur-md">
      <nav className="section-shell flex min-h-16 flex-col gap-2.5 py-3 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
          <a
            href="#top"
            className="font-serif text-[1.65rem] font-semibold leading-none tracking-tight text-charcoal outline-none transition hover:text-clay focus-visible:ring-2 focus-visible:ring-clay/40 sm:text-2xl"
          >
            Bé Atelier
          </a>
          <LanguageToggle className="sm:hidden" />
        </div>
        <div className="flex w-full items-center justify-between gap-2 text-[12px] text-warmgray sm:w-auto sm:justify-start sm:gap-8 sm:text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            >
              {item.label}
            </a>
          ))}
        </div>
        <LanguageToggle className="hidden sm:inline-flex" />
      </nav>
    </header>
  );
}
