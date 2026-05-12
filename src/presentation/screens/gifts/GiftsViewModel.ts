import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Suggestion = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  iconName: string;
};

export function useGiftsViewModel() {
  const navigate = useNavigate();
  const location = useLocation();

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
        url: "https://www.querodecasamento.com.br/lista-de-casamento/querenjoshuawedding",
      },

      pix: {
        label: "CONTRIBUIÇÃO VIA PIX",
        key: "querenjoshuawedding@gmail.com",
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
          id: "outbound-flights",
          title: "Passagens Aéreas",
          subtitle: "Ida para a viagem",
          price: "R$ 300,00",
          iconName: "flight",
        },
        {
          id: "return-flights",
          title: "Passagens Aéreas",
          subtitle: "Volta da viagem",
          price: "R$ 300,00",
          iconName: "flight",
        },
        {
          id: "tours",
          title: "Passeio dos Noivos.",
          subtitle: "Ajuda na viagem",
          price: "R$ 300,00",
          iconName: "terrain",
        },
        {
          id: "suitcases",
          title: "Malas de Viagem",
          subtitle: "Para muitas aventuras",
          price: "R$ 300,00",
          iconName: "work_outline",
        },
        {
          id: "honeymoon-fund",
          title: "DaySpa",
          subtitle: "Para relaxar juntos",
          price: "R$ 100,00",
          iconName: "card_giftcard",
        },
        {
          id: "home-decor",
          title: "Para nosso lar",
          subtitle: "Um presente cheio de afeto",
          price: "R$ 80,00",
          iconName: "home",
        },
        {
          id: "kitchen-appliances",
          title: "Eletrodomésticos",
          subtitle: "Para nossa a nova cozinha",
          price: "R$ 150,00",
          iconName: "kitchen",
        },
        {
          id: "gift-card",
          title: "Presente com Amor",
          subtitle: "Para celebramos a nova fase",
          price: "R$ 100,00",
          iconName: "card_giftcard",
        },
        {
          id: "details-surprise",
          title: "Detalhe Surpresa",
          subtitle: "Para tornar nosso dia ainda mais especial",
          price: "R$ 50,00",
          iconName: "star",
        },
      ] as Suggestion[],

      footer: "Com carinho,",
      footerNames: "Queren & Joshua",
    };
  }, []);

  const actions = {
    goBack: () => {
      if (location.key === "default") {
        navigate("/", { replace: true });
      } else {
        navigate(-1);
      }
    },

    openExternalList: () =>
      window.open(state.externalList.url, "_blank"),

    copyPixKey: async () => {
      try {
        await navigator.clipboard.writeText(state.pix.key);
        alert("Chave PIX copiada!");
      } catch {
        const textarea = document.createElement("textarea");
        textarea.value = state.pix.key;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        alert("Chave PIX copiada!");
      }
    },
  };

  return { state, actions };
}