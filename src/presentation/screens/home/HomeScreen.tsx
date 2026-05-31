import { HeroSection } from "./components/HeroSection";
import { InvitationInfo } from "./components/InvitationInfo";
import { Countdown } from "./components/Countdown";
import { ActionButtons } from "./components/ActionButtons";
import { useHomeViewModel } from "./HomeViewModel";

export function HomeScreen() {
  const { state, actions } = useHomeViewModel();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex justify-center">
      {/* App Container (simula largura de celular) */}
      <div className="w-full max-w-[430px] bg-white min-h-screen shadow-xl">
        <HeroSection />

        <InvitationInfo
          bride={state.bride}
          groom={state.groom}
          date={state.date}
          time={state.time}
          location={state.location}
          address={state.address}
        />

        <Countdown {...state.countdown} />

        <ActionButtons
          onConfirm={actions.confirmPresence}
          onGifts={actions.openGifts}
          onMaps={actions.openMaps}
          onPreWedding={actions.openPreWedding}
        />
      </div>
    </div>
  );
}
