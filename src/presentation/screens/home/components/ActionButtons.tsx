import { Icon } from "../../../../presentation/design-system/components/Icon";

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
    <div className="bg-[var(--color-bg)] px-6 pb-12 space-y-4">

      {/* Confirmar Presença (SEM ÍCONE) */}
      <button
        onClick={onConfirm}
        className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl shadow-md transition-opacity hover:opacity-90"
      >
        Confirmar Presença
      </button>

      {/* Lista de Presentes (ÍCONE DE PRESENTE) */}
      <button
        onClick={onGifts}
        className="w-full flex items-center justify-center gap-2 border border-[var(--color-secondary)] text-[var(--color-secondary)] py-4 rounded-xl transition-all hover:bg-[var(--color-secondary)] hover:text-white"
      >
        <Icon name="redeem" size={20} />
        Lista de Presentes
      </button>

      {/* Ver no Google Maps (ÍCONE LOCALIZAÇÃO) */}
      <button
        onClick={onMaps}
        className="w-full flex items-center justify-center gap-2 text-[var(--color-muted)] text-sm mt-4"
      >
        <Icon name="location_on" size={18} />
        Ver no Google Maps
      </button>

      {/* Assinatura */}
      <p className="text-center text-sm italic text-[var(--color-muted)] mt-10">
        Com carinho, Queren & Joshua
      </p>
    </div>
  );
}
