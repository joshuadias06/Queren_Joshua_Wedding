import { usePreWeddingViewModel } from "./PreWeddingViewModel";
import { PhotoGrid } from "./components/PhotoGrid";
import { PreWeddingHeader } from "./components/PreWeddingHeader";

export function PreWeddingScreen() {
  const { photos, perfil } = usePreWeddingViewModel();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-2xl mx-auto px-4">
        <PreWeddingHeader profileImage={perfil} />
        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
}