import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function useHomeViewModel() {
  const navigate = useNavigate();

  // 20 de junho de 2026 às 16:00 (horário Brasil -03:00)
  const weddingDate = new Date("2026-06-20T16:00:00-03:00");

  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = weddingDate.getTime() - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const address =
    "Rua Henrique Hessel, Rodoanel Mário Covas, 13 - Parelheiros, São Paulo - SP, 04882-010";

  const actions = {
    confirmPresence: () => navigate("/rsvp"),

    openGifts: () => alert("Lista de presentes"),

    openMaps: () => {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`;
      window.open(url, "_blank");
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
      address,
    },
    actions,
  };
}
