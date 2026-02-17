type Props = {
  title: string;
  onBack: () => void;
};

export function GiftsTopBar({ title, onBack }: Props) {
  return (
    <div className="pt-6 pb-4 px-6 flex items-center justify-between">
      <button onClick={onBack} aria-label="Voltar">
        <span className="material-symbols-outlined text-[var(--color-primary)]">
          arrow_back_ios
        </span>
      </button>

      <p
        className="text-xs tracking-[0.35em] text-[var(--color-primary)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {title}
      </p>

      <div className="w-8" />
    </div>
  );
}
