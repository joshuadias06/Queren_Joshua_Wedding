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
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-6">
        <div className="max-w-md text-center rounded-2xl bg-white p-6 shadow">
          <h1 className="text-xl font-semibold">Abra no celular 📱</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Esta experiência foi feita para telas mobile. Reduza a janela ou use
            o modo responsivo do navegador.
          </p>

          <div className="mt-4 text-sm text-neutral-500">
            Dica: no Chrome aperte <b>F12</b> → ícone de celular/tablet.
          </div>
        </div>
      </div>
    );
  }

  // Mobile app frame
  return <div className="min-h-screen bg-white">{children}</div>;
}
