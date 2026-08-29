import SectionTitle from "./SectionTitle";
import { useLanguage } from "../i18n/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="anchor-section section-spacing">
      <div className="section-shell">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionTitle
            eyebrow={t.pricing.eyebrow}
            title={t.pricing.title}
            subtitle={t.pricing.subtitle}
          />
          <div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {t.pricing.tiers.map((item) => (
                <div key={item.guests} className="fine-border bg-ivory/70 p-5 sm:p-7">
                  <p className="text-sm font-semibold text-warmgray">{item.guests}</p>
                  <p className="mt-3 font-serif text-4xl font-semibold text-charcoal sm:mt-4 sm:text-5xl">{item.price}</p>
                  <p className="mt-2 text-sm text-warmgray">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-charcoal sm:mt-8 sm:text-base sm:leading-8">
              {t.pricing.included}
            </p>

            <div className="mt-6 border-l border-clay/50 pl-4 sm:mt-8 sm:pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                {t.pricing.giftEyebrow}
              </p>
              <p className="mt-3 text-sm leading-6 text-warmgray">
                {t.pricing.giftDescription}
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm leading-6 text-warmgray sm:mt-8">
              {t.pricing.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
