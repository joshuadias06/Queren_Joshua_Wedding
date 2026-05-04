import { PhotoItem } from "./PhotoItem";

type Props = {
  photos: string[];
};

export function PhotoGrid({ photos }: Props) {
  return (
    <div className="grid grid-cols-3 gap-[2px]">
      {photos.map((photo, index) => (
        <PhotoItem key={index} src={photo} />
      ))}
    </div>
  );
}