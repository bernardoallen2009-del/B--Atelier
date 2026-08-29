import SectionTitle from "./SectionTitle";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="anchor-section section-spacing border-y border-charcoal/10 bg-white/35">
      <div className="section-shell grid gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionTitle
          eyebrow={t.about.eyebrow}
          title={t.about.title}
        />
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-charcoal sm:text-2xl sm:leading-9">
            {t.about.paragraph}
          </p>
          <p className="mt-6 border-l border-clay/60 pl-4 font-serif text-2xl leading-tight text-charcoal sm:mt-8 sm:pl-5 sm:text-3xl">
            {t.about.quote}
          </p>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {t.about.points.map((point) => (
              <div key={point} className="border-t border-charcoal/15 pt-4">
                <p className="text-sm font-semibold text-charcoal">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
