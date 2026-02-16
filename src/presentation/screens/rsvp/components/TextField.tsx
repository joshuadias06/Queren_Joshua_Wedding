type Props = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
};

export function TextField({ label, placeholder, value, onChange, multiline }: Props) {
  return (
    <div className="mt-10">
      <p
        className="text-[11px] tracking-[0.35em] text-[var(--color-primary)] font-medium"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>

      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="mt-4 w-full bg-transparent text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none resize-none"
          style={{ fontFamily: "var(--font-body)" }}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-4 w-full bg-transparent text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none"
          style={{ fontFamily: "var(--font-body)" }}
        />
      )}

      <div className="mt-4 h-px w-full bg-[var(--color-secondary)] opacity-40" />
    </div>
  );
}
