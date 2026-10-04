export function SectionHeading({
  id,
  kicker,
  title,
  className = "",
  titleClassName = "",
}: {
  id: string;
  kicker: string;
  title: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div data-reveal className={`flex flex-col gap-3 ${className}`}>
      <span className="kicker">{kicker}</span>
      <h2
        id={id}
        className={`text-[clamp(40px,5.5vw,76px)] leading-none font-medium tracking-[-.04em] ${titleClassName}`}
      >
        {title}
      </h2>
    </div>
  );
}
