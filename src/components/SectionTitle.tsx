type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionTitleProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-clay sm:mb-3 sm:text-xs sm:tracking-[0.22em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold leading-none text-charcoal sm:text-5xl sm:leading-[0.95]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-sm leading-6 text-warmgray sm:mt-5 sm:text-lg sm:leading-7">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
