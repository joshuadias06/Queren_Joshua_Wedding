type Props = {
  icon: string;
  title: string;
  time: string;
  lines: string[];
  isLast?: boolean;
};

export function TimelineItem({ icon, title, time, lines, isLast }: Props) {
  return (
    <div className={`relative pl-16 ${isLast ? "" : "pb-12"}`}>
      {/* Linha vertical (vai do centro do ícone até o “espaço” abaixo) */}
      {!isLast && (
        <div className="absolute left-6 top-6 bottom-0 w-px bg-[var(--color-secondary)] opacity-40" />
      )}

      {/* Ícone */}
      <div className="absolute left-0 top-0 h-12 w-12 rounded-full border border-[var(--color-secondary)] flex items-center justify-center bg-white">
        <span className="material-symbols-outlined text-[var(--color-secondary)]">
          {icon}
        </span>
      </div>

      <h3
        className="text-lg text-[var(--color-text)]"
        style={{ fontFamily: "var(--font-elegant)" }}
      >
        {title}
      </h3>

      <p className="text-[var(--color-primary)] text-sm mt-1">{time}</p>

      <div
        className="mt-2 text-sm text-[var(--color-text)] leading-relaxed"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
