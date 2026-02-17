type Props = {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
};

export function ExternalListCard({ title, description, buttonText, onClick }: Props) {
  return (
    <div className="mt-8 mx-6 rounded-2xl bg-white shadow p-6 text-center">
      <div className="mx-auto h-12 w-12 rounded-full bg-[var(--color-primary)]/15 flex items-center justify-center">
        <span className="material-symbols-outlined text-[var(--color-primary)]">
          redeem
        </span>
      </div>

      <h3
        className="mt-4 text-base text-[var(--color-text)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {title}
      </h3>

      <p
        className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {description}
      </p>

      <button
        onClick={onClick}
        className="mt-5 w-full bg-[var(--color-primary)] text-white py-3 rounded-xl shadow hover:opacity-95 transition-opacity"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {buttonText}
      </button>
    </div>
  );
}
