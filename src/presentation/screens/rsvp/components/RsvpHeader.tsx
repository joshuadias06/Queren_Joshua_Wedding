type Props = {
  onBack: () => void;
};

export function RsvpHeader({ onBack }: Props) {
  return (
    <>
      {/* Top Bar igual ao Gifts */}
      <div className="pt-6 pb-4 px-1 flex items-center justify-between">
        <button onClick={onBack} aria-label="Voltar">
          <span className="material-symbols-outlined text-[var(--color-primary)]">
            arrow_back_ios
          </span>
        </button>

        <p
          className="text-xs tracking-[0.35em] text-[var(--color-primary)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          PRESENÇA
        </p>

        {/* espaço invisível para centralizar corretamente */}
        <div className="w-8" />
      </div>

      {/* Conteúdo principal */}
      <div className="pt-6 text-center px-6">
        <div className="flex items-center justify-center gap-4">
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
          className="mt-8 text-5xl leading-tight"
          style={{ fontFamily: "var(--font-elegant)" }}
        >
          <span className="text-[var(--color-text)]">Confirmar</span>
          <br />
          <span className="text-[var(--color-text)]">Presença</span>
        </h1>

        <p
          className="mt-5 italic text-[var(--color-muted)] leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          “Sua presença é o nosso maior presente. Por favor, confirme sua
          participação para que possamos celebrar juntos este momento único.”
        </p>
      </div>
    </>
  );
}