import { Icon } from "../../../../presentation/design-system/components/Icon";

type Props = {
  onConfirm: () => void;
  onPreWedding: () => void;
  onGifts: () => void;
  onMaps: () => void;
};

export function ActionButtons({
  onConfirm,
  onPreWedding,
  onGifts,
  onMaps,
}: Props) {
  return (
    <div className="bg-[var(--color-bg)] px-6 pb-12 space-y-4">
      {/* Confirmar Presença */}
      <button
        onClick={onConfirm}
        className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl shadow-md transition-opacity hover:opacity-90"
      >
        Confirmar Presença
      </button>

      {/* Fotos do Pré-Wedding */}
      <button
        onClick={onPreWedding}
        className="w-full flex items-center justify-center gap-2 border border-[var(--color-secondary)] text-[var(--color-secondary)] py-4 rounded-xl transition-all hover:bg-[var(--color-secondary)] hover:text-white"
      >
        <Icon name="photo_library" size={20} />
        Fotos do Pré-Wedding
      </button>

      {/* Lista de Presentes */}
      <button
        onClick={onGifts}
        className="w-full flex items-center justify-center gap-2 border border-[var(--color-secondary)] text-[var(--color-secondary)] py-4 rounded-xl transition-all hover:bg-[var(--color-secondary)] hover:text-white"
      >
        <Icon name="redeem" size={20} />
        Lista de Presentes
      </button>

      {/* Ver no Google Maps */}
      <button
        onClick={onMaps}
        className="w-full flex items-center justify-center gap-2 border border-[var(--color-secondary)] text-[var(--color-secondary)] py-4 rounded-xl transition-all hover:bg-[var(--color-secondary)] hover:text-white"
      >
        <Icon name="location_on" size={20} />
        Ver no Google Maps
      </button>

      {/* Assinatura */}
      <div className="mt-10 text-center px-6">
        <p
          className="text-[10px] tracking-[0.45em] text-[var(--color-secondary)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          COM CARINHO,
        </p>

        <p
          className="mt-2 text-2xl text-[var(--color-primary)]"
          style={{ fontFamily: "var(--font-elegant)" }}
        >
          Queren e Joshua
        </p>
      </div>
    </div>
  );
}