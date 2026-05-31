import { PhotoItem } from "./PhotoItem";

type Props = {
  photos: string[];
  onPhotoClick: (photo: string) => void;
};

export function PhotoGrid({
  photos,
  onPhotoClick,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-[2px]">
      {photos.map((photo, index) => (
        <PhotoItem
          key={index}
          src={photo}
          onClick={() => onPhotoClick(photo)}
        />
      ))}
    </div>
  );
}