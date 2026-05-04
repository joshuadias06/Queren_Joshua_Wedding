export const usePreWeddingViewModel = () => {
  const images = import.meta.glob(
    "/src/assets/photos/*.jpg",
    { eager: true }
  );

  const entries = Object.entries(images);

  const photos = entries.map(([, img]: any) => img.default);

  const perfil = entries.find(([path]) =>
    path.includes("Foto-61.jpg")
  )?.[1] as any;

  return {
    photos,
    perfil: perfil?.default
  };
};