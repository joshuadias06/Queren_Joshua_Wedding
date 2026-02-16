type Props = {
  label: string;
  value: number;
  onInc: () => void;
  onDec: () => void;
};

export function Stepper({ label, value, onInc, onDec }: Props) {
  return (
    <div className="mt-10">
      <p
        className="text-[11px] tracking-[0.35em] text-[var(--color-primary)] font-medium"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>

      <div className="mt-5 rounded-2xl border border-[var(--color-secondary)]/30 bg-white px-5 py-5 flex items-center justify-between">
        <button
          onClick={onDec}
          className="h-12 w-12 rounded-full border border-[var(--color-primary)]/20 flex items-center justify-center"
          aria-label="Diminuir"
        >
          <span className="material-symbols-outlined text-[var(--color-primary)]">
            remove
          </span>
        </button>

        <div
          className="text-3xl text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {String(value).padStart(2, "0")}
        </div>

        <button
          onClick={onInc}
          className="h-12 w-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow"
          aria-label="Aumentar"
        >
          <span className="material-symbols-outlined text-white">add</span>
        </button>
      </div>
    </div>
  );
}
