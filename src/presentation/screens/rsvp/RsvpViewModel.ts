import { useMemo, useState } from "react";

type WeddingInfo = {
  bride: string;
  groom: string;
  date: string;
  time: string;
  location: string;
  address: string;
};

type FormState = {
  fullName: string;
  guests: number;
  message: string;
};

export function useRsvpViewModel() {
  const weddingInfo: WeddingInfo = useMemo(
    () => ({
      bride: "Queren",
      groom: "Joshua",
      date: "20 de Junho de 2026",
      time: "Às 16:00 horas",
      location: "Chacará Recanto Tropical",
      address:
        "Rua Henrique Hessel, Rodoanel Mário Covas,\n13 - Parelheiros, São Paulo - SP, 04882-010",
    }),
    []
  );

  const [form, setForm] = useState<FormState>({
    fullName: "",
    guests: 1,
    message: "",
  });

  const actions = {
    setFullName: (value: string) =>
      setForm((p) => ({ ...p, fullName: value })),

    incGuests: () =>
      setForm((p) => ({ ...p, guests: Math.min(20, p.guests + 1) })),

    decGuests: () =>
      setForm((p) => ({ ...p, guests: Math.max(1, p.guests - 1) })),

    setMessage: (value: string) => setForm((p) => ({ ...p, message: value })),

    submit: () => {
      // depois: chamar usecase / API
      // por enquanto: só validação simples
      if (!form.fullName.trim()) {
        alert("Por favor, informe seu nome.");
        return;
      }

      alert(
        `Presença confirmada!\n\nNome: ${form.fullName}\nAcompanhantes: ${form.guests}\nMensagem: ${form.message || "-"}`
      );
    },
  };

  return { weddingInfo, form, actions };
}
