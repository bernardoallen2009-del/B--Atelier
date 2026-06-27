import SectionTitle from "./SectionTitle";

const includes = [
  "Calm activities in a nearby room",
  "Parents always at home and available",
  "Ideal for young families",
  "Available as an add-on to private dinners",
  "Priced as one additional guest"
];

const steps = [
  "Book your private dinner",
  "Tell us the number and ages of the children",
  "We bring one additional team member for family support",
  "Adults enjoy dinner while children are accompanied nearby"
];

export default function FamilyNight() {
  return (
    <section id="family-night" className="anchor-section section-spacing border-y border-charcoal/10 bg-white/30">
      <div className="section-shell">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="Family support"
              title="Family Night"
              subtitle="A restaurant-style dinner at home, while your children are looked after nearby."
            />
            <a
              href="#booking"
              className="mt-6 inline-flex rounded-full border border-charcoal/20 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 sm:mt-8"
            >
              Ask about Family Night
            </a>
          </div>

          <div className="grid gap-6 sm:gap-8">
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-charcoal sm:text-2xl sm:leading-9">
                Created for young parents who want to enjoy a special dinner without leaving home.
                While Bé Atelier prepares and serves the meal, an additional team member can stay
                in a nearby room with the children, offering calm supervision and simple activities,
                always with the parents at home and available.
              </p>
              <p className="mt-5 text-sm leading-6 text-warmgray sm:mt-6">
                Family support counts as one additional guest in the final quote.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="fine-border bg-ivory/70 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                  Includes
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-warmgray">
                  {includes.map((item) => (
                    <li key={item} className="border-t border-charcoal/10 pt-3 first:border-t-0 first:pt-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="fine-border bg-ivory/70 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                  How it works
                </p>
                <ol className="mt-5 grid gap-4 text-sm leading-6 text-warmgray">
                  {steps.map((step, index) => (
                    <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
                      <span className="font-serif text-2xl font-semibold leading-none text-charcoal">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <p className="max-w-3xl border-l border-clay/50 pl-4 text-xs leading-6 text-warmgray sm:pl-5">
              Family support is always provided inside the home, with parents present and available.
              It does not include medical care, bathing, leaving the house with children, or care for
              sick children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
