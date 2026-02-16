export function RsvpHeader() {
  return (
    <div className="pt-10 text-center">
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
        <span className="text-[var(--color-text)]">Confirmar </span>
         <br />
        <span className="text-[var(--color-text)]">Presença</span>
      </h1>

      <p
        className="mt-5 px-8 italic text-[var(--color-muted)] leading-relaxed"
        style={{ fontFamily: "var(--font-body)" }}
      >
        “Sua presença é o nosso maior presente. Por favor, confirme sua participação
        para que possamos celebrar juntos este momento único.”
      </p>
    </div>
  );
}
