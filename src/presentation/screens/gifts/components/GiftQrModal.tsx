type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  suggestionTitle?: string;
  suggestionPrice?: string;
  qrSrc: string; // caminho da imagem
};

export function GiftQrModal({
  open,
  onClose,
  title = "Contribuição",
  suggestionTitle,
  suggestionPrice,
  qrSrc,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* manchas suaves */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[var(--color-primary)]/20" />
        <div className="absolute top-20 -right-24 h-72 w-72 rounded-full bg-[var(--color-secondary)]/15" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[var(--color-primary)]/10" />
      </div>

      {/* card */}
      <div className="relative w-full max-w-[430px] rounded-[36px] bg-white shadow-2xl px-8 py-10 text-center">
        <p
          className="text-[var(--color-primary)] text-3xl"
          style={{ fontFamily: "var(--font-elegant)" }}
        >
          Queren & Joshua
        </p>

        <div className="mt-3 mx-auto h-px w-12 bg-[var(--color-secondary)] opacity-50" />

        <h2
          className="mt-8 text-4xl leading-tight text-[var(--color-secondary)]"
          style={{ fontFamily: "var(--font-elegant)" }}
        >
          {title}
        </h2>

        {/* mensagem personalizada */}
        <div
          className="mt-5 space-y-3 text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p className="text-lg leading-relaxed">
            Nos ajude conforme Deus tocar no seu coração. 💛
          </p>

          {suggestionTitle ? (
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              <span className="font-semibold text-[var(--color-text)]">
                Sugestão:
              </span>{" "}
              {suggestionTitle}
              {suggestionPrice ? ` • ${suggestionPrice}` : ""}
            </p>
          ) : null}
        </div>

        {/* QR */}
        <div className="mt-8 flex justify-center">
          <div className="rounded-3xl bg-neutral-100 p-5 shadow-sm">
            <img
              src={qrSrc}
              alt="QR Code"
              className="h-56 w-56 object-contain"
            />
          </div>
        </div>

        <p
          className="mt-5 text-xs tracking-[0.25em] text-[var(--color-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          ESCANEIE COM A CÂMERA
        </p>

        {/* divisor */}
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

        {/* botão fechar */}
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

        {/* X */}
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