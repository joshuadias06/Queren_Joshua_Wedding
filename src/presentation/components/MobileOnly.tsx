import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  mobileMaxWidth?: number; // celulares grandes
  tabletMaxWidth?: number; // tablets / iPads
};

export function MobileOnly({
  children,
  mobileMaxWidth = 820,
  tabletMaxWidth = 1180,
}: Props) {
  const [isAllowedDevice, setIsAllowedDevice] = useState(true);

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // menor lado ajuda a identificar tablets/celulares em portrait/landscape
      const shortestSide = Math.min(width, height);

      // toque real (celular/tablet)
      const isTouchDevice =
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;

      // celular/tablet por tamanho
      const isMobileLike = shortestSide <= mobileMaxWidth;
      const isTabletLike = width <= tabletMaxWidth && isTouchDevice;

      // permite celulares e tablets; bloqueia desktop de verdade
      setIsAllowedDevice(isMobileLike || isTabletLike);
    };

    check();

    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, [mobileMaxWidth, tabletMaxWidth]);

  if (!isAllowedDevice) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg)] px-4 sm:px-6">
        {/* fundo */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[var(--color-primary)]/20" />
          <div className="absolute top-20 -right-24 h-72 w-72 rounded-full bg-[var(--color-secondary)]/15" />
          <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[var(--color-primary)]/10" />
        </div>

        {/* Card principal responsivo */}
        <div className="relative w-full max-w-[min(92vw,560px)] rounded-[28px] sm:rounded-[36px] bg-white px-6 py-8 text-center shadow-2xl sm:px-10 sm:py-12">
          <p
            className="text-2xl text-[var(--color-secondary)] sm:text-3xl"
            style={{ fontFamily: "var(--font-elegant)" }}
          >
            Queren & Joshua
          </p>

          <div className="mx-auto mt-3 h-px w-12 bg-[var(--color-secondary)] opacity-50" />

          <div className="mt-8 flex justify-center sm:mt-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10 sm:h-16 sm:w-16">
              <span
                className="material-symbols-outlined text-[var(--color-secondary)]"
                style={{ fontSize: "32px" }}
              >
                smartphone
              </span>
            </div>
          </div>

          <h1
            className="mt-8 text-3xl leading-tight text-[var(--color-primary)] sm:mt-10 sm:text-5xl"
            style={{ fontFamily: "var(--font-elegant)" }}
          >
            Melhor Visualizado
            <br />
            no Celular
          </h1>

          <div
            className="mt-6 space-y-4 text-[var(--color-text)] sm:mt-8 sm:space-y-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <p className="text-base leading-relaxed sm:text-lg">
              Esta experiência foi pensada com carinho para telas de celular.
            </p>

            <p className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              Para uma visualização perfeita, acesse pelo seu smartphone, tablet
              ou reduza a janela do navegador.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5">
            <div className="h-px w-16 bg-[var(--color-secondary)] opacity-30 sm:w-24" />
            <span
              className="material-symbols-outlined text-[var(--color-secondary)]"
              style={{ fontSize: "16px" }}
            >
              favorite
            </span>
            <div className="h-px w-16 bg-[var(--color-secondary)] opacity-30 sm:w-24" />
          </div>

          <div className="mt-8 rounded-2xl bg-neutral-100 px-4 py-4 text-left sm:mt-10 sm:px-6 sm:py-5">
            <div className="flex items-start gap-3">
              <span
                className="material-symbols-outlined text-[var(--color-primary)]"
                style={{ fontSize: "22px" }}
              >
                lightbulb
              </span>

              <p
                className="text-sm leading-relaxed text-[var(--color-muted)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="font-semibold text-[var(--color-text)]">
                  Dica:
                </span>{" "}
                no Chrome, aperte <span className="font-semibold">F12</span> e
                clique no ícone de celular/tablet no canto superior esquerdo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-screen-md">
        {children}
      </div>
    </div>
  );
}