type Props = {
  label: string;
  pixKey: string;
  onCopy: () => void;
};

export function PixCard({ label, pixKey, onCopy }: Props) {
  return (
    <div className="mt-6 mx-6 rounded-2xl bg-white shadow p-6">
      <div className="flex justify-center">
        <span
          className="px-4 py-1 rounded-full border border-[var(--color-primary)]/20 text-[10px] tracking-[0.3em] text-[var(--color-primary)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {label}
        </span>
      </div>

      {/* QR placeholder */}
      <div className="mt-5 rounded-2xl border-2 border-dashed border-[var(--color-primary)]/20 p-6 flex justify-center">
        <div className="h-36 w-36 rounded-xl bg-[var(--color-bg)] flex items-center justify-center">
          <span className="material-symbols-outlined text-[var(--color-primary)]">
            qr_code_2
          </span>
        </div>
      </div>

      {/* Pix key */}
      <div className="mt-5 rounded-xl bg-[var(--color-bg)] px-4 py-3 text-center">
        <p
          className="text-sm text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {pixKey}
        </p>
      </div>

      <button
        onClick={onCopy}
        className="mt-4 w-full border border-[var(--color-primary)] text-[var(--color-primary)] py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
          content_copy
        </span>
        Copiar Chave PIX
      </button>
    </div>
  );
}
