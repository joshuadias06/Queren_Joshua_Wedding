import { Link } from "react-router-dom";

type Props = {
  profileImage: string;
};

export function PreWeddingHeader({ profileImage }: Props) {
  return (
    <div className="w-full mb-8">
      {/* Topo */}
      <div className="flex items-center gap-6">
        {/* Foto maior */}
        <div className="w-36 h-36 rounded-full p-[4px] bg-gradient-to-tr from-purple-400 via-pink-400 to-purple-600">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              src={profileImage}
              alt="perfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Nome com mesma fonte da Home */}
        <div>
          <p
            className="text-3xl text-[var(--color-primary)]"
            style={{ fontFamily: "var(--font-elegant)" }}
          >
            Queren e Joshua
          </p>
        </div>
      </div>
      {/* Bio */}
      <div className="mt-6">
        <p
          className="text-xl text-purple-700"
          style={{ fontFamily: "var(--font-elegant)" }}
        >
          Um capítulo especial da nossa história ✨
        </p>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          Registrando momentos, sorrisos e a contagem regressiva para o nosso grande dia.
        </p>
      </div>

      {/* Botão */}
      <div className="mt-5">
        <button className="w-full py-3 rounded-lg font-medium text-white bg-purple-500 hover:bg-purple-600 transition shadow-sm">
          Deixe sua mensagem para os noivos
        </button>
      </div>

      <div className="mt-3">
        <Link to="/rsvp">
          <button className="w-full py-3 rounded-lg font-medium border border-purple-500 text-purple-600 hover:bg-purple-50 transition shadow-sm">
            Confirmar sua presença
          </button>
        </Link>
      </div>
    </div>
  );
}