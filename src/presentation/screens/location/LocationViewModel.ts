import { useNavigate } from "react-router-dom";

export function useLocationViewModel() {
  const navigate = useNavigate();

  const address =
    "Rua Henrique Hessel, Rodoanel Mário Covas, 13 - Parelheiros, São Paulo - SP, 04882-010";

  const actions = {
    goBack: () => navigate(-1),

    openMaps: () => {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`;
      window.open(url, "_blank");
    },
  };

  return {
    state: {
      title: "Localização",
      venue: "Chácara Recanto Tropical",
      subtitle: "Um refúgio cercado pela natureza",
      ceremony: {
        title: "Cerimônia",
        time: "Às 16h00",
        location: "Chácara Recanto Tropical",
        address,
      },
      reception: {
        title: "Recepção",
        time: "Após a cerimônia",
        location: "Mesmo local",
        details: "Estacionamento no local",
      },
    },
    actions,
  };
}
