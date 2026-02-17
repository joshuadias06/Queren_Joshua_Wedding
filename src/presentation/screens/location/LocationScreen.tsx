import { useLocationViewModel } from "./LocationViewModel";
import { LocationTopBar } from "./components/LocationTopBar";
import { MapCard } from "./components/MapCard";
import { TimelineItem } from "./components/TimelineItem";

export function LocationScreen() {
    const { state, actions } = useLocationViewModel();

    return (
        <div className="min-h-screen bg-[var(--color-bg)] flex justify-center">
            <div className="w-full max-w-[430px] min-h-screen bg-white shadow-xl pb-12">

                <LocationTopBar
                    title={state.title}
                    onBack={actions.goBack}
                />

                <MapCard />

                <div className="mt-6 text-center px-6">
                    <h2
                        className="text-3xl text-[var(--color-primary)]"
                        style={{ fontFamily: "var(--font-elegant)" }}
                    >
                        {state.venue}
                    </h2>

                    <p
                        className="mt-2 text-sm text-[var(--color-muted)]"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        {state.subtitle}
                    </p>
                </div>

                <div className="px-6 mt-8">
                    <TimelineItem
                        icon="church"
                        title={state.ceremony.title}
                        time={state.ceremony.time}
                        lines={[state.ceremony.location, state.ceremony.address]}
                    />

                    <TimelineItem
                        icon="celebration"
                        title={state.reception.title}
                        time={state.reception.time}
                        lines={[state.reception.location, state.reception.details]}
                        isLast
                    />
                </div>


                <div className="mt-10 px-6">
                    <button
                        onClick={actions.openMaps}
                        className="w-full bg-[var(--color-primary)] text-white py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        <span className="material-symbols-outlined">
                            map
                        </span>
                        Abrir no Google Maps
                    </button>
                </div>

                <p
                    className="mt-8 text-center text-[var(--color-secondary)] text-xs tracking-[0.35em]"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    ESPERAMOS POR VOCÊS
                </p>

            </div>
        </div>
    );
}
