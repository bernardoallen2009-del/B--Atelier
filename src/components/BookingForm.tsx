import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const bookingEmail = "bernardoallen@icloud.com";
const instagramUrl =
  "https://www.instagram.com/allen_cook_photography?igsh=MWVxMWIyOGtoZ292bA%3D%3D&utm_source=qr";

const menuOptions = ["Bé Signature", "Italian Comfort", "Atelier Menu", "Custom / Not sure yet"];
const familyNightOptions = ["No", "Yes, family support for children"];

function getField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function buildMailto(formData: FormData) {
  const subject = "Private dinner request - Bé Atelier";
  const familyNight = getField(formData, "familyNight");
  const familyNightDetails =
    familyNight === familyNightOptions[1]
      ? [
          "",
          "Family Night details:",
          `Number of children: ${getField(formData, "childrenCount") || "Not shared"}`,
          `Ages of children: ${getField(formData, "childrenAges") || "Not shared"}`,
          `Allergies or important information: ${getField(formData, "childrenInfo") || "None shared"}`,
          `Preferred activities / screen time allowed: ${getField(formData, "childrenActivities") || "Not shared"}`,
          `Bedtime routine or special notes: ${getField(formData, "childrenRoutine") || "Not shared"}`
        ]
      : [];
  const body = [
    "New private dinner request",
    "",
    `Name: ${getField(formData, "name")}`,
    `Email: ${getField(formData, "email")}`,
    `Phone / WhatsApp: ${getField(formData, "phone")}`,
    `Preferred date: ${getField(formData, "preferredDate")}`,
    `Number of guests: ${getField(formData, "guests")}`,
    `Location: ${getField(formData, "location")}`,
    `Menu preference: ${getField(formData, "menuPreference")}`,
    `Family Night support: ${familyNight}`,
    ...familyNightDetails,
    "",
    "Allergies or dietary restrictions:",
    getField(formData, "allergies") || "None shared",
    "",
    "Message:",
    getField(formData, "message") || "No extra message"
  ].join("\n");

  return `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function BookingForm() {
  const [familyNight, setFamilyNight] = useState(familyNightOptions[0]);
  const wantsFamilyNight = familyNight === familyNightOptions[1];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildMailto(new FormData(event.currentTarget));
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
              eyebrow="Book"
              title="Book a private dinner"
              subtitle="Tell us a little about your dinner and we'll get back to you."
            />
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-charcoal/20 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 sm:mt-8"
            >
              Contact on Instagram
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:gap-5">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" />
              <Field label="Preferred date" name="preferredDate" type="date" />
              <Field label="Number of guests" name="guests" type="number" min="4" max="14" />
              <Field label="Location" name="location" type="text" />
            </div>

            <label className="grid gap-2 text-sm font-medium text-charcoal">
              Menu preference
              <select
                name="menuPreference"
                className="rounded-none border border-charcoal/15 bg-ivory px-4 py-3 text-charcoal outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20"
                defaultValue="Bé Signature"
              >
                {menuOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-charcoal">
              Would you like to add Family Night support?
              <select
                name="familyNight"
                className="rounded-none border border-charcoal/15 bg-ivory px-4 py-3 text-charcoal outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20"
                value={familyNight}
                onChange={handleFamilyNightChange}
              >
                {familyNightOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            {wantsFamilyNight ? (
              <div className="fine-border grid gap-4 bg-ivory/70 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5">
                <Field label="Number of children" name="childrenCount" type="number" min="1" />
                <Field label="Ages of children" name="childrenAges" type="text" />
                <TextArea label="Any allergies or important information?" name="childrenInfo" rows={3} />
                <TextArea label="Preferred activities / screen time allowed?" name="childrenActivities" rows={3} />
                <div className="sm:col-span-2">
                  <TextArea label="Bedtime routine or special notes?" name="childrenRoutine" rows={3} />
                </div>
              </div>
            ) : null}

            <TextArea label="Allergies or dietary restrictions" name="allergies" rows={3} />
            <TextArea label="Message" name="message" rows={5} />

            <button
              type="submit"
              className="mt-2 inline-flex w-full justify-center rounded-full bg-charcoal px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50 sm:w-auto sm:py-4"
            >
              Send request
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
