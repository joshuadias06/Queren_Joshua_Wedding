type Props = {
  title: string;
  onBack: () => void;
};

export function LocationTopBar({ title, onBack }: Props) {
  return (
    <div className="pt-6 pb-4 px-6 flex items-center justify-between">
      <button onClick={onBack}>
        <span className="material-symbols-outlined text-[var(--color-primary)]">
          arrow_back_ios
        </span>
      </button>
      
      <h1
        className="text-xl text-[var(--color-primary)]"
        style={{ fontFamily: "var(--font-elegant)" }}
      >
        {title}
      </h1>

      <div className="w-8" />
    </div>
  );
}
