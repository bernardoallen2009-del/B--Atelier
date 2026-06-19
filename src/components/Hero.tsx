import heroImage from "../assets/images/risotto-prawns.jpg";

export default function Hero() {
  return (
    <section id="top" className="section-shell grid items-center gap-8 py-10 sm:min-h-[calc(100vh-64px)] sm:gap-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div className="reveal max-w-xl">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-clay sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
          Lisbon | 4-10 guests
        </p>
        <h1 className="font-serif text-5xl font-semibold leading-[0.9] text-charcoal sm:text-7xl lg:text-8xl">
          Bé Atelier
        </h1>
        <p className="mt-4 text-base font-medium text-charcoal sm:mt-5 sm:text-lg">
          Private dining at home
        </p>
        <p className="mt-5 max-w-md text-base leading-7 text-warmgray sm:mt-6 sm:text-lg sm:leading-8">
          Intimate dinners, handmade food and careful plating - brought to your table at home.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50"
          >
            Book a dinner
          </a>
          <a
            href="#menus"
            className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
          >
            View menus
          </a>
        </div>
      </div>

      <div className="reveal relative">
        <div className="absolute -left-5 -top-5 hidden h-28 w-28 border border-clay/25 sm:block" />
        <img
          src={heroImage}
          alt="Pumpkin risotto with prawns served on a ceramic plate"
          className="aspect-[5/4] max-h-[360px] w-full rounded-sm object-cover shadow-soft sm:aspect-[4/5] sm:max-h-none lg:aspect-[5/6]"
        />
        <p className="mt-3 max-w-sm text-xs leading-5 text-warmgray sm:mt-4 sm:text-sm sm:leading-6">
          Handmade menus, quiet details and a restaurant-style rhythm at home.
        </p>
      </div>
    </section>
  );
}
