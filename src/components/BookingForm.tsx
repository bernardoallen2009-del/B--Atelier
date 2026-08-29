import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import DatePicker, { localeMap } from "./DatePicker";
import SectionTitle from "./SectionTitle";
import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/types";
import type { Translation } from "../i18n/translations";

const bookingEmail = "bernardoallen@icloud.com";
const instagramUrl =
  "https://www.instagram.com/allen_cook_photography?igsh=MWVxMWIyOGtoZ292bA%3D%3D&utm_source=qr";

function getField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function formatPreferredDate(value: string, language: Lang, fallback: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return fallback;
  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return new Intl.DateTimeFormat(localeMap[language], {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function buildMailto(formData: FormData, t: Translation, language: Lang) {
  const mail = t.booking.mail;
  const familyNight = getField(formData, "familyNight");
  const familyNightDetails =
    familyNight === t.booking.familyNightOptions[1]
      ? [
          "",
          mail.familyNightDetailsHeading,
          `${mail.childrenCount}: ${getField(formData, "childrenCount") || mail.notShared}`,
          `${mail.childrenAges}: ${getField(formData, "childrenAges") || mail.notShared}`,
          `${mail.childrenAllergies}: ${getField(formData, "childrenInfo") || mail.noneShared}`,
          `${mail.childrenActivities}: ${getField(formData, "childrenActivities") || mail.notShared}`,
          `${mail.childrenRoutine}: ${getField(formData, "childrenRoutine") || mail.notShared}`
        ]
      : [];
  const body = [
    mail.heading,
    "",
    `${mail.name}: ${getField(formData, "name")}`,
    `${mail.email}: ${getField(formData, "email")}`,
    `${mail.phone}: ${getField(formData, "phone")}`,
    `${mail.date}: ${formatPreferredDate(getField(formData, "preferredDate"), language, mail.notShared)}`,
    `${mail.guests}: ${getField(formData, "guests")}`,
    `${mail.location}: ${getField(formData, "location")}`,
    `${mail.menuPreference}: ${getField(formData, "menuPreference")}`,
    `${mail.familyNightSupport}: ${familyNight}`,
    ...familyNightDetails,
    "",
    mail.allergiesHeading,
    getField(formData, "allergies") || mail.noneShared,
    "",
    mail.messageHeading,
    getField(formData, "message") || mail.noExtraMessage
  ].join("\n");

  return `mailto:${bookingEmail}?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(body)}`;
}

export default function BookingForm() {
  const { t, language } = useLanguage();
  const [familyNight, setFamilyNight] = useState(t.booking.familyNightOptions[0]);
  const [preferredDate, setPreferredDate] = useState("");
  const wantsFamilyNight = familyNight === t.booking.familyNightOptions[1];

  useEffect(() => {
    setFamilyNight(t.booking.familyNightOptions[0]);
  }, [language, t.booking.familyNightOptions]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildMailto(new FormData(event.currentTarget), t, language);
  }

  function handleFamilyNightChange(event: ChangeEvent<HTMLSelectElement>) {
    setFamilyNight(event.target.value);
  }

  return (
    <section id="booking" className="anchor-section section-spacing bg-white/35">
      <div className="section-shell">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionTitle
              eyebrow={t.booking.eyebrow}
              title={t.booking.title}
              subtitle={t.booking.subtitle}
            />
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-charcoal/20 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 sm:mt-8"
            >
              {t.booking.instagramCta}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:gap-5">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <Field label={t.booking.fields.name} name="name" type="text" required />
              <Field label={t.booking.fields.email} name="email" type="email" required />
              <Field label={t.booking.fields.phone} name="phone" type="tel" />
              <DatePicker
                name="preferredDate"
                label={t.booking.fields.date}
                value={preferredDate}
                onChange={setPreferredDate}
              />
              <Field label={t.booking.fields.guests} name="guests" type="number" min="4" max="14" required />
              <Field label={t.booking.fields.location} name="location" type="text" />
            </div>

            <label className="grid gap-2 text-sm font-medium text-charcoal">
              {t.booking.fields.menuPreference}
              <select
                key={`menu-${language}`}
                name="menuPreference"
                className="rounded-none border border-charcoal/15 bg-ivory px-4 py-3 text-charcoal outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20"
                defaultValue={t.booking.menuOptions[0]}
              >
                {t.booking.menuOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-charcoal">
              {t.booking.fields.familyNightQuestion}
              <select
                key={`family-${language}`}
                name="familyNight"
                className="rounded-none border border-charcoal/15 bg-ivory px-4 py-3 text-charcoal outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20"
                value={familyNight}
                onChange={handleFamilyNightChange}
              >
                {t.booking.familyNightOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            {wantsFamilyNight ? (
              <div className="fine-border grid gap-4 bg-ivory/70 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5">
                <Field label={t.booking.fields.childrenCount} name="childrenCount" type="number" min="1" />
                <Field label={t.booking.fields.childrenAges} name="childrenAges" type="text" />
                <TextArea label={t.booking.fields.childrenAllergies} name="childrenInfo" rows={3} />
                <TextArea label={t.booking.fields.childrenActivities} name="childrenActivities" rows={3} />
                <div className="sm:col-span-2">
                  <TextArea label={t.booking.fields.childrenRoutine} name="childrenRoutine" rows={3} />
                </div>
              </div>
            ) : null}

            <TextArea label={t.booking.fields.allergies} name="allergies" rows={3} />
            <TextArea label={t.booking.fields.message} name="message" rows={5} />

            <button
              type="submit"
              className="mt-2 inline-flex w-full justify-center rounded-full bg-charcoal px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50 sm:w-auto sm:py-4"
            >
              {t.booking.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  min?: string;
  max?: string;
};

function Field({ label, name, type, required, min, max }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-charcoal">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        max={max}
        className="rounded-none border border-charcoal/15 bg-ivory px-4 py-3 text-charcoal outline-none transition placeholder:text-warmgray/70 focus:border-clay focus:ring-2 focus:ring-clay/20"
      />
    </label>
  );
}

type TextAreaProps = {
  label: string;
  name: string;
  rows: number;
};

function TextArea({ label, name, rows }: TextAreaProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-charcoal">
      {label}
      <textarea
        name={name}
        rows={rows}
        className="resize-y rounded-none border border-charcoal/15 bg-ivory px-4 py-3 text-charcoal outline-none transition placeholder:text-warmgray/70 focus:border-clay focus:ring-2 focus:ring-clay/20"
      />
    </label>
  );
}
