import qrCode from "../../../../assets/qrcode.png";

type GiftPixModalProps = {
  open: boolean;
  onClose: () => void;
  iconName: string;
  title: string;
  subtitle: string;
  pixKey: string;
};

export function GiftPixModal({
  open,
  onClose,
  iconName,
  title,
  subtitle,
  pixKey,
}: GiftPixModalProps) {
  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 backdrop-blur-[2px]">
      <div
        className="relative rounded-[28px] bg-white px-4 pb-6 pt-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        style={{
          width: "fit-content",
          maxWidth: "calc(100vw - 32px)",
        }}
      >
        {/* fechar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 hover:bg-black/10"
        >
          ✕
        </button>

        <div className="flex flex-col items-center">
          {/* icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-secondary)]/12">
            <span className="material-symbols-outlined text-2xl text-[var(--color-secondary)]">
              {iconName}
            </span>
          </div>

          {/* title */}
          <h3
            className="mt-4 text-center text-lg font-semibold text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {title}
          </h3>

          {/* subtitle */}
          <p
            className="mt-1 text-center text-sm italic text-[var(--color-muted)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {subtitle}
          </p>

          <div className="mt-3 h-px w-16 bg-[var(--color-primary)]/20" />

          <p
            className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--color-primary)]/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Escaneie para presentear
          </p>

          {/* QR CODE */}
          <img
            src={qrCode}
            alt={`QR Code de ${title}`}
            className="mt-5 block w-[260px] object-contain"
          />

          {/* PIX KEY */}
          <div className="mt-5 w-full rounded-xl bg-[var(--color-bg)] px-4 py-3 text-center">
            <p
              className="text-sm text-[var(--color-text)] break-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {pixKey}
            </p>
          </div>

          {/* COPY BUTTON */}
          <button
            onClick={handleCopy}
            className="mt-4 w-full border border-[var(--color-primary)] text-[var(--color-primary)] py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
            >
              content_copy
            </span>
            Copiar Chave PIX
          </button>
        </div>
      </div>
    </div>
  );
}
