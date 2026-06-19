const navItems = [
  { label: "About", href: "#about" },
  { label: "Menus", href: "#menus" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#booking" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/88 backdrop-blur-md">
      <nav className="section-shell flex min-h-16 flex-col items-start justify-center gap-3 py-4 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <a
          href="#top"
          className="font-serif text-2xl font-semibold tracking-tight text-charcoal outline-none transition hover:text-clay focus-visible:ring-2 focus-visible:ring-clay/40"
        >
          Bé Atelier
        </a>
        <div className="flex w-full items-center justify-between gap-3 text-[13px] text-warmgray sm:w-auto sm:justify-start sm:gap-8 sm:text-sm">
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
      </nav>
    </header>
  );
}
