type Props = {
  src: string;
  onClick: () => void;
};

export function PhotoItem({
  src,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full aspect-square overflow-hidden block"
    >
      <img
        src={src}
        alt="pre-wedding"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 active:scale-95"
      />
    </button>
  );
}