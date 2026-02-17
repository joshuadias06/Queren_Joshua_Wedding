type Props = {
  iconName: string;
  title: string;
  subtitle: string;
  price: string;
  onGift: () => void;
};

export function SuggestionCard({ iconName, title, subtitle, price, onGift }: Props) {
  return (
    <div className="rounded-2xl bg-white shadow p-4 text-center">
      <div className="mx-auto h-10 w-10 rounded-full bg-[var(--color-secondary)]/15 flex items-center justify-center">
        <span className="material-symbols-outlined text-[var(--color-secondary)]">
          {iconName}
        </span>
      </div>

      <p
        className="mt-3 text-sm text-[var(--color-text)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {title}
      </p>
      <p
        className="text-xs text-[var(--color-muted)] italic mt-1"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {subtitle}
      </p>

      <p
        className="mt-3 text-sm text-[var(--color-primary)] font-medium"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {price}
      </p>

      <button
        onClick={onGift}
        className="mt-3 w-full border border-[var(--color-primary)]/25 text-[var(--color-primary)] py-2 rounded-lg text-sm hover:bg-[var(--color-primary)] hover:text-white transition-colors"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Presentear
      </button>
    </div>
  );
}
