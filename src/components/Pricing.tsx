import SectionTitle from "./SectionTitle";

const prices = [
  { guests: "4-8 guests", price: "EUR 40", note: "per person" },
  { guests: "9-14 guests", price: "EUR 35", note: "per person" }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionTitle
            eyebrow="Launch pricing"
            title="Pricing"
            subtitle="Launch pricing for private dinners."
          />
          <div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {prices.map((item) => (
                <div key={item.guests} className="fine-border bg-ivory/70 p-5 sm:p-7">
                  <p className="text-sm font-semibold text-warmgray">{item.guests}</p>
                  <p className="mt-3 font-serif text-4xl font-semibold text-charcoal sm:mt-4 sm:text-5xl">{item.price}</p>
                  <p className="mt-2 text-sm text-warmgray">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-charcoal sm:mt-8 sm:text-base sm:leading-8">
              Each dinner includes a three-course menu, preparation, finishing, careful plating,
              a personalised digital menu and a small jar of homemade Bé Granola as a thank-you gift.
            </p>

            <div className="mt-6 border-l border-clay/50 pl-4 sm:mt-8 sm:pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                Included gift - Bé Granola
              </p>
              <p className="mt-3 text-sm leading-6 text-warmgray">
                A small jar of homemade granola with oats, nuts, honey and warm spices,
                prepared as a thank-you gift for the next morning.
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm leading-6 text-warmgray sm:mt-8">
              <p>Drinks, tableware rental and special premium ingredients are not included unless agreed in advance.</p>
              <p>Final price may vary for highly customised menus or locations outside Lisbon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
