import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { usePreWeddingViewModel } from "./PreWeddingViewModel";
import { PhotoGrid } from "./components/PhotoGrid";
import { PreWeddingHeader } from "./components/PreWeddingHeader";
import { PhotoPreview } from "./components/PhotoPreview";

export function PreWeddingScreen() {
  const { photos, perfil } = usePreWeddingViewModel();

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-2xl mx-auto px-4 pt-8">
          <PreWeddingHeader profileImage={perfil} />

          <PhotoGrid
            photos={photos}
            onPhotoClick={setSelectedPhoto}
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <PhotoPreview
            photo={selectedPhoto}
            profileImage={perfil}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}