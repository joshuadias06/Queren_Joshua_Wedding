import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

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

type SuccessPayload = {
  name: string;
  companions: string[];
  message: string;
};

export function useRsvpViewModel() {
  const navigate = useNavigate(); // 👈 ADICIONADO

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

  const [successOpen, setSuccessOpen] = useState(false);
  const [successPayload, setSuccessPayload] = useState<SuccessPayload>({
    name: "",
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
          companions: [...p.companions, ""],
        };
      }),

    decGuests: () =>
      setForm((p) => {
        if (p.guests <= 1) return p;
        return {
          ...p,
          guests: p.guests - 1,
          companions: p.companions.slice(0, -1),
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

    // 🔥 ALTERAÇÃO AQUI
    closeSuccess: () => {
      setSuccessOpen(false);
      navigate("/"); // 👈 Redireciona para Home
    },

    submit: async () => {
      const fullName = form.fullName.trim();
      if (!fullName) {
        alert("Informe seu nome.");
        return;
      }

      const FORM_RESPONSE_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLScPJDOFs6k2zHFNSjOl381YnipIponUDNJCBYicO19078kWRg/formResponse";

      const ENTRY_1 = "entry.1329022696";
      const ENTRY_2 = "entry.838254673";
      const ENTRY_3 = "entry.2005076723";
      const ENTRY_4 = "entry.2136440108";
      const ENTRY_5 = "entry.1077044315";
      const ENTRY_6 = "entry.392938804";

      const c = form.companions.map((x) => x.trim());

      const body = new URLSearchParams();
      body.append(ENTRY_1, fullName);
      if (c[0]) body.append(ENTRY_2, c[0]);
      if (c[1]) body.append(ENTRY_3, c[1]);
      if (c[2]) body.append(ENTRY_4, c[2]);
      if (c[3]) body.append(ENTRY_5, c[3]);
      if (c[4]) body.append(ENTRY_6, c[4]);

      try {
        await fetch(FORM_RESPONSE_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });

        setSuccessPayload({
          name: fullName,
          companions: c.filter(Boolean).slice(0, 5),
          message: form.message,
        });

        setSuccessOpen(true);

        setForm({
          fullName: "",
          guests: 1,
          companions: [],
          message: "",
        });
      } catch (err) {
        alert("Não consegui enviar agora. Tente novamente.");
      }
    },
  };

  return { weddingInfo, form, actions, successOpen, successPayload };
}