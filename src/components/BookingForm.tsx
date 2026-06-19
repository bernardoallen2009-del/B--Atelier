import type { FormEvent } from "react";
import SectionTitle from "./SectionTitle";

const bookingEmail = "hello@beatelier.pt";
const instagramUrl = "https://instagram.com/USERNAME_PLACEHOLDER";

const menuOptions = ["Bé Signature", "Italian Comfort", "Atelier Menu", "Custom / Not sure yet"];

function getField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function buildMailto(formData: FormData) {
  const subject = "Private dinner request - Bé Atelier";
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
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildMailto(new FormData(event.currentTarget));
  }

  return (
    <section id="booking" className="anchor-section section-spacing bg-white/35">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
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
              className="mt-8 inline-flex rounded-full border border-charcoal/20 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            >
              Contact on Instagram
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" />
              <Field label="Preferred date" name="preferredDate" type="date" />
              <Field label="Number of guests" name="guests" type="number" min="4" max="10" />
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

            <TextArea label="Allergies or dietary restrictions" name="allergies" rows={3} />
            <TextArea label="Message" name="message" rows={5} />

            <button
              type="submit"
              className="mt-2 inline-flex w-full justify-center rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-ivory transition hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50 sm:w-auto"
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
