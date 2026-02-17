import map from "../../../../assets/map.jpg";

export function MapCard() {
  return (
    <div className="mx-6 mt-4 rounded-3xl bg-white shadow p-3">
      <div className="rounded-2xl overflow-hidden relative">
        <img
          src={map}
          className="w-full h-64 object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>
    </div>
  );
}
