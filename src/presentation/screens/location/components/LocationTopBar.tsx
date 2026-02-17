type Props = {
  title: string;
  onBack: () => void;
};

export function LocationTopBar({ title, onBack }: Props) {
  return (
    <div className="pt-6 px-6">

      {/* Linha superior (botão voltar) */}
      <div className="flex items-center justify-between">
        <button onClick={onBack}>
          <span className="material-symbols-outlined text-[var(--color-primary)]">
            arrow_back_ios
          </span>
        </button>

        <div className="w-8" />
      </div>

      {/* Título */}
      <h1
        className="mt-4 text-center text-2xl text-[var(--color-primary)]"
        style={{ fontFamily: "var(--font-elegant)" }}
      >
        {title}
      </h1>

      {/* Linha decorativa com coração */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="h-px w-16 bg-[var(--color-secondary)] opacity-60" />

        <span
          className="material-symbols-outlined text-[var(--color-secondary)]"
          style={{ fontSize: "18px" }}
        >
          favorite
        </span>

        <div className="h-px w-16 bg-[var(--color-secondary)] opacity-60" />
      </div>

    </div>
  );
}
