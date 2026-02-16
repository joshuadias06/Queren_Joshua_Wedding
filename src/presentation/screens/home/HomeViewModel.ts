import { useEffect, useState } from "react";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
};

export function useHomeViewModel() {
  const weddingDate = new Date("2024-10-15T17:00:00");

  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (diff / (1000 * 60)) % 60
      );

      setCountdown({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const actions = {
    confirmPresence: () => {
      alert("Confirmar presença");
    },
    openGifts: () => {
      alert("Lista de presentes");
    },
    openMaps: () => {
      window.open("https://maps.google.com", "_blank");
    },
  };

  return {
    state: {
      countdown,
      bride: "Queren",
      groom: "Joshua",
      date: "20 de Junho de 2026",
      time: "Às 16:00 horas",
      location: "Chacará Recanto Tropical",
      address: "Rua Henrique Hessel, Rodoanel Mário Covas, 13 - Parelheiros, São Paulo - SP, 04882-010",
    },
    actions,
  };
}
