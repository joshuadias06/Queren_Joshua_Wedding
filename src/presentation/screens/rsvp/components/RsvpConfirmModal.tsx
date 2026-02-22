type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  name: string;
  companions: string[];
  message?: string;
};

export function RsvpConfirmModal({
  open,
  onClose,
  title = "Presença Confirmada",
  name,
  companions,
  message,
}: Props) {
  if (!open) return null;

  const companionsClean = companions.map((c) => c.trim()).filter(Boolean);
  const hasFamily = companionsClean.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* manchas suaves no fundo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[var(--color-primary)]/20" />
        <div className="absolute top-20 -right-24 h-72 w-72 rounded-full bg-[var(--color-secondary)]/15" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[var(--color-primary)]/10" />
      </div>

      {/* card */}
      <div className="relative w-full max-w-[430px] rounded-[36px] bg-white shadow-2xl px-8 py-10 text-center">
        {/* topo elegante */}
        <p
          className="text-[var(--color-primary)] text-3xl"
          style={{ fontFamily: "var(--font-elegant)" }}
        >
          Queren & Joshua
        </p>

        <div className="mt-3 mx-auto h-px w-12 bg-[var(--color-secondary)] opacity-50" />

        {/* ícone */}
        <div className="mt-8 flex justify-center">
          <div className="h-16 w-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-[var(--color-secondary)]"
              style={{ fontSize: "34px" }}
            >
              favorite
            </span>
          </div>
        </div>

        {/* título */}
        <h2
          className="mt-6 text-4xl leading-tight text-[var(--color-secondary)]"
          style={{ fontFamily: "var(--font-elegant)" }}
        >
          {title}
        </h2>

        {/* texto personalizado */}
        <div
          className="mt-6 space-y-4 text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p className="text-lg leading-relaxed">
            {hasFamily
              ? `${name}, ficamos muito felizes com a sua confirmação e de sua família!`
              : `${name}, ficamos muito felizes com a sua confirmação!`}
          </p>

          {companionsClean.length > 0 && (
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              <span className="font-semibold text-[var(--color-text)]">
                Acompanhantes:
              </span>{" "}
              {companionsClean.join(", ")}
            </p>
          )}

          {message?.trim() ? (
            <div className="mt-2 rounded-2xl bg-neutral-100 px-6 py-5 text-left">
              <p className="text-xs tracking-[0.25em] text-[var(--color-muted)]">
                SEU RECADO
              </p>
              <p className="mt-2 text-sm text-[var(--color-text)] leading-relaxed">
                “{message.trim()}”
              </p>
            </div>
          ) : null}
        </div>

        {/* divisor com coração */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <div className="h-px w-20 bg-[var(--color-secondary)] opacity-30" />
          <span
            className="material-symbols-outlined text-[var(--color-secondary)]"
            style={{ fontSize: "16px" }}
          >
            favorite
          </span>
          <div className="h-px w-20 bg-[var(--color-secondary)] opacity-30" />
        </div>

        {/* botão */}
        <button
          onClick={onClose}
          className="mt-8 w-full rounded-2xl py-4 text-white shadow-md active:scale-[0.99] transition"
          style={{
            background: "var(--color-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Fechar
        </button>

        {/* X no canto */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/5 flex items-center justify-center"
          aria-label="Fechar"
        >
          <span className="material-symbols-outlined text-[var(--color-muted)]">
            close
          </span>
        </button>
      </div>
    </div>
  );
}