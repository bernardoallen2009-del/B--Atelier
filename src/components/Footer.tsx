import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    {
      label: t.footer.linkInstagram,
      href: "https://www.instagram.com/allen_cook_photography?igsh=MWVxMWIyOGtoZ292bA%3D%3D&utm_source=qr"
    },
    { label: t.footer.linkEmail, href: "mailto:bernardoallen@icloud.com" },
    { label: t.footer.linkMenus, href: "#menus" },
    { label: t.footer.linkBook, href: "#booking" }
  ];

  return (
    <footer className="border-t border-charcoal/10 py-12">
      <div className="section-shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-3xl font-semibold text-charcoal">Bé Atelier</p>
          <p className="mt-2 text-sm text-warmgray">{t.footer.tagline}</p>
          <p className="mt-1 text-sm text-warmgray">{t.footer.location}</p>
        </div>
        <div className="flex flex-col gap-5 sm:items-end">
          <div className="flex flex-wrap gap-5 text-sm text-warmgray">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-warmgray">
            {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
        </div>
      </div>
    </footer>
  );
}
