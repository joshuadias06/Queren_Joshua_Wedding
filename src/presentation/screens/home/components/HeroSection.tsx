import hero from "../../../../assets/bg_home.jpeg";

export function HeroSection() {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      
      {/* Imagem */}
      <img
        src={hero}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro suave para melhorar leitura */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Conteúdo */}
      <div className="absolute bottom-16 w-full text-center">
        <p className="tracking-[0.4em] text-xs text-white/80">
          SAVE THE DATE
        </p>

        <div className="mt-3 h-12 w-px bg-white mx-auto opacity-80" />
      </div>
    </div>
  );
}
