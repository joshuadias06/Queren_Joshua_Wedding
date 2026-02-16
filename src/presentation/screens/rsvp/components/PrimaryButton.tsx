type Props = {
  title: string;
  onClick: () => void;
};

export function PrimaryButton({ title, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="mt-12 w-full bg-[var(--color-primary)] text-white py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <span className="text-lg font-medium">{title}</span>
      <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>
        arrow_forward
      </span>
    </button>
  );
}
