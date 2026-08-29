import SectionTitle from "./SectionTitle";
import { useLanguage } from "../i18n/LanguageContext";

export default function FamilyNight() {
  const { t } = useLanguage();

  return (
    <section id="family-night" className="anchor-section section-spacing border-y border-charcoal/10 bg-white/30">
      <div className="section-shell">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SectionTitle
              eyebrow={t.familyNight.eyebrow}
              title={t.familyNight.title}
              subtitle={t.familyNight.subtitle}
            />
            <a
              href="#booking"
              className="mt-6 inline-flex rounded-full border border-charcoal/20 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 sm:mt-8"
            >
              {t.familyNight.cta}
            </a>
          </div>

          <div className="grid gap-6 sm:gap-8">
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-charcoal sm:text-2xl sm:leading-9">
                {t.familyNight.paragraph}
              </p>
              <p className="mt-5 text-sm leading-6 text-warmgray sm:mt-6">
                {t.familyNight.quoteNote}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="fine-border bg-ivory/70 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                  {t.familyNight.includesEyebrow}
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-warmgray">
                  {t.familyNight.includes.map((item) => (
                    <li key={item} className="border-t border-charcoal/10 pt-3 first:border-t-0 first:pt-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="fine-border bg-ivory/70 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                  {t.familyNight.stepsEyebrow}
                </p>
                <ol className="mt-5 grid gap-4 text-sm leading-6 text-warmgray">
                  {t.familyNight.steps.map((step, index) => (
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
              {t.familyNight.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
