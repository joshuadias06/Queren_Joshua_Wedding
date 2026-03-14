import { useGiftsViewModel } from "./GiftsViewModel";
import { GiftsTopBar } from "./components/GiftsTopBar";
import { GiftsHeader } from "./components/GiftHeader";
import { ExternalListCard } from "./components/ExternalListCard";
import { PixCard } from "./components/PixCard";
import { SuggestionCard } from "./components/SuggestionCard";

export function GiftsScreen() {
  const { state, actions } = useGiftsViewModel();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-white shadow-xl pb-14">
        <GiftsTopBar title={state.titleTop} onBack={actions.goBack} />

        <GiftsHeader title={state.title} subtitle={state.subtitle} />

        <ExternalListCard
          title={state.externalList.title}
          description={state.externalList.description}
          buttonText={state.externalList.buttonText}
          onClick={actions.openExternalList}
        />

        <PixCard
          label={state.pix.label}
          pixKey={state.pix.key}
          onCopy={actions.copyPixKey}
        />

        {/* Outras sugestões */}
        <div className="mt-8 px-6">
          <div className="flex items-center justify-between">
            <p
              className="text-xs tracking-[0.35em] text-[var(--color-secondary)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {state.suggestionsTitle}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {state.suggestions.map((s) => (
              <SuggestionCard
                key={s.id}
                iconName={s.iconName}
                title={s.title}
                subtitle={s.subtitle}
                price={s.price}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center px-6">
          <p
            className="text-[10px] tracking-[0.45em] text-[var(--color-secondary)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {state.footer.toUpperCase()}
          </p>

          <p
            className="mt-2 text-2xl text-[var(--color-primary)]"
            style={{ fontFamily: "var(--font-elegant)" }}
          >
            {state.footerNames}
          </p>
        </div>
      </div>
    </div>
  );
}
