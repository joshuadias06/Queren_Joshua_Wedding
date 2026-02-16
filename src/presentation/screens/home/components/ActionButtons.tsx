type Props = {
  onConfirm: () => void;
  onGifts: () => void;
  onMaps: () => void;
};

export function ActionButtons({
  onConfirm,
  onGifts,
  onMaps,
}: Props) {
  return (
    <div className="bg-[#F5F3F1] px-6 pb-12 space-y-4">
      <button
        onClick={onConfirm}
        className="w-full bg-purple-400 text-white py-4 rounded-xl shadow-md"
      >
        Confirmar Presença
      </button>

      <button
        onClick={onGifts}
        className="w-full border border-amber-500 text-amber-600 py-4 rounded-xl"
      >
        Lista de Presentes
      </button>

      <button
        onClick={onMaps}
        className="w-full text-gray-400 text-sm mt-4"
      >
        Ver no Google Maps
      </button>

      <p className="text-center text-sm italic text-gray-400 mt-10">
        Com carinho, Lucas & Mariana
      </p>
    </div>
  );
}
