import { useMemo } from "react";

type Suggestion = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  iconName: string; // material symbol name
};

export function useGiftsViewModel() {
  const state = useMemo(() => {
    return {
      titleTop: "NOSSA LISTA",
      title: "Presentes & Carinho",
      subtitle:
        "Sua presença é o nosso maior presente. Mas se desejar nos presentear, aqui estão algumas sugestões.",

      externalList: {
        title: "Nossa Lista de Presentes",
        description:
          "Preparamos uma lista especial com itens para o nosso novo lar.",
        buttonText: "Acessar Lista",
        url: "https://www.casasbahia.com.br/",
      },

      pix: {
        label: "CONTRIBUIÇÃO VIA PIX",
        key: "querenjoshua@casamento.com",
      },

      suggestionsTitle: "OUTRAS SUGESTÕES",


      suggestions: [
        {
          id: "romantic-dinner",
          title: "Jantar Romântico",
          subtitle: "Lua de Mel",
          price: "R$ 250,00",
          iconName: "restaurant",
        },
        {
          id: "flight-tickets",
          title: "Passagens Aéreas",
          subtitle: "Ajuda na viagem",
          price: "R$ 500,00",
          iconName: "flight",
        },
      ] as Suggestion[],

      footer: "Com amor,",
      footerNames: "Queren & Joshua",
    };
  }, []);

  const actions = {
    goBack: () => history.back(),

    openExternalList: () => window.open(state.externalList.url, "_blank"),

    copyPixKey: async () => {
      try {
        await navigator.clipboard.writeText(state.pix.key);
        alert("Chave PIX copiada!");
      } catch {
        // fallback
        const textarea = document.createElement("textarea");
        textarea.value = state.pix.key;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Chave PIX copiada!");
      }
    },

    giftSuggestion: (id: string) => {
      alert(`Presentear: ${id}`);
    },

    viewSuggestions: () => alert("Ver sugestões"),
  };

  return { state, actions };
}
