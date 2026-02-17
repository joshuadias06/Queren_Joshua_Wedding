import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  maxWidth?: number; // padrão 430
};

export function MobileOnly({ children, maxWidth = 430 }: Props) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= maxWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [maxWidth]);

  if (!isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg)] px-6">
        {/* fundo leve com “manchas” (simples) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[var(--color-primary)]/20" />
          <div className="absolute top-20 -right-24 h-72 w-72 rounded-full bg-[var(--color-secondary)]/15" />
          <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[var(--color-primary)]/10" />
        </div>

        {/* Card principal */}
        <div className="relative w-full max-w-[520px] rounded-[36px] bg-white shadow-2xl px-10 py-12 text-center">
          {/* “Queren & Joshua” */}
          <p
            className="text-[var(--color-secondary)] text-3xl"
            style={{ fontFamily: "var(--font-elegant)" }}
          >
            Queren & Joshua
          </p>

          <div className="mt-3 mx-auto h-px w-12 bg-[var(--color-secondary)] opacity-50" />

          {/* Ícone celular */}
          <div className="mt-10 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-[var(--color-secondary)]"
                style={{ fontSize: "34px" }}
              >
                smartphone
              </span>
            </div>
          </div>

          {/* Título */}
          <h1
            className="mt-10 text-5xl leading-tight text-[var(--color-primary)]"
            style={{ fontFamily: "var(--font-elegant)" }}
          >
            Melhor Visualizado
            <br />
            no Celular
          </h1>

          {/* Texto */}
          <div
            className="mt-8 space-y-6 text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <p className="text-lg leading-relaxed">
              Esta experiência foi pensada com carinho para telas de celular.
            </p>

            <p className="text-lg leading-relaxed text-[var(--color-muted)]">
              Para uma visualização perfeita, por favor, acesse pelo seu smartphone
              ou reduza a janela do seu navegador.
            </p>
          </div>

          {/* Divisor com coração */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <div className="h-px w-24 bg-[var(--color-secondary)] opacity-30" />
            <span
              className="material-symbols-outlined text-[var(--color-secondary)]"
              style={{ fontSize: "16px" }}
            >
              favorite
            </span>
            <div className="h-px w-24 bg-[var(--color-secondary)] opacity-30" />
          </div>

          {/* Caixa de dica */}
          <div className="mt-10 rounded-2xl bg-neutral-100 px-6 py-5 text-left">
            <div className="flex gap-3 items-start">
              <span
                className="material-symbols-outlined text-[var(--color-primary)]"
                style={{ fontSize: "22px" }}
              >
                lightbulb
              </span>

              <p
                className="text-sm text-[var(--color-muted)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="font-semibold text-[var(--color-text)]">Dica:</span>{" "}
                No Chrome, você pode apertar <span className="font-semibold">F12</span>{" "}
                e clicar no ícone de celular/tablet no canto superior esquerdo do painel.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile app frame
  return <div className="min-h-screen bg-white">{children}</div>;
}
