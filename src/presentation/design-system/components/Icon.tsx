type Props = {
  name: string;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className }: Props) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
}
