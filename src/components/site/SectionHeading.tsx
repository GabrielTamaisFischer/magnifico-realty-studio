export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="reveal reveal-delay-1 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="reveal reveal-delay-2 mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
