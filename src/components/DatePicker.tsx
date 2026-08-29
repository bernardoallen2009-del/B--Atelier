import type { FocusEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/types";

export const localeMap: Record<Lang, string> = {
  en: "en-GB",
  pt: "pt-PT"
};

type DatePickerProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function toISODate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseISODate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, year, month, day] = match;
  return new Date(Number(year), Number(month) - 1, Number(day));
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export default function DatePicker({ name, label, value, onChange }: DatePickerProps) {
  const { language, t } = useLanguage();
  const locale = localeMap[language];
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedDate = parseISODate(value);
  const today = startOfDay(new Date());

  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => selectedDate ?? today);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function togglePicker() {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setViewDate(selectedDate ?? today);
    setIsOpen(true);
  }

  function selectDay(date: Date) {
    onChange(toISODate(date));
    setIsOpen(false);
  }

  function changeMonth(delta: number) {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  }

  const rawMonthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(viewDate);
  const monthLabel = rawMonthLabel.charAt(0).toUpperCase() + rawMonthLabel.slice(1);

  const weekdayLabels = Array.from({ length: 7 }, (_, i) => {
    const reference = new Date(2024, 0, 1 + i); // 1 Jan 2024 was a Monday
    // "short" is inconsistently short across locales (pt-PT returns full names), so
    // take the full weekday name and trim it ourselves for a reliably compact label.
    const fullName = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(reference);
    return fullName.slice(0, 3);
  });

  const firstOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7; // 0 = Monday
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

  const cells: Array<Date | null> = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), day));
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const displayText = selectedDate
    ? new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" }).format(selectedDate)
    : t.booking.fields.dateSelectPlaceholder;

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (containerRef.current && !containerRef.current.contains(event.relatedTarget as Node)) {
      setIsOpen(false);
    }
  }

  return (
    <div
      ref={containerRef}
      onBlur={handleBlur}
      className="relative grid gap-2 text-sm font-medium text-charcoal"
    >
      <span id={`${name}-label`}>{label}</span>
      <button
        type="button"
        onClick={togglePicker}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-labelledby={`${name}-label`}
        className={`flex items-center justify-between border border-charcoal/15 bg-ivory px-4 py-3 text-left outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20 ${
          selectedDate ? "text-charcoal" : "text-warmgray/70"
        }`}
      >
        <span>{displayText}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-warmgray">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="16" y1="3" x2="16" y2="7" />
        </svg>
      </button>
      <input type="hidden" name={name} value={value} />

      {isOpen ? (
        <div
          role="dialog"
          aria-label={label}
          className="fine-border absolute left-0 top-full z-30 mt-2 w-[280px] rounded-sm bg-ivory p-4 shadow-soft"
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              aria-label={t.booking.fields.datePrevMonth}
              className="rounded-full p-1.5 text-charcoal transition hover:bg-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <p className="font-serif text-base font-semibold text-charcoal">{monthLabel}</p>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              aria-label={t.booking.fields.dateNextMonth}
              className="rounded-full p-1.5 text-charcoal transition hover:bg-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 text-center text-[10px] font-semibold uppercase tracking-wide text-warmgray">
            {weekdayLabels.map((weekday, index) => (
              <span key={index}>{weekday}</span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-y-1 text-center text-sm">
            {cells.map((date, index) => {
              if (!date) return <span key={index} />;

              const isPast = date < today;
              const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
              const isToday = isSameDay(date, today);

              return (
                <button
                  key={index}
                  type="button"
                  disabled={isPast}
                  onClick={() => selectDay(date)}
                  className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 ${
                    isSelected
                      ? "bg-charcoal font-semibold text-ivory"
                      : isPast
                        ? "cursor-not-allowed text-warmgray/30"
                        : isToday
                          ? "font-semibold text-clay ring-1 ring-inset ring-clay/50 hover:bg-clay/10"
                          : "text-charcoal hover:bg-charcoal/5"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
