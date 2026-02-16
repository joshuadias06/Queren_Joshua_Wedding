type Props = {
  days: number;
  hours: number;
  minutes: number;
};

export function Countdown({ days, hours, minutes }: Props) {
  return (
    <div className="bg-[#F5F3F1] flex justify-center gap-6 py-6 text-center">
      <TimeItem value={days} label="DIAS" />
      <TimeItem value={hours} label="HORAS" />
      <TimeItem value={minutes} label="MIN" />
    </div>
  );
}

function TimeItem({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold text-gray-800">
        {value}
      </p>
      <p className="text-xs tracking-[0.2em] text-amber-600">
        {label}
      </p>
    </div>
  );
}
