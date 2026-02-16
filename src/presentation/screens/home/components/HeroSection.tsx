import hero from "../../../../assets/hero.jpg";

export function HeroSection() {
  return (
    <div className="relative h-[70vh] w-full">
      <img
        src={hero}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-16 w-full text-center">
        <p className="tracking-[0.3em] text-xs text-amber-400">
          SAVE THE DATE
        </p>
        <div className="mt-2 h-10 w-px bg-amber-400 mx-auto" />
      </div>
    </div>
  );
}
