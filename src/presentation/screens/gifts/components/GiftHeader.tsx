type Props = {
  title: string;
  subtitle: string;
};

export function GiftsHeader({ title, subtitle }: Props) {
  return (
    <div className="px-6 text-center">
      <div className="flex items-center justify-center gap-4 mt-2">
        <div className="h-px w-16 bg-[var(--color-secondary)] opacity-60" />
        <span
          className="material-symbols-outlined text-[var(--color-secondary)]"
          style={{ fontSize: "18px" }}
        >
          favorite
        </span>
        <div className="h-px w-16 bg-[var(--color-secondary)] opacity-60" />
      </div>

      <h1
        className="mt-6 text-3xl text-[var(--color-text)]"
        style={{ fontFamily: "var(--font-elegant)" }}
      >
        {title}
      </h1>

      <p
        className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {subtitle}
      </p>
    </div>
  );
}
