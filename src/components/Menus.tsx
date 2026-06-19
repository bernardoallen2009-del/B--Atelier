import { additionalDishes, menus } from "../data/menus";
import MenuCard from "./MenuCard";
import SectionTitle from "./SectionTitle";

export default function Menus() {
  return (
    <section id="menus" className="anchor-section section-spacing">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Menus"
            title="Menus"
            subtitle="Choose one of the launch menus or request a tailored experience."
          />
          <p className="max-w-sm text-sm leading-6 text-warmgray lg:text-right">
            Menus may be adapted depending on seasonality, allergies and dietary preferences.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {menus.map((menu) => (
            <MenuCard key={menu.name} menu={menu} />
          ))}
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-warmgray">
          Raw dishes are available only when ingredient quality and service conditions allow it.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
              From the atelier
            </p>
            <h3 className="font-serif text-4xl font-semibold leading-tight text-charcoal">
              Other dishes from the atelier
            </h3>
          </div>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {additionalDishes.map((dish) => (
              <div key={dish.name} className="border-t border-charcoal/15 pt-5">
                <h4 className="font-semibold text-charcoal">{dish.name}</h4>
                <p className="mt-2 text-sm leading-6 text-warmgray">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
