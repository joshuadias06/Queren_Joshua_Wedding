type Props = {
  label: string;
  value: number;
  onInc: () => void;
  onDec: () => void;
  min?: number;
  max?: number;
};

export function Stepper({
  label,
  value,
  onInc,
  onDec,
  min = 1,
  max = 6,
}: Props) {
  const isMin = value <= min;
  const isMax = value >= max;

  return (
    <div className="mt-10">
      <p
        className="text-[11px] tracking-[0.35em] text-[var(--color-primary)] font-medium"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>

      <div className="mt-5 rounded-2xl border border-[var(--color-secondary)]/30 bg-white px-5 py-5 flex items-center justify-between">
        
        {/* Botão diminuir */}
        <button
          onClick={onDec}
          disabled={isMin}
          className={`h-12 w-12 rounded-full flex items-center justify-center border transition-colors
            ${
              isMin
                ? "border-neutral-200 text-neutral-300 cursor-not-allowed"
                : "border-[var(--color-primary)]/20 text-[var(--color-primary)]"
            }
          `}
          aria-label="Diminuir"
        >
          <span className="material-symbols-outlined">remove</span>
        </button>

        {/* Valor */}
        <div
          className="text-3xl text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {String(value).padStart(2, "0")}
        </div>

        {/* Botão aumentar */}
        <button
          onClick={onInc}
          disabled={isMax}
          className={`h-12 w-12 rounded-full flex items-center justify-center shadow transition-colors
            ${
              isMax
                ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                : "bg-[var(--color-primary)] text-white"
            }
          `}
          aria-label="Aumentar"
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  );
}
