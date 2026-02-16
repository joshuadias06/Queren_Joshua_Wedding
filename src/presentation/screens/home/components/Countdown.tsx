type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function Countdown({ days, hours, minutes, seconds }: Props) {
  return (
    <div className="bg-[var(--color-bg)] flex justify-center gap-6 py-8 text-center">
      <TimeItem value={days} label="DIAS" />
      <TimeItem value={hours} label="HORAS" />
      <TimeItem value={minutes} label="MIN" />
      <TimeItem value={seconds} label="SEG" />
    </div>
  );
}

function TimeItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-semibold text-[var(--color-primary)]">
        {value.toString().padStart(2, "0")}
      </p>

      <p className="text-xs tracking-[0.3em] text-[var(--color-secondary)] mt-1">
        {label}
      </p>
    </div>
  );
}
