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
  companions: string[];
  message: string;
};

const MAX_GUESTS = 6;

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
    companions: [],
    message: "",
  });

  const actions = {
    setFullName: (value: string) =>
      setForm((p) => ({ ...p, fullName: value })),

    incGuests: () =>
      setForm((p) => {
        if (p.guests >= MAX_GUESTS) return p;

        return {
          ...p,
          guests: p.guests + 1,
          companions: [...p.companions, ""], // adiciona novo campo
        };
      }),

    decGuests: () =>
      setForm((p) => {
        if (p.guests <= 1) return p;

        return {
          ...p,
          guests: p.guests - 1,
          companions: p.companions.slice(0, -1), // remove último acompanhante
        };
      }),

    setCompanion: (index: number, value: string) =>
      setForm((p) => {
        const updated = [...p.companions];
        updated[index] = value;
        return { ...p, companions: updated };
      }),

    setMessage: (value: string) =>
      setForm((p) => ({ ...p, message: value })),

    submit: () => {
      if (!form.fullName.trim()) {
        alert("Informe seu nome.");
        return;
      }

      alert(
        `Confirmado!\n\nTitular: ${form.fullName}\nAcompanhantes: ${form.companions.join(
          ", "
        )}`
      );
    },
  };

  return { weddingInfo, form, actions };
}
