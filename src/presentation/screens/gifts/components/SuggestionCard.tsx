import { useState } from "react";
import { GiftPixModal } from "./GiftPixModal";

type Props = {
  iconName: string;
  title: string;
  subtitle: string;
  price: string;
  onGift?: () => void;
};

export function SuggestionCard({
  iconName,
  title,
  subtitle,
  price,
  onGift,
}: Props) {
  const [openModal, setOpenModal] = useState(false);

  const handleGift = () => {
    setOpenModal(true);
    onGift?.();
  };

  return (
    <>
      <div className="rounded-2xl bg-white p-4 text-center shadow">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)]/15">
          <span className="material-symbols-outlined text-[var(--color-secondary)]">
            {iconName}
          </span>
        </div>

        <p
          className="mt-3 text-sm text-[var(--color-text)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {title}
        </p>

        <p
          className="mt-1 text-xs italic text-[var(--color-muted)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>

        <p
          className="mt-3 text-sm font-medium text-[var(--color-primary)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {price}
        </p>

        <button
          onClick={handleGift}
          className="mt-3 w-full rounded-lg border border-[var(--color-primary)]/25 py-2 text-sm text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Presentear
        </button>
      </div>

      <GiftPixModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        iconName={iconName}
        title={title}
        subtitle={subtitle}
        pixKey="querenjoshuawedding@gmail.com"
      />
    </>
  );
}
