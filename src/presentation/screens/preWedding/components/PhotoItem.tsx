type Props = {
  src: string;
};

export function PhotoItem({ src }: Props) {
  return (
    <div className="w-full aspect-square overflow-hidden">
      <img
        src={src}
        alt="pre-wedding"
        className="w-full h-full object-cover"
      />
    </div>
  );
}